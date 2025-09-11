import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [allGeoJsonData, setAllGeoJsonData] = useState({});
  const [visibleLayers, setVisibleLayers] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedAreaInfo, setSelectedAreaInfo] = useState(null);
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
      id: "dalam_kota",
      name: "Dalam Kota",
      color: "#0891b2",
      description: "6 kecamatan Kota Bogor",
    },
    {
      id: "cariu",
      name: "Area Cariu",
      color: "#dc2626",
      description: "Timur Laut - 4 kecamatan",
    },
    {
      id: "cigombong",
      name: "Area Cigombong",
      color: "#059669",
      description: "Barat Daya - 6 kecamatan",
    },
    {
      id: "cisarua",
      name: "Area Cisarua",
      color: "#d97706",
      description: "Selatan - 6 kecamatan",
    },
    {
      id: "citeurep",
      name: "Area Citeurep",
      color: "#7c3aed",
      description: "Utara - 5 kecamatan",
    },
    {
      id: "depok",
      name: "Depok",
      color: "#be185d",
      description: "Kota Depok",
    },
    {
      id: "jasinga",
      name: "Area Jasinga",
      color: "#65a30d",
      description: "Barat - 6 kecamatan",
    },
    {
      id: "parung",
      name: "Area Parung",
      color: "#c2410c",
      description: "Tengah Selatan - 8 kecamatan",
    },
  ];

  // All area files mapping - now using single /data/geojson/ folder
  const areaFiles = {
    dalam_kota: [
      { file: "bogor_barat.geojson", name: "Bogor Barat" },
      { file: "bogor_selatan.geojson", name: "Bogor Selatan" },
      { file: "bogor_tengah.geojson", name: "Bogor Tengah" },
      { file: "bogor_timur.geojson", name: "Bogor Timur" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "tanah_sereal.geojson", name: "Tanah Sereal" },
    ],
    cariu: [
      { file: "cariu.geojson", name: "Cariu" },
      { file: "jonggol.geojson", name: "Jonggol" },
      { file: "cileungsi.geojson", name: "Cileungsi" },
      { file: "klapanunggal.geojson", name: "Klapanunggal" },
      { file: "sukamakmur.geojson", name: "Sukamakmur" },
      { file: "tanjungsari.geojson", name: "Tanjungsari" },
    ],
    cigombong: [
      { file: "cigombong.geojson", name: "Cigombong" },
      { file: "pamijahan.geojson", name: "Pamijahan" },
      { file: "tenjolaya.geojson", name: "Tenjolaya" },
      { file: "caringin.geojson", name: "Caringin" },
      { file: "cijeruk.geojson", name: "Cijeruk" },
      { file: "tamansari.geojson", name: "Tamansari" },
    ],
    cisarua: [
      { file: "cisarua.geojson", name: "Cisarua" },
      { file: "ciawi.geojson", name: "Ciawi" },
      { file: "megamendung.geojson", name: "Megamendung" },
    ],
    citeurep: [
      { file: "citeureup.geojson", name: "Citeureup" },
      { file: "cibinong.geojson", name: "Cibinong" },
      { file: "gunung_putri.geojson", name: "Gunung Putri" },
      { file: "bojong_gede.geojson", name: "Bojong Gede" },
      { file: "babakan_madang.geojson", name: "Babakan Madang" },
      { file: "sukaraja.geojson", name: "Sukaraja" },
    ],
    jasinga: [
      { file: "Jasinga.geojson", name: "Jasinga" },
      { file: "ranca_bungur.geojson", name: "Ranca Bungur" },
      { file: "cigudeg.geojson", name: "Cigudeg" },
      { file: "leuwisadeng.geojson", name: "Leuwisadeng" },
      { file: "ciampea.geojson", name: "Ciampea" },
      { file: "cibangbulang.geojson", name: "Cibangbulang" },
      { file: "ciomas.geojson", name: "Ciomas" },
      { file: "dramaga.geojson", name: "Dramaga" },
      { file: "sukajaya.geojson", name: "Sukajaya" },
      { file: "leuwiliang.geojson", name: "Leuwiliang" },
      { file: "nanggung.geojson", name: "Nanggung" },
    ],
    parung: [
      { file: "parung.geojson", name: "Parung" },
      { file: "parung panjang.geojson", name: "Parung Panjang" },
      { file: "ciseeng.geojson", name: "Ciseeng" },
      { file: "kengang.geojson", name: "Kemang" },
      { file: "tajurhalang.geojson", name: "Tajurhalang" },
      { file: "gunung_sindur.geojson", name: "Gunung Sindur" },
      { file: "rumpin.geojson", name: "Rumpin" },
      { file: "tenjo.geojson", name: "Tenjo" },
    ],
  };

  // Function to load all areas on initial load
  const loadAllAreasInitial = async () => {
    await loadAreaData("semua");
    setSelectedAreaInfo(availableAreas.find((a) => a.id === "semua"));
  };

  // Load all areas on component mount
  useEffect(() => {
    loadAllAreasInitial();
  }, []);

  // Function to load specific area data
  const loadAreaData = async (areaId) => {
    setLoading(true);
    const dataMap = {};
    const initialVisibleLayers = {};
    let successCount = 0;
    let totalFiles = 0;

    try {
      if (areaId === "semua") {
        // Load all areas
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
      } else if (areaFiles[areaId]) {
        // Load specific area
        const fileList = areaFiles[areaId];
        const areaInfo = availableAreas.find((a) => a.id === areaId);
        const areaColor = areaInfo?.color || "#6b7280";
        totalFiles = fileList.length;

        for (const fileObj of fileList) {
          try {
            const response = await fetch(`/data/geojson/${fileObj.file}`);
            if (response.ok) {
              const data = await response.json();
              const fileId = fileObj.file.replace(".geojson", "");
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

      console.log(`Loaded ${successCount}/${totalFiles} files for ${areaId}`);

      if (successCount === 0) {
        console.warn(`No files loaded for area: ${areaId}`);
      }
    } catch (error) {
      console.error(`Critical error loading area ${areaId}:`, error);
    } finally {
      setAllGeoJsonData(dataMap);
      setVisibleLayers(initialVisibleLayers);
      setLoading(false);
    }
  };

  const handleAreaClick = async (area) => {
    setSelectedAreaInfo(area);
    loadAreaData(area.id);
  };

  const geoJsonStyle = (fileId) => (feature) => {
    const data = allGeoJsonData[fileId];
    let color = "#2563eb"; // default color

    if (selectedAreaInfo?.id === "dalam_kota") {
      // Use specific dalam_kota color
      color = "#0891b2";
    } else if (selectedAreaInfo?.id === "semua") {
      // Use area-specific color for "show all" mode
      color = data?.areaColor || "#6b7280";
    } else if (selectedAreaInfo) {
      // Use selected area color
      color = selectedAreaInfo.color;
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
    <div className="h-screen w-full relative">
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
              {/* Loading indicator */}
              {loading && (
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full mr-3"></div>
                    <span className="text-sm">Loading area data...</span>
                  </div>
                </div>
              )}

              {/* Area Buttons */}
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-gray-700 text-sm mb-3">
                  Available Areas
                </h4>

                {/* Show All Areas - Special button */}
                <button
                  onClick={() => handleAreaClick(availableAreas[0])}
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left mb-3 ${
                    selectedAreaInfo?.id === "semua"
                      ? "border-gray-600 bg-gray-50 text-gray-900"
                      : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: availableAreas[0].color }}
                    ></div>
                    <span className="font-medium text-sm">
                      {availableAreas[0].name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {availableAreas[0].description}
                  </p>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  {availableAreas.slice(1).map((area) => (
                    <button
                      key={area.id}
                      onClick={() => handleAreaClick(area)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedAreaInfo?.id === area.id
                          ? "border-blue-500 bg-blue-50 text-blue-900"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: area.color }}
                        ></div>
                        <span className="font-medium text-sm">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {area.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Area Info */}
              {selectedAreaInfo && (
                <div className="border-t border-gray-200 bg-gray-50 p-4">
                  <h5 className="font-semibold text-gray-700 text-sm mb-2 flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: selectedAreaInfo.color }}
                    ></div>
                    {selectedAreaInfo.name}
                  </h5>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>
                      <span className="font-medium">Status:</span>{" "}
                      {selectedAreaInfo.description}
                    </div>
                    <div className="mt-2 text-xs text-green-700">
                      🗺️ Menampilkan data untuk {selectedAreaInfo.name}
                    </div>
                  </div>
                </div>
              )}

              {/* Current Areas Legend */}
              {selectedAreaInfo && Object.keys(allGeoJsonData).length > 0 && (
                <div
                  className="border-t border-gray-200 p-4"
                  style={{ backgroundColor: `${selectedAreaInfo.color}10` }}
                >
                  <h5 className="font-semibold text-gray-700 text-sm mb-2">
                    Sedang Ditampilkan ({selectedAreaInfo.name})
                  </h5>
                  <div className="grid grid-cols-1 gap-1 text-xs max-h-32 overflow-y-auto">
                    {Object.entries(allGeoJsonData).map(([fileId, data]) => (
                      <div key={fileId} className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{
                            backgroundColor:
                              data?.areaColor || selectedAreaInfo.color,
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
        style={{ height: "100%", width: "100%" }}
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
                let areaColor = data?.areaColor || "#2563eb";
                let displayName =
                  data?.displayName || fileId.replace(/_/g, " ");
                let areaName = "";

                if (selectedAreaInfo?.id === "semua") {
                  const areaInfo = availableAreas.find(
                    (a) => a.id === data?.areaId
                  );
                  areaName = areaInfo?.name || "";
                } else if (
                  selectedAreaInfo &&
                  selectedAreaInfo.id !== "dalam_kota"
                ) {
                  areaName = selectedAreaInfo.name;
                }

                if (feature.properties) {
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
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
