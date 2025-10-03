import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Polyline, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import SalesmanSchedule from "./SalesmanSchedule.jsx";
import { subAreaLocations } from "../data/subAreaLocations.js";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [allGeoJsonData, setAllGeoJsonData] = useState({});
  const [visibleLayers, setVisibleLayers] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingAreaId, setLoadingAreaId] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [panelVisible, setPanelVisible] = useState(true);
  const [panelMinimized, setPanelMinimized] = useState(false);
  const [showSubAreas, setShowSubAreas] = useState(true);
  const [selectedSubArea, setSelectedSubArea] = useState(null);
  const [showSubAreaList, setShowSubAreaList] = useState(false);
  const mapRef = useRef(null);

  // Area folders based on public/data directory structure
  const availableAreas = [
    {
      id: "semua",
      name: "Semua Area",
      color: "#1f2937",
      description: "Tampilkan seluruh area",
      type: "global",
    },
    {
      id: "semua_bogor",
      name: "Semua Bogor",
      color: "#2563eb",
      description: "Tampilkan seluruh area Bogor",
      type: "regional",
    },
    {
      id: "dalam_kota",
      name: "Dalam Kota (B1)",
      color: "#1e3a8a",
      description: "Area Dalam Kota",
      type: "area",
      region: "bogor",
    },
    {
      id: "jasinga",
      name: "Jasinga (B2)",
      color: "#2563eb",
      description: "Area Jasinga",
      type: "area",
      region: "bogor",
    },
    {
      id: "cisarua",
      name: "Cisarua (B3)",
      color: "#0ea5e9",
      description: "Area Cisarua",
      type: "area",
      region: "bogor",
    },
    {
      id: "cigombong",
      name: "Cigombong (B4)",
      color: "#38bdf8",
      description: "Area Cigombong",
      type: "area",
      region: "bogor",
    },
    {
      id: "semua_depok",
      name: "Semua Depok",
      color: "#7c3aed",
      description: "Tampilkan seluruh area Depok",
      type: "regional",
    },
    {
      id: "ciseeng",
      name: "Ciseeng (D1)",
      color: "#581c87",
      description: "Area Ciseeng",
      type: "area",
      region: "depok",
    },
    {
      id: "palsi",
      name: "Palsi (D2)",
      color: "#7c3aed",
      description: "Area Palsi",
      type: "area",
      region: "depok",
    },
    {
      id: "citereup",
      name: "Citereup (D3)",
      color: "#a855f7",
      description: "Area Citereup",
      type: "area",
      region: "depok",
    },
    {
      id: "klapanunggal",
      name: "Klapanunggal (D4)",
      color: "#c084fc",
      description: "Area Klapanunggal",
      type: "area",
      region: "depok",
    },
  ];

  // All area files mapping - 4 regional divisions
  const areaFiles = {
    dalam_kota: [
      { file: "bogor_tengah.geojson", name: "Bogor Tengah" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "tanah_sereal.geojson", name: "Tanah Sereal" },
      // { file: "bogor_tengah.geojson", name: "Bogor Tengah", subArea: ["Jalan Roda", "Jalan Otista", "Jalan Padasuka", "Ruko Merdeka", "Jalan Dewi Sartika"] },
      // { file: "bogor_utara.geojson", name: "Bogor Utara", subArea: "Jalan Klenteng" },
      // { file: "tanah_sereal.geojson", name: "Tanah Sereal", subArea: "Pasar Bogor Bawah" },
    ],
    jasinga: [
      { file: "leuwiliang.geojson", name: "Leuwiliang" },
      { file: "cigudeg.geojson", name: "Cigudeg" },
      { file: "nanggung.geojson", name: "Nanggung" },
      { file: "cibangbulang.geojson", name: "Cibangbulang" },
      { file: "jasinga.geojson", name: "Jasinga" },
      { file: "pamijahan.geojson", name: "Pamijahan" },
    ],
    cisarua: [
      { file: "bojong_gede.geojson", name: "Bojong Gede" },
      { file: "cisarua.geojson", name: "Cisarua" },
      { file: "ciampea.geojson", name: "Ciampea" },
      { file: "tanah_sereal.geojson", name: "Tanah Sereal" },
      // {file: "tanah_sereal.geojson",name: "Tanah Sereal", subArea: "Pasar Bogor Bawah"},
      { file: "tenjolaya.geojson", name: "Tenjolaya" },
      { file: "bogor_barat.geojson", name: "Bogor Barat" },
      { file: "dramaga.geojson", name: "Dramaga" },
      { file: "ranca_bungur.geojson", name: "Rancabungur" },
      { file: "cipayung(depok).geojson", name: "Cipayung (Depok)" },
    ],
    cigombong: [
      { file: "cigombong.geojson", name: "Cigombong" },
      { file: "cijeruk.geojson", name: "Cijeruk" },
      { file: "caringin.geojson", name: "Caringin" },
      { file: "ciawi.geojson", name: "Ciawi" },
      { file: "bogor_selatan.geojson", name: "Bogor Selatan" },
      { file: "bogor_timur.geojson", name: "Bogor Timur" },
      { file: "bogor_utara.geojson", name: "Bogor Utara" },
      { file: "sukaraja.geojson", name: "Sukaraja" },
    ],
    ciseeng: [
      { file: "ciseeng.geojson", name: "Ciseeng" },
      { file: "limo.geojson", name: "Limo" },
      { file: "pancoran_mas.geojson", name: "Pancoran Mas" },
      { file: "parung.geojson", name: "Parung" },
      { file: "beji.geojson", name: "Beji" },
      { file: "tajurhalang.geojson", name: "Tajur Halang" },
      // snack
      { file: "sawangan.geojson", name: "Sawangan" },
    ],
    palsi: [
      { file: "cimanggis.geojson", name: "Cimanggis" },
      { file: "tapos.geojson", name: "Tapos" },
      { file: "sukmajaya.geojson", name: "Sukma Jaya" },
      { file: "cilodong.geojson", name: "Cilodong" },
    ],
    citereup: [
      { file: "citeureup.geojson", name: "Citereup" },
      { file: "cibinong.geojson", name: "Cibinong" },
      { file: "babakan_madang.geojson", name: "Babakan Madang" },
    ],
    klapanunggal: [
      { file: "klapanunggal.geojson", name: "Klapanunggal" },
      { file: "jonggol.geojson", name: "Jonggol" },
      { file: "cariu.geojson", name: "Cariu" },
      { file: "cileungsi.geojson", name: "Cileungsi" },
      { file: "gunung_putri.geojson", name: "Gunung Putri" },
    ],
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

  const geoJsonStyle = (fileId) => (feature) => {
    const data = allGeoJsonData[fileId];
    let color = "#2563eb"; // default color

    // Use area-specific colors - always use individual area colors for better distinction
    if (selectedAreas.some((area) => area.id === "semua")) {
      // When "Semua Area" is selected, use individual area colors but keep regional harmony
      color = data?.areaColor || "#6b7280";
    } else if (selectedAreas.some((area) => area.id === "semua_bogor")) {
      // When "Semua Bogor" is selected, use individual Bogor area colors
      color = data?.areaColor || "#2563eb";
    } else if (selectedAreas.some((area) => area.id === "semua_depok")) {
      // When "Semua Depok" is selected, use individual Depok area colors
      color = data?.areaColor || "#7c3aed";
    } else if (selectedAreas.length > 1) {
      // When multiple individual areas are selected, use their original colors
      color = data?.areaColor || "#6b7280";
    } else if (selectedAreas.length === 1) {
      // Use selected area color for single area selection
      color = selectedAreas[0].color;
    }

    return {
      color: "transparent", // No border
      weight: 0, // No border thickness
      opacity: 0, // No border opacity
      fillOpacity: 0.8, // Higher fill opacity for better distinction
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
  const [showSchedule, setShowSchedule] = useState(false);

  // Custom icons for sub areas
  const createIcon = (type) => {
    const iconConfig = {
      street: {
        html: `<div style="background: #3b82f6; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      },
      market: {
        html: `<div style="background: #10b981; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      },
      store: {
        html: `<div style="background: #f59e0b; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
          </svg>
        </div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      }
    };

    const config = iconConfig[type] || iconConfig.street;
    return L.divIcon({
      html: config.html,
      iconSize: config.iconSize,
      iconAnchor: config.iconAnchor,
      className: ''
    });
  };

  // Function to show coordinate toast with copy button
  const showCoordinateToast = (lat, lng) => {
    const coordString = `[-${Math.abs(lat).toFixed(6)}, ${lng.toFixed(6)}]`;
    console.log('📍 Koordinat diklik:', coordString);
    console.log('📋 Copy untuk subAreaLocations.js:', `coords: ${coordString}`);

    // Remove all existing toasts (remove by class to catch any old versions)
    document.querySelectorAll('[id^="coord-toast"]').forEach(el => {
      const parent = el.parentElement;
      if (parent && document.body.contains(parent)) {
        document.body.removeChild(parent);
      }
    });

    // Show toast notification with copy button
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div id="coord-toast" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 10001; background: #1f2937; color: white; padding: 16px 20px; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.4); font-size: 13px; min-width: 350px; animation: slideUp 0.3s ease-out;">
        <div style="font-weight: bold; margin-bottom: 10px; font-size: 14px;">📍 Koordinat Diklik (Dev Mode)</div>
        <div style="font-family: monospace; font-size: 12px; background: #374151; padding: 8px 10px; border-radius: 6px; margin-bottom: 10px; text-align: center; letter-spacing: 0.5px;">${coordString}</div>
        <button id="copy-coord-btn" style="width: 100%; background: #3b82f6; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);">
          📋 Klik untuk Copy
        </button>
      </div>
    `;

    // Add animation keyframes if not exists
    if (!document.getElementById('toast-animation-style')) {
      const style = document.createElement('style');
      style.id = 'toast-animation-style';
      style.textContent = `
        @keyframes slideUp {
          from {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Add copy functionality
    const copyBtn = document.getElementById('copy-coord-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(coordString).then(() => {
        copyBtn.textContent = '✅ Tersalin ke Clipboard!';
        copyBtn.style.background = '#10b981';
        copyBtn.style.boxShadow = '0 2px 4px rgba(16, 185, 129, 0.3)';
      });
    });

    // Hover effect
    copyBtn.addEventListener('mouseenter', () => {
      if (!copyBtn.textContent.includes('Tersalin')) {
        copyBtn.style.background = '#2563eb';
        copyBtn.style.transform = 'scale(1.02)';
      }
    });
    copyBtn.addEventListener('mouseleave', () => {
      if (!copyBtn.textContent.includes('Tersalin')) {
        copyBtn.style.background = '#3b82f6';
        copyBtn.style.transform = 'scale(1)';
      }
    });

    setTimeout(() => {
      if (document.body.contains(toast)) {
        toast.style.transition = 'opacity 0.3s ease-out';
        toast.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 300);
      }
    }, 6000);
  };

  // Function to zoom to sub area location
  const zoomToSubArea = (location) => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    if (location.type === "street" && Array.isArray(location.coords[0])) {
      // For streets (polyline), fit bounds to show entire line
      const bounds = L.latLngBounds(location.coords);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    } else {
      // For markers, center and zoom to point
      const position = Array.isArray(location.coords[0])
        ? location.coords[0]
        : location.coords;
      map.setView(position, 17, { animate: true, duration: 1 });
    }

    setSelectedSubArea(location);
  };

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
      <div className="absolute top-4 right-4 z-[1002]">
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
      </div>

      {/* Schedule Panel */}
      {showSchedule && (
        <div className="absolute top-4 right-20 z-[1001] w-80">
          <SalesmanSchedule />
        </div>
      )}
      {/* Toggle Panel Button */}
      <div className="absolute top-4 left-4 z-[1001]">
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
      </div>

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

                {/* Sub Area Toggle - only show when B1 is selected */}
                {selectedAreas.some((area) => area.id === "dalam_kota") && (
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
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
                          Tampilkan Sub Area B1
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={showSubAreas}
                          onChange={(e) => setShowSubAreas(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-blue-700 mt-2">
                      Menampilkan {subAreaLocations.dalam_kota.length} lokasi
                      (jalan, pasar, toko)
                    </p>

                    {/* Button to toggle list */}
                    <button
                      onClick={() => setShowSubAreaList(!showSubAreaList)}
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${showSubAreaList ? 'rotate-180' : ''}`}
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
                      <span>{showSubAreaList ? 'Sembunyikan' : 'Lihat'} Daftar Lokasi</span>
                    </button>

                    {/* Sub Area List */}
                    {showSubAreaList && (
                      <div className="mt-3 max-h-64 overflow-y-auto space-y-1">
                        {subAreaLocations.dalam_kota.map((location, index) => {
                          const iconColor =
                            location.type === 'street' ? 'bg-blue-500' :
                            location.type === 'market' ? 'bg-green-500' :
                            'bg-orange-500';

                          const iconText =
                            location.type === 'street' ? 'J' :
                            location.type === 'market' ? 'P' :
                            'T';

                          return (
                            <div
                              key={index}
                              onClick={() => zoomToSubArea(location)}
                              className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-all ${
                                selectedSubArea?.name === location.name
                                  ? 'bg-blue-100 border border-blue-300'
                                  : 'bg-white hover:bg-gray-50 border border-gray-200'
                              }`}
                            >
                              <div className={`${iconColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                {iconText}
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
                )}
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
        center={center}
        zoom={11}
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
              style={geoJsonStyle(fileId)}
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

        {/* Render Sub Areas - only show when B1 (dalam_kota) is selected */}
        {showSubAreas &&
          selectedAreas.some((area) => area.id === "dalam_kota") &&
          subAreaLocations.dalam_kota.map((location, index) => {
            // If it's a street (has multiple coords), render as Polyline
            if (location.type === "street" && Array.isArray(location.coords[0])) {
              return (
                <Polyline
                  key={`subarea-${index}`}
                  positions={location.coords}
                  color="#ef4444"
                  weight={6}
                  opacity={0.9}
                  dashArray="10, 5"
                  lineCap="round"
                  lineJoin="round"
                >
                  <Popup>
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
                    </div>
                  </Popup>
                </Polyline>
              );
            } else {
              // For markets and stores, render as Marker
              const position = Array.isArray(location.coords[0])
                ? location.coords[0]
                : location.coords;

              return (
                <Marker
                  key={`subarea-${index}`}
                  position={position}
                  icon={createIcon(location.type)}
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
                    </div>
                  </Popup>
                </Marker>
              );
            }
          })}

        {/* Map Events Component to get map reference */}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default Map;
