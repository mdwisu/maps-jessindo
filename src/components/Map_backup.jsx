import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [allGeoJsonData, setAllGeoJsonData] = useState({});
  const [visibleLayers, setVisibleLayers] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingAreaId, setLoadingAreaId] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [panelVisible, setPanelVisible] = useState(true);
  const [panelMinimized, setPanelMinimized] = useState(false);

  // Area folders based on public/data directory structure
  const availableAreas = [
    {
      id: "semua",
      name: "Semua Area",
      color: "#1f2937",
      description: "Tampilkan seluruh area",
    },
    {
      id: "b1",
      name: "Area B1",
      color: "#0891b2",
      description: "Area B1 - 3 kecamatan",
    },
    {
      id: "b2",
      name: "Area B2",
      color: "#dc2626",
      description: "Area B2 - 6 kecamatan",
    },
    {
      id: "b3",
      name: "Area B3",
      color: "#059669",
      description: "Area B3 - 5 kecamatan",
    },
    {
      id: "b4",
      name: "Area B4",
      color: "#d97706",
      description: "Area B4 - 8 kecamatan",
    },
    {
      id: "b5",
      name: "Area B5",
      color: "#7c3aed",
      description: "Area B5 - 7 kecamatan",
    },
    {
      id: "w",
      name: "Area W",
      color: "#65a30d",
      description: "Area W - 8 kecamatan",
    },
    {
      id: "bgr1",
      name: "BGR 1",
      color: "#be185d",
      description: "Rute BGR 1",
    },
    {
      id: "bgr2",
      name: "BGR 2",
      color: "#c2410c",
      description: "Rute BGR 2",
    },
  ];

  // All area files mapping - now using single /data/geojson/ folder
  const areaFiles = {
    b1: [
      { file: "bogor_tengah.geojson", name: "Bogor Tengah" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "tanah_sereal.geojson", name: "Tanah Sereal" },
    ],
    b2: [
      { file: "leuwiliang.geojson", name: "Leuwiliang" },
      { file: "cigudeg.geojson", name: "Cigudeg" },
      { file: "nanggung.geojson", name: "Nanggung" },
      { file: "cibangbulang.geojson", name: "Cibangbulang" },
      { file: "jasinga.geojson", name: "Jasinga" },
      { file: "pamijahan.geojson", name: "Pamijahan" },

      // { file: "cariu.geojson", name: "Cariu" },
      // { file: "jonggol.geojson", name: "Jonggol" },
      // { file: "cileungsi.geojson", name: "Cileungsi" },
      // { file: "klapanunggal.geojson", name: "Klapanunggal" },
      // { file: "sukamakmur.geojson", name: "Sukamakmur" },
      // { file: "tanjungsari.geojson", name: "Tanjungsari" },
    ],
    b3: [
      { file: "bojong_gede.geojson", name: "Bojong Gede" },
      { file: "cisarua.geojson", name: "Cisarua" },
      { file: "ciampea.geojson", name: "Ciampea" },
      { file: "tenjolaya.geojson", name: "Tenjolaya" },
      { file: "cipayung(depok).geojson", name: "Cipayung" },
    ],
    b4: [
      { file: "cigombong.geojson", name: "Cigombong" },
      { file: "cijeruk.geojson", name: "Cijeruk" },
      { file: "caringin.geojson", name: "Caringin" },
      { file: "ciawi.geojson", name: "Ciawi" },
      { file: "bogor_selatan.geojson", name: "Bogor Selatan" },
      { file: "bogor_timur.geojson", name: "Bogor Timur" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "sukaraja.geojson", name: "Sukaraja" },
    ],
    b5: [
      { file: "caringin.geojson", name: "Caringin" },
      { file: "megamendung.geojson", name: "Megamendung" },
      { file: "pamijahan.geojson", name: "Pamijahan" },
      { file: "ciampea.geojson", name: "Ciampea" },
      { file: "tamansari.geojson", name: "Tamansari" },
      { file: "babakan_madang.geojson", name: "Babakan Madang" },
      { file: "dramaga.geojson", name: "Dramaga" },

      // { file: "citeureup.geojson", name: "Citeureup" },
      // { file: "cibinong.geojson", name: "Cibinong" },
      // { file: "gunung_putri.geojson", name: "Gunung Putri" },
    ],
    w: [
      { file: "leuwiliang.geojson", name: "Leuwiliang" },
      { file: "kengang.geojson", name: "Kemang" },
      { file: "bogor_timur.geojson", name: "Bogor Timur" },
      { file: "bogor_selatan.geojson", name: "Bogor Selatan" },
      { file: "bogor_barat.geojson", name: "Bogor Barat" },
      { file: "bogor_tengah.geojson", name: "Bogor Tengah" },
      { file: "ciomas.geojson", name: "Ciomas" },
      { file: "tanah_sereal.geojson", name: "Tanah Sereal" },

      // { file: "leuwisadeng.geojson", name: "Leuwisadeng" },
      // { file: "sukajaya.geojson", name: "Sukajaya" },
    ],
    bgr1: [
      { file: "ciseeng.geojson", name: "Ciseeng" },
      { file: "kengang.geojson", name: "Kemang" },
      { file: "leuwiliang.geojson", name: "Leuwiliang" },
      { file: "ciomas.geojson", name: "Ciomas" },
      { file: "ranca_bungur.geojson", name: "Ranca Bungur" },
      { file: "tamansari.geojson", name: "Tamansari" },
    ],
    bgr2: [
      { file: "caringin.geojson", name: "Caringin" },
      { file: "megamendung.geojson", name: "Megamendung" },
      { file: "cisarua.geojson", name: "Cisarua" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "sukaraja.geojson", name: "Sukaraja" },
    ],
    // parung: [
    //   { file: "parung.geojson", name: "Parung" },
    //   { file: "parung panjang.geojson", name: "Parung Panjang" },
    //   { file: "tajurhalang.geojson", name: "Tajurhalang" },
    //   { file: "gunung_sindur.geojson", name: "Gunung Sindur" },
    //   { file: "rumpin.geojson", name: "Rumpin" },
    //   { file: "tenjo.geojson", name: "Tenjo" },
    // ],
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
        // Add area to selection (but remove "semua" if present)
        newSelectedAreas = [
          ...selectedAreas.filter((selected) => selected.id !== "semua"),
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

  const geoJsonStyle = (fileId) => (feature) => {
    const data = allGeoJsonData[fileId];
    let color = "#2563eb"; // default color

    // If "semua" is selected or multiple areas, use area-specific colors
    if (
      selectedAreas.some((area) => area.id === "semua") ||
      selectedAreas.length > 1
    ) {
      color = data?.areaColor || "#6b7280";
    } else if (selectedAreas.length === 1) {
      // Use selected area color for single area selection
      color = selectedAreas[0].color;
    }

    return {
      color: color,
      weight: 2,
      opacity: 0.8,
      fillOpacity: 0.3,
      fillColor: color,
      dashArray: null,
    };
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const popupContent = Object.entries(feature.properties)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>");
      layer.bindPopup(popupContent);
    }
  };

  // Default center to Bogor area
  const center = [-6.5944, 106.7892];

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Toggle Panel Button */}
      <div className="absolute top-4 left-4 z-[1001]">
        <button
          onClick={() => setPanelVisible(!panelVisible)}
          className="bg-white hover:bg-gray-50 p-3 rounded-lg shadow-lg border transition-all duration-200 group"
          title={panelVisible ? "Hide Panel" : "Show Panel"}
        >
          <div className="w-5 h-5 flex flex-col justify-center space-y-1">
            <div
              className={`h-0.5 bg-gray-600 transition-all duration-200 ${
                panelVisible ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 bg-gray-600 transition-all duration-200 ${
                panelVisible ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 bg-gray-600 transition-all duration-200 ${
                panelVisible ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Modern Control Panel */}
      {panelVisible && (
        <div className="absolute top-4 left-16 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Maps Jessindo</h3>
                <p className="text-blue-100 text-sm">
                  {availableAreas.length} areas ready
                </p>
              </div>
              <button
                onClick={() => setPanelMinimized(!panelMinimized)}
                className="text-white/80 hover:text-white transition-colors"
                title={panelMinimized ? "Expand" : "Minimize"}
              >
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
              </button>
            </div>
          </div>

          {/* Content */}
          {!panelMinimized && (
            <div className="max-h-[70vh] overflow-y-auto">
              {/* Area Buttons */}
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-gray-700 text-sm mb-3">
                  Available Areas
                </h4>

                {/* Show All Areas - Special checkbox */}
                <div
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-200 mb-3 cursor-pointer ${
                    selectedAreas.some((area) => area.id === "semua")
                      ? "border-gray-600 bg-gray-50 text-gray-900"
                      : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-md"
                  }`}
                  onClick={() => handleAreaToggle(availableAreas[0])}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {loadingAreaId === "semua" ? (
                      <div className="animate-spin w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full"></div>
                    ) : (
                      <input
                        type="checkbox"
                        checked={selectedAreas.some(
                          (area) => area.id === "semua"
                        )}
                        onChange={() => {}}
                        className="w-4 h-4 text-gray-600 rounded"
                      />
                    )}
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: availableAreas[0].color }}
                    ></div>
                    <span className="font-medium text-sm">
                      {availableAreas[0].name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 ml-6">
                    {availableAreas[0].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {availableAreas.slice(1).map((area) => (
                    <div
                      key={area.id}
                      onClick={() => handleAreaToggle(area)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer ${
                        selectedAreas.some(
                          (selected) => selected.id === area.id
                        )
                          ? "border-blue-500 bg-blue-50 text-blue-900"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                      }`}
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
                </div>
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
                  <div className="mt-2 text-xs text-green-700">
                    🗺️ Menampilkan {selectedAreas.map((a) => a.name).join(", ")}
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
        center={center}
        zoom={11}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render all GeoJSON layers */}
        {Object.entries(allGeoJsonData).map(([fileId, data]) => {
          return (
            <GeoJSON
              key={fileId}
              data={data}
              style={geoJsonStyle(fileId)}
              onEachFeature={(feature, layer) => {
                if (feature.properties) {
                  let displayName =
                    data?.displayName || fileId.replace(/_/g, " ");

                  if (
                    selectedAreas.some((area) => area.id === "semua") ||
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
      </MapContainer>
    </div>
  );
};

export default Map;
