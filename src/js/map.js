/**
 * =======================================================================
 * File: src/js/map.js
 * PIC : Frontend Map Integration (Tengku Fahreza)
 * Proyek: FMIPA Map — Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * - Leaflet L.CRS.Simple untuk memetakan piksel map.svg (2028 x 1138)
 * - Menampilkan 12 pin gedung netral sejak awal
 * - Menggambar rute rute hijau neon: Awal (Merah), Tujuan (Biru), Simpang (Kuning)
 * =======================================================================
 */

import { graphData } from './data.js';

export const SVG_WIDTH = 2028;
export const SVG_HEIGHT = 1138;

export const MAP_BOUNDS = [
  [-SVG_HEIGHT, 0],
  [0, SVG_WIDTH],
];

export function svgToLatLng(x, y) {
  return [-y, x];
}

let mapInstance = null;
let svgOverlayLayer = null;
let markersLayer = null;
let routeGlowLayer = null;
let routeCoreLayer = null;
let routeMarkersLayer = null;
let userMarkersLayer = null;

/**
 * Inisialisasi Peta Leaflet dengan map.svg
 */
export function initMap(containerId = 'map-container', onMapClick = null) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[map.js] Container #${containerId} tidak ditemukan.`);
    return null;
  }

  // 1. Bersihkan overlay placeholder tulisan bawaan
  const centerFallback = container.querySelector('.pointer-events-none');
  if (centerFallback) {
    centerFallback.style.display = 'none';
  }

  // 2. Hancurkan instance lama jika ada
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  // 3. Buat peta Leaflet dengan CRS.Simple
  mapInstance = L.map(container, {
    crs: L.CRS.Simple,
    minZoom: -1.2,
    maxZoom: 2.5,
    zoomSnap: 0.1,
    zoomDelta: 0.2,
    attributionControl: false,
    maxBounds: [
      [-SVG_HEIGHT * 1.5, -SVG_WIDTH * 0.5],
      [SVG_HEIGHT * 0.5, SVG_WIDTH * 1.5],
    ],
  });

  // 4. Siapkan Layer Groups
  markersLayer = L.layerGroup().addTo(mapInstance);
  userMarkersLayer = L.layerGroup().addTo(mapInstance);
  routeGlowLayer = L.layerGroup().addTo(mapInstance);
  routeCoreLayer = L.layerGroup().addTo(mapInstance);
  routeMarkersLayer = L.layerGroup().addTo(mapInstance);

  // 5. Muat map.svg (multi-fallback agar tidak gagal di berbagai mode live server)
  const candidatePaths = [
    './map.svg',
    'map.svg',
    '../../map.svg',
    '../map.svg',
    '/map.svg',
  ];

  let loaded = false;
  function tryLoad(idx) {
    if (idx >= candidatePaths.length || loaded) return;
    const path = candidatePaths[idx];
    const testImg = new Image();
    testImg.onload = () => {
      if (loaded) return;
      loaded = true;
      if (svgOverlayLayer) mapInstance.removeLayer(svgOverlayLayer);
      svgOverlayLayer = L.imageOverlay(path, MAP_BOUNDS, {
        opacity: 0.98,
        interactive: false,
      }).addTo(mapInstance);
      console.log(`[map.js] map.svg berhasil dimuat dari: ${path}`);
    };
    testImg.onerror = () => tryLoad(idx + 1);
    testImg.src = path;
  }
  tryLoad(0);

  // 6. Pusatkan pandangan ke kanvas peta
  mapInstance.fitBounds(MAP_BOUNDS);

  // 7. Tombol Zoom kustom
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  if (btnZoomIn) btnZoomIn.onclick = () => mapInstance.zoomIn();
  if (btnZoomOut) btnZoomOut.onclick = () => mapInstance.zoomOut();

  // 8. Tampilkan marker 12 gedung FMIPA sejak awal
  renderNeutralMarkers();

  // 9. Interaksi klik peta (pin manual)
  mapInstance.on('click', (e) => {
    const { lat, lng } = e.latlng;
    const svgX = Math.round(lng);
    const svgY = Math.round(-lat);
    const pinCount = userMarkersLayer.getLayers().length + 1;

    const pinIcon = L.divIcon({
      className: 'fmipa-click-pin',
      html: `
        <div style="
          display: flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; border-radius: 50%;
          background: #C54F2D; border: 2px solid #FFFDF7;
          box-shadow: 0 4px 10px rgba(197, 79, 45, 0.5);
          color: #FFFDF7; font-size: 13px; cursor: pointer;
        ">📍</div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const marker = L.marker([lat, lng], { icon: pinIcon }).addTo(userMarkersLayer);
    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 12px;">
        <strong>Titik Penanda #${pinCount}</strong><br>
        <small>Koordinat: (${svgX}, ${svgY})</small>
      </div>
    `).openPopup();

    if (onMapClick) onMapClick({ x: svgX, y: svgY, lat, lng });
  });

  return mapInstance;
}

/**
 * Menampilkan seluruh gedung dengan pin netral
 */
export function renderNeutralMarkers(onBuildingClick = null) {
  if (!mapInstance || !markersLayer) return;
  markersLayer.clearLayers();

  const nodes = graphData.nodes;
  Object.keys(nodes).forEach((key) => {
    const node = nodes[key];
    if (!node.isBuilding) return;

    const latLng = svgToLatLng(node.x, node.y);
    const neutralIcon = L.divIcon({
      className: 'fmipa-neutral-pin',
      html: `
        <div style="
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 50%;
          background: #475569; border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
          color: #ffffff; font-size: 14px; cursor: pointer;
        " title="${node.name}">🏛️</div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const marker = L.marker(latLng, { icon: neutralIcon }).addTo(markersLayer);
    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 12px; min-width: 150px;">
        <strong style="color: #1e293b; font-size: 13px;">${node.name}</strong><br>
        <span style="font-size: 10px; background: #f1f5f9; padding: 1px 6px; border-radius: 4px; border: 1px solid #cbd5e1;">${node.category}</span>
      </div>
    `);

    marker.on('click', () => {
      updateBuildingInfoPanel(node);
      if (onBuildingClick) onBuildingClick(node);
    });
  });
}

/**
 * Alias fungsi agar kompatibel jika ada berkas yang memanggil addBuildingMarkers
 */
export function addBuildingMarkers(buildingsData = [], onMarkerClick = null) {
  return renderNeutralMarkers(onMarkerClick);
}

/**
 * Memperbarui panel informasi gedung di UI
 */
export function updateBuildingInfoPanel(buildingNode) {
  const namaEl = document.getElementById('nama-gedung');
  const daftarEl = document.getElementById('daftar-ruangan');
  if (namaEl && buildingNode) {
    namaEl.textContent = buildingNode.name;
  }
  if (daftarEl && buildingNode) {
    daftarEl.innerHTML = `
      <div class="rounded-xl border border-dashed border-[#D2BE91] bg-[#FFFDF7] px-4 py-3 text-xs text-stone-500">
        Informasi ${buildingNode.name} (${buildingNode.category}). Koordinat graf: X=${buildingNode.x}, Y=${buildingNode.y}.
      </div>
    `;
  }
}

/**
 * Menggambar lintasan Dijkstra
 * Titik Mulai: 🔴 Merah (#dc2626)
 * Titik Tujuan: 🔵 Biru (#2563eb)
 * Titik Simpang/Dilewati: 🟡 Kuning (#eab308)
 * Garis Rute: 🟢 Hijau Neon
 */
export function drawRoute(steps = []) {
  clearRoute();
  if (!steps || steps.length < 2) return;

  const polylineCoords = steps.map((s) => svgToLatLng(s.x, s.y));

  // Garis efek glow hijau terang
  const glow = L.polyline(polylineCoords, {
    color: '#4ade80',
    weight: 12,
    opacity: 0.7,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeGlowLayer.addLayer(glow);

  // Garis inti hijau solid
  const core = L.polyline(polylineCoords, {
    color: '#16a34a',
    weight: 6,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(core);

  // Pin warna di setiap titik langkah
  steps.forEach((step, idx) => {
    const latLng = svgToLatLng(step.x, step.y);
    const isStart = idx === 0;
    const isEnd = idx === steps.length - 1;

    // Waypoint jalan setapak kecil
    if (!isStart && !isEnd && !step.isBuilding) {
      const dotIcon = L.divIcon({
        className: 'fmipa-waypoint-dot',
        html: `<div style="width: 10px; height: 10px; border-radius: 50%; background: #eab308; border: 2px solid #ffffff; box-shadow: 0 1px 4px rgba(0,0,0,0.4);" title="${step.name}"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });
      const wpMarker = L.marker(latLng, { icon: dotIcon });
      wpMarker.bindPopup(`<strong>${step.name}</strong><br><small>Jalan Setapak</small>`);
      routeMarkersLayer.addLayer(wpMarker);
      return;
    }

    let bgColor = '#eab308';
    let iconChar = '🟡';
    let label = 'Dilewati';

    if (isStart) {
      bgColor = '#dc2626';
      iconChar = '🔴';
      label = 'Titik Asal';
    } else if (isEnd) {
      bgColor = '#2563eb';
      iconChar = '🔵';
      label = 'Titik Tujuan';
    }

    const pinIcon = L.divIcon({
      className: 'fmipa-route-pin',
      html: `
        <div style="
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 50%;
          background: ${bgColor}; border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          color: #ffffff; font-size: 13px; font-weight: bold; cursor: pointer;
        ">${iconChar}</div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const m = L.marker(latLng, { icon: pinIcon });
    m.bindPopup(`<strong>${step.name}</strong><br><span style="color: ${bgColor}; font-weight: bold;">${label}</span>`);
    routeMarkersLayer.addLayer(m);
  });

  // Fokuskan zoom ke seluruh jalur rute
  mapInstance.fitBounds(core.getBounds(), {
    padding: [50, 50],
    animate: true,
  });
}

export function clearRoute() {
  if (routeGlowLayer) routeGlowLayer.clearLayers();
  if (routeCoreLayer) routeCoreLayer.clearLayers();
  if (routeMarkersLayer) routeMarkersLayer.clearLayers();
}

export function clearUserMarkers() {
  if (userMarkersLayer) userMarkersLayer.clearLayers();
}

export function getMap() {
  return mapInstance;
}