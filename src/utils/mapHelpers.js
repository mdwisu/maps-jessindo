import L from "leaflet";

// Get status badge color and label
const getStatusBadge = (status) => {
  const statusConfig = {
    needs_coordinates: { color: '#ef4444', label: '!' },
    estimated: { color: '#06b6d4', label: '~' },
    verified: { color: '#22c55e', label: '✓' }
  };
  return statusConfig[status] || null;
};

// Create custom icons for sub areas
export const createIcon = (type, isSelected = false, coordinateStatus = null) => {
  const isDev = import.meta.env.VITE_APP_MODE === 'development';
  const statusBadge = isDev && coordinateStatus ? getStatusBadge(coordinateStatus) : null;

  const iconConfig = {
    street: {
      html: `<div style="position: relative; width: ${isSelected ? '32px' : '24px'}; height: ${isSelected ? '32px' : '24px'};">
        <div style="background: #3b82f6; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: ${isSelected ? '3px' : '2px'} solid ${isSelected ? '#fbbf24' : 'white'}; box-shadow: 0 ${isSelected ? '4px 8px' : '2px 4px'} rgba(0,0,0,${isSelected ? '0.4' : '0.3'}); transition: all 0.3s;">
          <svg width="${isSelected ? '18' : '14'}" height="${isSelected ? '18' : '14'}" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        ${statusBadge ? `<div style="position: absolute; top: -4px; right: -4px; background: ${statusBadge.color}; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; font-size: 8px; font-weight: bold; color: white;">${statusBadge.label}</div>` : ''}
      </div>`,
      iconSize: isSelected ? [32, 32] : [24, 24],
      iconAnchor: isSelected ? [16, 16] : [12, 12]
    },
    market: {
      html: `<div style="position: relative; width: ${isSelected ? '36px' : '28px'}; height: ${isSelected ? '36px' : '28px'};">
        <div style="background: #10b981; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: ${isSelected ? '3px' : '2px'} solid ${isSelected ? '#fbbf24' : 'white'}; box-shadow: 0 ${isSelected ? '4px 8px' : '2px 4px'} rgba(0,0,0,${isSelected ? '0.4' : '0.3'}); transition: all 0.3s;">
          <svg width="${isSelected ? '20' : '16'}" height="${isSelected ? '20' : '16'}" viewBox="0 0 24 24" fill="white">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
        ${statusBadge ? `<div style="position: absolute; top: -4px; right: -4px; background: ${statusBadge.color}; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; font-size: 9px; font-weight: bold; color: white;">${statusBadge.label}</div>` : ''}
      </div>`,
      iconSize: isSelected ? [36, 36] : [28, 28],
      iconAnchor: isSelected ? [18, 18] : [14, 14]
    },
    store: {
      html: `<div style="position: relative; width: ${isSelected ? '34px' : '26px'}; height: ${isSelected ? '34px' : '26px'};">
        <div style="background: #f59e0b; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: ${isSelected ? '3px' : '2px'} solid ${isSelected ? '#fbbf24' : 'white'}; box-shadow: 0 ${isSelected ? '4px 8px' : '2px 4px'} rgba(0,0,0,${isSelected ? '0.4' : '0.3'}); transition: all 0.3s;">
          <svg width="${isSelected ? '19' : '15'}" height="${isSelected ? '19' : '15'}" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
          </svg>
        </div>
        ${statusBadge ? `<div style="position: absolute; top: -4px; right: -4px; background: ${statusBadge.color}; width: 17px; height: 17px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; font-size: 8px; font-weight: bold; color: white;">${statusBadge.label}</div>` : ''}
      </div>`,
      iconSize: isSelected ? [34, 34] : [26, 26],
      iconAnchor: isSelected ? [17, 17] : [13, 13]
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

// Function to zoom to sub area location
export const zoomToSubArea = (mapRef, location, setSelectedSubArea, currentSelected, resolvedCoords = null) => {
  if (!mapRef.current) return;

  const map = mapRef.current;

  // If clicking the same location, unhighlight it
  if (currentSelected?.name === location.name) {
    setSelectedSubArea(null);
    return;
  }

  // Use resolved coords if provided, otherwise use location.coords
  const coords = resolvedCoords || location.coords;

  if (location.type === "street" && coords) {
    // Check if it's multiple lines (array of arrays of coordinates)
    const isMultiLine = Array.isArray(coords[0]?.[0]?.[0]);

    if (isMultiLine) {
      // For MultiLineString, create bounds from all lines
      const allPoints = coords.flat();
      const bounds = L.latLngBounds(allPoints);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    } else if (Array.isArray(coords[0])) {
      // Single LineString
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    }
  } else if (coords) {
    // For markers, center and zoom to point
    const position = Array.isArray(coords[0]) ? coords[0] : coords;
    map.setView(position, 17, { animate: true, duration: 1 });
  }

  setSelectedSubArea(location);
};

// GeoJSON style function
export const geoJsonStyle = (fileId, allGeoJsonData, selectedAreas) => (feature) => {
  const data = allGeoJsonData[fileId];
  let color = "#2563eb"; // default color

  // Use area-specific colors
  if (selectedAreas.some((area) => area.id === "semua")) {
    color = data?.areaColor || "#6b7280";
  } else if (selectedAreas.some((area) => area.id === "semua_bogor")) {
    color = data?.areaColor || "#2563eb";
  } else if (selectedAreas.some((area) => area.id === "semua_depok")) {
    color = data?.areaColor || "#7c3aed";
  } else if (selectedAreas.length > 1) {
    color = data?.areaColor || "#6b7280";
  } else if (selectedAreas.length === 1) {
    color = selectedAreas[0].color;
  }

  return {
    color: "transparent",
    weight: 0,
    opacity: 0,
    fillOpacity: 0.8,
    fillColor: color,
    dashArray: null,
  };
};
