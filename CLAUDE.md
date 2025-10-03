# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Maps Jessindo is a React-based interactive mapping application for visualizing sales territories in the Bogor and Depok regions. The app displays GeoJSON-based geographical areas with a salesman schedule management system.

## Tech Stack

- **Frontend**: React 19.1.1 + Vite 7.1.2
- **Mapping**: Leaflet + React-Leaflet
- **Styling**: Tailwind CSS
- **Server**: Express.js (production server)
- **Process Manager**: PM2 (ecosystem.config.cjs)

## Development Commands

### Development
```bash
npm run dev          # Start Vite dev server (default port 5173)
```

### Build & Preview
```bash
npm run build        # Build for production (output to dist/)
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint
```

### Production Server
```bash
node server.cjs      # Run Express server on port 7002
pm2 start ecosystem.config.cjs  # Start with PM2
```

## Architecture

### Core Components

**Map Component** (`src/components/Map.jsx`)
- Main map container using Leaflet/React-Leaflet
- Manages GeoJSON data loading from `/public/data/geojson/`
- Handles area selection with 4 regional divisions:
  - **B1 (Dalam Kota)**: Bogor Tengah, Bogor Utara, Tanah Sereal
  - **B2 (Jasinga)**: Leuwiliang, Cigudeg, Nanggung, Cibangbulang, Jasinga, Pamijahan
  - **B3 (Cisarua)**: Bojong Gede, Cisarua, Ciampea, Tanah Sereal, Tenjolaya, Bogor Barat, Dramaga, Rancabungur, Cipayung (Depok)
  - **B4 (Cigombong)**: Cigombong, Cijeruk, Caringin, Ciawi, Bogor Selatan, Bogor Timur, Bogor Utara, Sukaraja
  - **D1 (Ciseeng)**: Ciseeng, Limo, Pancoran Mas, Parung, Beji, Tajur Halang, Sawangan
  - **D2 (Palsi)**: Cimanggis, Tapos, Sukma Jaya, Cilodong
  - **D3 (Citereup)**: Citereup, Cibinong, Babakan Madang
  - **D4 (Klapanunggal)**: Klapanunggal, Jonggol, Cariu, Cileungsi, Gunung Putri

**SalesmanSchedule Component** (`src/components/SalesmanSchedule.jsx`)
- Displays daily schedules for salesman divisions (GRO 1/2/3, UCI, KSP, MI)
- Day selector with schedule details per salesman
- Currently shows demo data for B1 area only

**Salesman Data** (`src/data/salesmanSchedule.js`)
- Contains schedule mapping by area and division
- Helper functions: `getScheduleByDay()`, `getSalesmanByDivision()`, `getAllCoveredAreas()`

### Data Structure

**GeoJSON Files** (`/public/data/geojson/`)
- 50+ GeoJSON files representing kecamatan (sub-districts)
- Files loaded dynamically based on area selection
- Each file contains polygon features with properties (KECAMATAN, NAMOBJ, etc.)

**Area Configuration** (in `Map.jsx`)
- `availableAreas`: Array defining selectable areas with colors and descriptions
- `areaFiles`: Mapping of area IDs to their constituent GeoJSON files
- Selection modes: global ("semua"), regional ("semua_bogor", "semua_depok"), or individual areas

### State Management

Map component uses React hooks for:
- `allGeoJsonData`: Loaded GeoJSON features keyed by area-filename
- `visibleLayers`: Toggle visibility of loaded layers
- `selectedAreas`: Currently selected area(s)
- `panelVisible/panelMinimized`: UI panel states

### Key Features

1. **Dynamic Area Loading**: GeoJSON files loaded on-demand when areas selected
2. **Multi-Area Selection**: Can view multiple areas simultaneously with distinct colors
3. **Interactive Popups**: Click polygons to see kecamatan details and assigned sales areas
4. **Area Cross-Referencing**: When multiple areas share a kecamatan, popup shows all related areas
5. **Responsive Panel**: Collapsible control panel with area selection

## Important Implementation Notes

### GeoJSON Loading Pattern
The `loadAreaData()` function:
1. Takes array of area IDs
2. Fetches corresponding GeoJSON files from `/data/geojson/`
3. Assigns colors and metadata to each feature
4. Handles "semua" (all), regional, and individual selections

### Styling Logic
- Each area has a predefined color in `availableAreas`
- When "Semua Area" selected: uses individual area colors for distinction
- Single area selection: uses that area's color uniformly
- Multiple selection: preserves original area colors

### Production Deployment
- Build generates static files to `dist/`
- Express server (`server.cjs`) serves from `dist/`
- Configured for port 7002
- PM2 config includes log rotation and auto-restart

## File Organization
```
src/
├── components/
│   ├── Map.jsx              # Main map component
│   └── SalesmanSchedule.jsx # Schedule display component
├── data/
│   └── salesmanSchedule.js  # Schedule data and helpers
├── App.jsx                  # Root component
└── main.jsx                 # Entry point

public/
└── data/
    └── geojson/             # 50+ kecamatan GeoJSON files
```

## Development Notes

- Map center: Bogor area [-6.5944, 106.7892]
- Default zoom: 11
- Uses OpenStreetMap tiles
- Leaflet CSS required: imported in Map.jsx
- No TypeScript - pure JavaScript/JSX
- Tailwind configured for JIT compilation
