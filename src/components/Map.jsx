import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Polyline, Popup, useMap } from "react-leaflet";
import SalesmanSchedule from "./SalesmanSchedule.jsx";
import { subAreaLocations } from "../data/subAreaLocations.js";
import { availableAreas, areaFiles, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "../constants/areaData.js";
import { createIcon, zoomToSubArea as zoomToSubAreaHelper, geoJsonStyle as geoJsonStyleHelper } from "../utils/mapHelpers.js";
import { showCoordinateToast } from "../utils/coordinateToast.js";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [allGeoJsonData, setAllGeoJsonData] = useState({});
  const [visibleLayers, setVisibleLayers] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingAreaId, setLoadingAreaId] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [panelVisible, setPanelVisible] = useState(true);
  const [panelMinimized, setPanelMinimized] = useState(false);
  const [selectedSubArea, setSelectedSubArea] = useState(null);
  const [subAreaGeoJsonData, setSubAreaGeoJsonData] = useState({});
  const mapRef = useRef(null);

  // Dynamic state for showing sub areas per area
  const [showSubAreasMap, setShowSubAreasMap] = useState({
    dalam_kota: true,
    jasinga: true,
    cisarua: true,
    cigombong: true,
    ciseeng: true,
    palsi: true,
    citereup: true,
    klapanunggal: true,
  });

  // Dynamic state for showing sub area lists per area
  const [showSubAreaListMap, setShowSubAreaListMap] = useState({});

  // Helper functions to toggle sub areas
  const toggleSubArea = (areaId) => {
    setShowSubAreasMap(prev => ({
      ...prev,
      [areaId]: !prev[areaId]
    }));
  };

  const toggleSubAreaList = (areaId) => {
    setShowSubAreaListMap(prev => ({
      ...prev,
      [areaId]: !prev[areaId]
    }));
  };

  // Function to load all areas on initial load
  const loadAllAreasInitial = async () => {
    await loadAreaData(["semua"]);
    setSelectedAreas([availableAreas.find((a) => a.id === "semua")]);
  };

  // Load all areas on component mount
  useEffect(() => {
    loadAllAreasInitial();
  }, []);

  // Load sub area GeoJSON files dynamically for all areas
  useEffect(() => {
    const loadSubAreaGeoJsonFiles = async () => {
      const geoJsonDataMap = {};

      // Loop through all available area keys in subAreaLocations
      for (const areaKey in subAreaLocations) {
        // Check if this area is selected AND sub areas are enabled for this area
        const isAreaSelected = selectedAreas.some((area) => area.id === areaKey);
        const isSubAreasEnabled = showSubAreasMap[areaKey];

        if (isAreaSelected && isSubAreasEnabled && subAreaLocations[areaKey]) {
          for (const location of subAreaLocations[areaKey]) {
            if (location.geojsonPath) {
              try {
                const response = await fetch(location.geojsonPath);
                if (response.ok) {
                  const data = await response.json();
                  // Convert GeoJSON coordinates from [lon, lat] to [lat, lon] for Leaflet
                  if (data.features && data.features.length > 0) {
                    const allLines = [];

                    // Loop through all features (in case QGIS exports multiple features)
                    for (const feature of data.features) {
                      if (feature.geometry && feature.geometry.coordinates) {
                        const geometryType = feature.geometry.type;

                        if (geometryType === 'MultiLineString') {
                          // Handle MultiLineString - array of lines
                          const lines = feature.geometry.coordinates.map(line =>
                            line.map(coord => [coord[1], coord[0]])
                          );
                          allLines.push(...lines);
                        } else if (geometryType === 'LineString') {
                          // Handle single LineString
                          const coords = feature.geometry.coordinates.map(coord => [coord[1], coord[0]]);
                          allLines.push(coords);
                        }
                      }
                    }

                    if (allLines.length > 0) {
                      geoJsonDataMap[location.name] = allLines;
                    }
                  }
                } else {
                  console.warn(`GeoJSON file not found: ${location.geojsonPath}`);
                }
              } catch (error) {
                console.error(`Error loading GeoJSON for ${location.name}:`, error);
              }
            }
          }
        }
      }

      setSubAreaGeoJsonData(geoJsonDataMap);
    };

    loadSubAreaGeoJsonFiles();
  }, [showSubAreasMap, selectedAreas]);

  // Function to load specific area data
  const loadAreaData = async (areaIds) => {
    setLoading(true);
    const dataMap = {};
    const initialVisibleLayers = {};
    let successCount = 0;
    let totalFiles = 0;

    try {
      // If "semua" is in the list, load all areas
      if (areaIds.includes("semua")) {
        for (const [areaName, fileList] of Object.entries(areaFiles)) {
          const areaInfo = availableAreas.find((a) => a.id === areaName);
          const areaColor = areaInfo?.color || "#6b7280";
          totalFiles += fileList.length;

          for (const fileObj of fileList) {
            try {
              const response = await fetch(`/data/geojson/${fileObj.file}`);
              if (response.ok) {
                const data = await response.json();
                const fileId = `${areaName}-${fileObj.file.replace(
                  ".geojson",
                  ""
                )}`;
                dataMap[fileId] = {
                  ...data,
                  areaId: areaName,
                  areaColor,
                  displayName: fileObj.name,
                  subArea: fileObj.subArea || null,
                  originalSubArea: fileObj.subArea || null,
                };
                initialVisibleLayers[fileId] = true;
                successCount++;
              } else {
                console.warn(`File not found: ${fileObj.file} for ${areaName}`);
              }
            } catch (error) {
              console.error(
                `Error loading ${fileObj.file} from ${areaName}:`,
                error
              );
            }
          }
        }
      } else {
        // Load specific areas
        for (const areaId of areaIds) {
          if (areaFiles[areaId]) {
            const fileList = areaFiles[areaId];
            const areaInfo = availableAreas.find((a) => a.id === areaId);
            const areaColor = areaInfo?.color || "#6b7280";
            totalFiles += fileList.length;

            for (const fileObj of fileList) {
              try {
                const response = await fetch(`/data/geojson/${fileObj.file}`);
                if (response.ok) {
                  const data = await response.json();
                  const fileId = `${areaId}-${fileObj.file.replace(
                    ".geojson",
                    ""
                  )}`;
                  dataMap[fileId] = {
                    ...data,
                    areaId,
                    areaColor,
                    displayName: fileObj.name,
                    subArea: fileObj.subArea || null,
                    originalSubArea: fileObj.subArea || null,
                  };
                  initialVisibleLayers[fileId] = true;
                  successCount++;
                } else {
                  console.warn(`File not found: ${fileObj.file} for ${areaId}`);
                }
              } catch (error) {
                console.error(
                  `Error loading ${fileObj.file} from ${areaId}:`,
                  error
                );
              }
            }
          }
        }
      }

      console.log(
        `Loaded ${successCount}/${totalFiles} files for areas: ${areaIds.join(
          ", "
        )}`
      );

      if (successCount === 0) {
        console.warn(`No files loaded for areas: ${areaIds.join(", ")}`);
      }
    } catch (error) {
      console.error(
        `Critical error loading areas ${areaIds.join(", ")}:`,
        error
      );
    } finally {
      setAllGeoJsonData(dataMap);
      setVisibleLayers(initialVisibleLayers);
      setLoading(false);
    }
  };

  const handleAreaToggle = async (area) => {
    setLoadingAreaId(area.id);

    if (area.id === "semua") {
      // If "Semua Area" is clicked, clear all selections and load all
      setSelectedAreas([area]);
      await loadAreaData(["semua"]);
    } else if (area.id === "semua_bogor") {
      // If "Semua Bogor" is clicked, load all Bogor areas
      const bogorAreas = availableAreas.filter((a) => a.region === "bogor");
      setSelectedAreas([area]);
      await loadAreaData(bogorAreas.map((a) => a.id));
    } else if (area.id === "semua_depok") {
      // If "Semua Depok" is clicked, load all Depok areas
      const depokAreas = availableAreas.filter((a) => a.region === "depok");
      setSelectedAreas([area]);
      await loadAreaData(depokAreas.map((a) => a.id));
    } else {
      // Toggle individual area selection
      const isSelected = selectedAreas.some(
        (selected) => selected.id === area.id
      );
      let newSelectedAreas;

      if (isSelected) {
        // Remove area from selection
        newSelectedAreas = selectedAreas.filter(
          (selected) => selected.id !== area.id
        );
      } else {
        // Add area to selection (but remove regional selections if present)
        newSelectedAreas = [
          ...selectedAreas.filter(
            (selected) =>
              selected.id !== "semua" &&
              selected.id !== "semua_bogor" &&
              selected.id !== "semua_depok"
          ),
          area,
        ];
      }

      // If no areas selected, default to "semua"
      if (newSelectedAreas.length === 0) {
        newSelectedAreas = [availableAreas.find((a) => a.id === "semua")];
        setSelectedAreas(newSelectedAreas);
        await loadAreaData(["semua"]);
      } else {
        setSelectedAreas(newSelectedAreas);
        await loadAreaData(newSelectedAreas.map((a) => a.id));
      }
    }

    setLoadingAreaId(null);
  };


  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const popupContent = Object.entries(feature.properties)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>");
      layer.bindPopup(popupContent);
    }
  };

  const [showSchedule, setShowSchedule] = useState(false);

  // Component to access map instance and handle click events
  const MapEvents = () => {
    const map = useMap();
    mapRef.current = map;

    useEffect(() => {
      const handleClick = (e) => {
        const { lat, lng } = e.latlng;
        showCoordinateToast(lat, lng);
      };

      map.on('click', handleClick);

      return () => {
        map.off('click', handleClick);
      };
    }, [map]);

    return null;
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 overflow-hidden">
      {/* Schedule Panel Toggle */}
      {/* <div className="absolute top-4 right-4 z-[1002]">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="bg-white hover:bg-gray-50 p-3 rounded-lg shadow-lg border transition-all duration-200 group"
          title={showSchedule ? "Hide Schedule" : "Show Schedule"}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7h8M8 7l-4 9h16l-4-9"
            />
          </svg>
        </button>
      </div> */}

      {/* Schedule Panel */}
      {/* {showSchedule && (
        <div className="absolute top-4 right-20 z-[1001] w-80">
          <SalesmanSchedule />
        </div>
      )} */}
      {/* Toggle Panel Button */}
      {/* <div className="absolute top-4 left-4 z-[1001]">
        <button
          onClick={() => setPanelVisible(!panelVisible)}
          className="bg-white hover:bg-gray-50 p-3 rounded-lg shadow-lg border transition-all duration-200 group"
          title={panelVisible ? "Hide Panel" : "Show Panel"}
        >
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div
              className={`absolute h-0.5 bg-gray-600 transition-all duration-500 ease-out origin-center ${
                panelVisible ? "w-4 rotate-45" : "w-full -translate-y-1.5"
              }`}
            ></div>
            <div
              className={`absolute h-0.5 bg-gray-600 transition-all duration-500 ease-out ${
                panelVisible
                  ? "opacity-0 scale-0 w-4"
                  : "opacity-100 scale-100 w-full"
              }`}
            ></div>
            <div
              className={`absolute h-0.5 bg-gray-600 transition-all duration-500 ease-out origin-center ${
                panelVisible ? "w-4 -rotate-45" : "w-full translate-y-1.5"
              }`}
            ></div>
          </div>
        </button>
      </div> */}

      {/* Modern Control Panel */}
      {panelVisible && (
        <div className="absolute top-4 left-16 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
            onClick={() => setPanelMinimized(!panelMinimized)}
            title={panelMinimized ? "Expand" : "Minimize"}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Maps Jessindo</h3>
                <p className="text-blue-100 text-sm">
                  {availableAreas.length} areas ready
                </p>
              </div>
              <div className="text-white/80 hover:text-white transition-colors">
                <div
                  className={`transition-transform duration-200 ${
                    panelMinimized ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          {!panelMinimized && (
            <div className="max-h-[70vh] overflow-y-auto">
              {/* Area Buttons */}
              <div className="p-4 space-y-3">
                <h4 className="font-semibold text-gray-700 text-sm mb-3">
                  Available Areas
                </h4>

                {/* Global Selection */}
                {availableAreas
                  .filter((area) => area.type === "global")
                  .map((area) => (
                    <div
                      key={area.id}
                      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 mb-3 cursor-pointer ${
                        selectedAreas.some(
                          (selected) => selected.id === area.id
                        )
                          ? "border-gray-600 bg-gray-50 text-gray-900"
                          : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-md"
                      }`}
                      onClick={() => handleAreaToggle(area)}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {loadingAreaId === area.id ? (
                          <div className="animate-spin w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full"></div>
                        ) : (
                          <input
                            type="checkbox"
                            checked={selectedAreas.some(
                              (selected) => selected.id === area.id
                            )}
                            onChange={() => {}}
                            className="w-4 h-4 text-gray-600 rounded"
                          />
                        )}
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: area.color }}
                        ></div>
                        <span className="font-medium text-sm">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">
                        {area.description}
                      </p>
                    </div>
                  ))}

                {/* Regional Selections */}
                {availableAreas
                  .filter((area) => area.type === "regional")
                  .map((area) => (
                    <div
                      key={area.id}
                      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 mb-2 cursor-pointer ${
                        selectedAreas.some(
                          (selected) => selected.id === area.id
                        )
                          ? "border-blue-500 bg-blue-50 text-blue-900"
                          : "border-blue-200 bg-white hover:border-blue-300 hover:shadow-md"
                      }`}
                      onClick={() => handleAreaToggle(area)}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {loadingAreaId === area.id ? (
                          <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                        ) : (
                          <input
                            type="checkbox"
                            checked={selectedAreas.some(
                              (selected) => selected.id === area.id
                            )}
                            onChange={() => {}}
                            className="w-4 h-4 text-blue-600 rounded"
                          />
                        )}
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: area.color }}
                        ></div>
                        <span className="font-medium text-sm">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">
                        {area.description}
                      </p>
                    </div>
                  ))}

                {/* Bogor Areas */}
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-600 text-xs mb-2 pl-2">
                    WILAYAH BOGOR
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {availableAreas
                      .filter((area) => area.region === "bogor")
                      .map((area) => (
                        <div
                          key={area.id}
                          onClick={() => handleAreaToggle(area)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer ${
                            selectedAreas.some(
                              (selected) => selected.id === area.id
                            )
                              ? "border-red-500 bg-red-50 text-red-900"
                              : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            {loadingAreaId === area.id ? (
                              <div className="animate-spin w-3 h-3 border-2 border-red-500 border-t-transparent rounded-full"></div>
                            ) : (
                              <input
                                type="checkbox"
                                checked={selectedAreas.some(
                                  (selected) => selected.id === area.id
                                )}
                                onChange={() => {}}
                                className="w-3 h-3 text-red-600 rounded"
                              />
                            )}
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: area.color }}
                            ></div>
                            <span className="font-medium text-xs">
                              {area.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Depok Areas */}
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-600 text-xs mb-2 pl-2">
                    WILAYAH DEPOK
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {availableAreas
                      .filter((area) => area.region === "depok")
                      .map((area) => (
                        <div
                          key={area.id}
                          onClick={() => handleAreaToggle(area)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer ${
                            selectedAreas.some(
                              (selected) => selected.id === area.id
                            )
                              ? "border-purple-500 bg-purple-50 text-purple-900"
                              : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            {loadingAreaId === area.id ? (
                              <div className="animate-spin w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full"></div>
                            ) : (
                              <input
                                type="checkbox"
                                checked={selectedAreas.some(
                                  (selected) => selected.id === area.id
                                )}
                                onChange={() => {}}
                                className="w-3 h-3 text-purple-600 rounded"
                              />
                            )}
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: area.color }}
                            ></div>
                            <span className="font-medium text-xs">
                              {area.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Sub Area Toggles - Dynamic rendering for all areas */}
                {selectedAreas.map((area) => {
                  // Check if this area has sub locations
                  if (!subAreaLocations[area.id] || subAreaLocations[area.id].length === 0) {
                    return null;
                  }

                  const areaName = area.name;
                  const subLocations = subAreaLocations[area.id];
                  const isSubAreaEnabled = showSubAreasMap[area.id];
                  const isListOpen = showSubAreaListMap[area.id];

                  return (
                    <div key={area.id} className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm font-medium text-blue-900">
                            Tampilkan Sub Area {areaName}
                          </span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isSubAreaEnabled}
                            onChange={() => toggleSubArea(area.id)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-blue-700 mt-2">
                        Menampilkan {subLocations.length} lokasi
                        (jalan, pasar, toko)
                      </p>

                    {/* Status Legend - only show in development mode */}
                    {import.meta.env.VITE_APP_MODE === 'development' && (
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-xs font-semibold text-blue-900 mb-2">Status Koordinat:</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
                            <span className="text-xs text-gray-700">Belum Ada Koordinat</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-cyan-500 flex-shrink-0"></div>
                            <span className="text-xs text-gray-700">Estimasi (Butuh Konfirmasi)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
                            <span className="text-xs text-gray-700">Terverifikasi</span>
                          </div>
                        </div>
                        <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded">
                          <p className="text-xs text-amber-800">
                            ℹ️ Status koordinat hanya tampil di development mode
                          </p>
                        </div>
                      </div>
                    )}

                      {/* Button to toggle list */}
                      <button
                        onClick={() => toggleSubAreaList(area.id)}
                        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${isListOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span>{isListOpen ? 'Sembunyikan' : 'Lihat'} Daftar Lokasi</span>
                      </button>

                      {/* Sub Area List */}
                      {isListOpen && (
                        <div className="mt-3 max-h-64 overflow-y-auto space-y-1">
                          {subLocations.map((location, index) => {
                            const iconColor =
                              location.type === 'street' ? 'bg-blue-500' :
                              location.type === 'market' ? 'bg-green-500' :
                              'bg-orange-500';

                            const iconText =
                              location.type === 'street' ? 'J' :
                              location.type === 'market' ? 'P' :
                              'T';

                            // Get status badge color for list
                            const getStatusBadgeColor = (status) => {
                              const colors = {
                                needs_coordinates: 'bg-red-500',
                                estimated: 'bg-cyan-500',
                                verified: 'bg-green-500'
                              };
                              return colors[status] || '';
                            };

                            // Get resolved coords (from GeoJSON or coords array)
                            let resolvedCoords = subAreaGeoJsonData[location.name];

                            // Fallback to coords array if no GeoJSON
                            if (!resolvedCoords && location.coords) {
                              resolvedCoords = Array.isArray(location.coords?.[0])
                                ? location.coords
                                : location.coords;
                            }

                            return (
                              <div
                                key={index}
                                onClick={() => zoomToSubAreaHelper(mapRef, location, setSelectedSubArea, selectedSubArea, resolvedCoords)}
                                className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-all ${
                                  selectedSubArea?.name === location.name
                                    ? 'bg-blue-100 border border-blue-300'
                                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                                }`}
                              >
                                <div className="relative">
                                  <div className={`${iconColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                    {iconText}
                                  </div>
                                  {import.meta.env.VITE_APP_MODE === 'development' && location.coordinateStatus && (
                                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border border-white ${getStatusBadgeColor(location.coordinateStatus)}`}></div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-gray-900 truncate">
                                    {location.name}
                                  </p>
                                  <p className="text-xs text-gray-500 capitalize">
                                    {location.kecamatan.replace(/_/g, ' ')}
                                  </p>
                                </div>
                                <svg
                                  className="w-4 h-4 text-blue-600 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Selected Areas Info */}
              {selectedAreas.length > 0 && (
                <div className="border-t border-gray-200 bg-gray-50 p-4">
                  <h5 className="font-semibold text-gray-700 text-sm mb-2">
                    Area Terpilih ({selectedAreas.length})
                  </h5>
                  <div className="space-y-2">
                    {selectedAreas.map((area) => (
                      <div key={area.id} className="flex items-center text-xs">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: area.color }}
                        ></div>
                        <span className="font-medium text-gray-700">
                          {area.name}
                        </span>
                        <span className="text-gray-500 ml-2">
                          - {area.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-green-700 mb-1">
                      🗺️ Menampilkan {selectedAreas.length} area:
                    </p>
                    <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
                      {selectedAreas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `${area.color}20`,
                            color: area.color,
                          }}
                        >
                          {area.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Current Areas Legend */}
              {selectedAreas.length > 0 &&
                Object.keys(allGeoJsonData).length > 0 && (
                  <div className="border-t border-gray-200 p-4 bg-blue-50">
                    <h5 className="font-semibold text-gray-700 text-sm mb-2">
                      Kecamatan Ditampilkan (
                      {Object.keys(allGeoJsonData).length})
                    </h5>
                    <div className="grid grid-cols-1 gap-1 text-xs max-h-32 overflow-y-auto">
                      {Object.entries(allGeoJsonData).map(([fileId, data]) => (
                        <div key={fileId} className="flex items-center">
                          <div
                            className="w-2 h-2 rounded-full mr-2"
                            style={{
                              backgroundColor: data?.areaColor || "#6b7280",
                            }}
                          ></div>
                          <span className="text-gray-600">
                            {data?.displayName || fileId.replace(/_/g, " ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      )}

      {/* Map */}
      <MapContainer
        center={DEFAULT_MAP_CENTER}
        zoom={DEFAULT_MAP_ZOOM}
        style={{ height: "100vh", width: "100vw" }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render all GeoJSON layers */}
        {Object.entries(allGeoJsonData).map(([fileId, data]) => {
          return (
            <GeoJSON
              key={fileId}
              data={data}
              style={geoJsonStyleHelper(fileId, allGeoJsonData, selectedAreas)}
              onEachFeature={(feature, layer) => {
                // Add click handler to show coordinates
                layer.on('click', (e) => {
                  const { lat, lng } = e.latlng;
                  showCoordinateToast(lat, lng);
                });

                if (feature.properties) {
                  let displayName =
                    data?.displayName || fileId.replace(/_/g, " ");

                  if (
                    selectedAreas.some((area) => area.id === "semua") ||
                    selectedAreas.some((area) => area.id === "semua_bogor") ||
                    selectedAreas.some((area) => area.id === "semua_depok") ||
                    selectedAreas.length > 1
                  ) {
                    // For "semua" mode, find all areas that have this same kecamatan
                    const currentKecamatan =
                      feature.properties.KECAMATAN ||
                      feature.properties.NAMOBJ ||
                      displayName;
                    const relatedAreas = [];

                    // Search through all loaded data for the same kecamatan
                    Object.entries(allGeoJsonData).forEach(
                      ([otherFileId, otherData]) => {
                        if (otherData.features) {
                          otherData.features.forEach((otherFeature) => {
                            const otherKecamatan =
                              otherFeature.properties?.KECAMATAN ||
                              otherFeature.properties?.NAMOBJ ||
                              otherData.displayName;
                            if (
                              otherKecamatan === currentKecamatan &&
                              otherData.areaId
                            ) {
                              const areaInfo = availableAreas.find(
                                (a) => a.id === otherData.areaId
                              );
                              if (
                                areaInfo &&
                                !relatedAreas.find(
                                  (area) => area.id === areaInfo.id
                                )
                              ) {
                                relatedAreas.push(areaInfo);
                              }
                            }
                          });
                        }
                      }
                    );

                    const popupContent = `
                      <div>
                        <h4 style="margin: 0 0 8px 0; color: #2563eb; font-weight: bold;">${displayName}</h4>
                        ${
                          data?.subArea
                            ? `<p style="margin: 0 0 8px 0; color: #059669; font-weight: 500;">Sub Area: ${
                                Array.isArray(data.subArea)
                                  ? data.subArea.join(", ")
                                  : data.subArea
                              }</p>`
                            : ""
                        }
                        <div style="margin: 0 0 8px 0;">
                          ${relatedAreas
                            .map(
                              (area) =>
                                `<span style="display: inline-block; background: ${area.color}20; color: ${area.color}; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin: 1px;">${area.name}</span>`
                            )
                            .join(" ")}
                        </div>
                        ${Object.entries(feature.properties)
                          .map(
                            ([key, value]) =>
                              `<div><strong>${key}:</strong> ${value}</div>`
                          )
                          .join("")}
                      </div>
                    `;
                    layer.bindPopup(popupContent);
                  } else {
                    // For single area mode, show area info
                    let areaColor = data?.areaColor || "#2563eb";
                    let areaName = selectedAreas[0]?.name || "";

                    const popupContent = `
                      <div>
                        <h4 style="margin: 0 0 8px 0; color: ${areaColor}; font-weight: bold;">${displayName}</h4>
                        ${
                          data?.subArea
                            ? `<p style="margin: 0 0 8px 0; color: #059669; font-weight: 500;">Sub Area: ${
                                Array.isArray(data.subArea)
                                  ? data.subArea.join(", ")
                                  : data.subArea
                              }</p>`
                            : ""
                        }
                        ${
                          areaName
                            ? `<p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">${areaName}</p>`
                            : ""
                        }
                        ${Object.entries(feature.properties)
                          .map(
                            ([key, value]) =>
                              `<div><strong>${key}:</strong> ${value}</div>`
                          )
                          .join("")}
                      </div>
                    `;
                    layer.bindPopup(popupContent);
                  }
                }
              }}
            />
          );
        })}

        {/* Render Sub Areas - dynamic for all areas */}
        {selectedAreas.flatMap((area) => {
          // Check if sub areas should be shown for this area
          if (!showSubAreasMap[area.id] || !subAreaLocations[area.id]) {
            return [];
          }

          return subAreaLocations[area.id].map((location, index) => {
            // Skip locations without coordinates AND without geojsonPath
            const hasCoords = location.coords && !(Array.isArray(location.coords) && location.coords.length === 0);
            const hasGeoJson = location.geojsonPath && subAreaGeoJsonData[location.name];

            if (!hasCoords && !hasGeoJson) {
              return null;
            }

            const isSelected = selectedSubArea?.name === location.name;
            const isDev = import.meta.env.VITE_APP_MODE === 'development';
            const uniqueKey = `${area.id}-${location.name}-${index}`;

            // Get status color for polyline
            const getStatusColor = (status) => {
              if (!isDev || !status) return isSelected ? "#fbbf24" : "#ef4444";
              const colors = {
                needs_coordinates: '#ef4444',
                estimated: '#06b6d4',
                verified: '#22c55e'
              };
              return isSelected ? "#fbbf24" : (colors[status] || "#ef4444");
            };

            // Get status label
            const getStatusLabel = (status) => {
              const labels = {
                needs_coordinates: 'Belum Ada Koordinat',
                estimated: 'Estimasi (Butuh Konfirmasi)',
                verified: 'Terverifikasi'
              };
              return labels[status] || '-';
            };

            // Helper function to generate Google Maps URL
            const getGoogleMapsUrl = (lat, lng, name) => {
              // Use search query with coordinates for better accuracy
              return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            };

            // If it's a street (has multiple coords), render as Polyline
            if (location.type === "street") {
              // Use GeoJSON data if available, otherwise fall back to coords array
              let coordsData = subAreaGeoJsonData[location.name];

              // Fallback to coords array if no GeoJSON
              if (!coordsData && location.coords) {
                // Wrap in array if not already (for consistency with MultiLineString)
                coordsData = Array.isArray(location.coords?.[0]?.[0])
                  ? location.coords  // Already array of lines
                  : [location.coords]; // Single line, wrap it
              }

              if (!coordsData) return null;

              // Render multiple Polylines (one for each line/cabang)
              return coordsData.map((lineCoords, lineIndex) => {
                // Get center point for Google Maps from THIS specific line
                const lineCenter = lineCoords[0] || lineCoords;
                const lineGoogleMapsUrl = lineCenter ? getGoogleMapsUrl(lineCenter[0], lineCenter[1], location.name) : null;

                // Popup content for THIS specific line
                const popupContent = (
                  <div className="text-sm">
                    <h4 className="font-bold text-blue-600 mb-1">
                      {location.name}
                    </h4>
                    <p className="text-gray-600">
                      Tipe: <span className="font-medium">Jalan</span>
                    </p>
                    <p className="text-gray-600">
                      Kecamatan:{" "}
                      <span className="font-medium capitalize">
                        {location.kecamatan.replace(/_/g, " ")}
                      </span>
                    </p>
                    {isDev && location.coordinateStatus && (
                      <p className="text-gray-600 mt-1">
                        Status Koordinat:{" "}
                        <span className="font-medium" style={{
                          color: getStatusColor(location.coordinateStatus)
                        }}>
                          {getStatusLabel(location.coordinateStatus)}
                        </span>
                      </p>
                    )}
                    {lineGoogleMapsUrl && (
                      <a
                        href={lineGoogleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ color: 'white', textDecoration: 'none' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="tracking-wide">Lihat di Google Maps</span>
                        <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                );

                return (
                  <Polyline
                    key={`${uniqueKey}-line-${lineIndex}-${isSelected ? 'selected' : 'normal'}`}
                    positions={lineCoords}
                    color={getStatusColor(location.coordinateStatus)}
                    weight={isSelected ? 8 : 6}
                    opacity={1}
                    dashArray={isSelected ? null : "10, 5"}
                    lineCap="round"
                    lineJoin="round"
                  >
                    <Popup>{popupContent}</Popup>
                  </Polyline>
                );
              });
            } else {
              // For markets and stores, render as Marker
              const position = Array.isArray(location.coords[0])
                ? location.coords[0]
                : location.coords;

              // Generate Google Maps URL for marker
              const markerGoogleMapsUrl = getGoogleMapsUrl(position[0], position[1], location.name);

              return (
                <Marker
                  key={`${uniqueKey}-${isSelected ? 'selected' : 'normal'}`}
                  position={position}
                  icon={createIcon(location.type, isSelected, location.coordinateStatus)}
                >
                  <Popup>
                    <div className="text-sm">
                      <h4 className="font-bold mb-1"
                        style={{
                          color: location.type === 'market' ? '#10b981' : '#f59e0b'
                        }}
                      >
                        {location.name}
                      </h4>
                      <p className="text-gray-600">
                        Tipe:{" "}
                        <span className="font-medium capitalize">
                          {location.type === "market" ? "Pasar" : "Toko/Ruko"}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Kecamatan:{" "}
                        <span className="font-medium capitalize">
                          {location.kecamatan.replace(/_/g, " ")}
                        </span>
                      </p>
                      {isDev && location.coordinateStatus && (
                        <p className="text-gray-600 mt-1">
                          Status Koordinat:{" "}
                          <span className="font-medium" style={{
                            color: getStatusColor(location.coordinateStatus)
                          }}>
                            {getStatusLabel(location.coordinateStatus)}
                          </span>
                        </p>
                      )}
                      <a
                        href={markerGoogleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ color: 'white', textDecoration: 'none' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="tracking-wide">Lihat di Google Maps</span>
                        <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            }
          }).filter(Boolean); // end of location.map, filter out nulls
        }).filter(Boolean)} {/* end of flatMap, filter out empty arrays */}

        {/* Map Events Component to get map reference */}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default Map;
