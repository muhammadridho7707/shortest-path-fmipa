/**
 * =======================================================================
 * File: src/js/map.js
 * PIC : Tengku Fahreza (Frontend Map Integration)
 * Proyek: FMIPA Map — Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * 
 * ATURAN WARNA DARI DEVOPS (RIDHO):
 * - Titik Awal        : Marker Merah 🔴 (#dc2626)
 * - Titik Akhir       : Marker Biru 🔵 (#2563eb)
 * - Gedung Dilewati   : Marker Kuning 🟡 (#eab308)
 * - Garis Rute        : Garis Hijau Neon 🟢 (#16a34a / #4ade80)
 * =======================================================================
 */

// Koordinat Presisi Area Kampus FMIPA Universitas Negeri Medan
export const FMIPA_UNIMED_CENTER = [3.60711, 98.71497];
export const DEFAULT_ZOOM = 18;

let mapInstance = null;
let markersLayer = null;
let routeGlowLayer = null;
let routeCoreLayer = null;
let routeMarkersLayer = null;
let userMarkersLayer = null;

/**
 * [TODO 1] INISIALISASI PETA LEAFLET
 */
export function initMap(containerId = 'map-container', onMapClick = null) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[map.js] Container #${containerId} tidak ditemukan.`);
    return null;
  }

  // 1. Bersihkan tulisan overlay placeholder bawaan
  const badges = container.querySelectorAll('.fmipa-badge-tomato');
  badges.forEach((b) => {
    if (b.textContent.toLowerCase().includes('interactive map')) {
      const centerOverlay = b.closest('.absolute');
      if (centerOverlay) centerOverlay.remove();
    }
  });

  const centerFallback = container.querySelector('.pointer-events-none.absolute');
  if (centerFallback && centerFallback.textContent.includes('Peta interaktif')) {
    centerFallback.remove();
  }

  // 2. Pastikan kotak legenda mengapung di atas kanvas peta
  const legendEl = container.querySelector('.fmipa-map-legend')?.closest('.absolute');
  if (legendEl) {
    legendEl.style.zIndex = '1000';
  }

  // 3. Buat kanvas peta jika belum ada
  container.style.position = 'relative';
  let mapCanvas = document.getElementById('leaflet-map-canvas');
  if (!mapCanvas) {
    mapCanvas = document.createElement('div');
    mapCanvas.id = 'leaflet-map-canvas';
    mapCanvas.style.position = 'absolute';
    mapCanvas.style.top = '0';
    mapCanvas.style.left = '0';
    mapCanvas.style.width = '100%';
    mapCanvas.style.height = '100%';
    mapCanvas.style.zIndex = '0';
    container.prepend(mapCanvas);
  }

  // 4. Inisialisasi Peta Leaflet
  mapInstance = L.map(mapCanvas, {
    center: FMIPA_UNIMED_CENTER,
    zoom: DEFAULT_ZOOM,
    minZoom: 15,
    maxZoom: 19,
    zoomControl: false,
  });

  // 5. Pasang TileLayer OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors',
  }).addTo(mapInstance);

  // 6. Siapkan Layer Group
  markersLayer = L.layerGroup().addTo(mapInstance);
  userMarkersLayer = L.layerGroup().addTo(mapInstance);
  routeGlowLayer = L.layerGroup().addTo(mapInstance);
  routeCoreLayer = L.layerGroup().addTo(mapInstance);
  routeMarkersLayer = L.layerGroup().addTo(mapInstance);

  // 7. Interaksi Klik Peta (Menancapkan pin dan tombol hapus)
  mapInstance.on('click', (e) => {
    const { lat, lng } = e.latlng;
    const formattedLat = lat.toFixed(5);
    const formattedLng = lng.toFixed(5);
    const markerCount = userMarkersLayer.getLayers().length + 1;

    const pinIcon = L.divIcon({
      className: 'fmipa-click-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #C54F2D;
          border: 2px solid #FFFDF7;
          box-shadow: 0 4px 10px rgba(197, 79, 45, 0.5);
          color: #FFFDF7;
          font-size: 13px;
          cursor: pointer;
        ">
          📍
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const newMarker = L.marker([lat, lng], { icon: pinIcon }).addTo(userMarkersLayer);

    const popupContent = document.createElement('div');
    popupContent.style.fontFamily = 'sans-serif';
    popupContent.style.fontSize = '12px';
    popupContent.style.lineHeight = '1.4';
    popupContent.innerHTML = `
      <strong style="color: #292524; font-size: 13px; display: block; margin-bottom: 2px;">
        Titik #${markerCount}
      </strong>
      <p style="margin: 0 0 8px 0; color: #78716c; font-size: 11px;">
        Lat: ${formattedLat}<br>Lng: ${formattedLng}
      </p>
      <button class="btn-hapus-pin" style="
        background: #ef4444;
        color: white;
        border: none;
        padding: 5px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
      ">
        🗑️ Hapus Pin Ini
      </button>
    `;

    popupContent.querySelector('.btn-hapus-pin').onclick = () => {
      userMarkersLayer.removeLayer(newMarker);
    };

    newMarker.bindPopup(popupContent).openPopup();

    if (onMapClick) {
      onMapClick(lat, lng, newMarker);
    }
  });

  // 8. Hubungkan tombol zoom Zulayka
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');

  if (btnZoomIn) {
    btnZoomIn.onclick = () => mapInstance.zoomIn();
  }
  if (btnZoomOut) {
    btnZoomOut.onclick = () => mapInstance.zoomOut();
  }

  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
      mapInstance.setView(FMIPA_UNIMED_CENTER, DEFAULT_ZOOM);
    }
  }, 250);

  console.log('✅ [map.js] Inisialisasi peta selesai.');
  return mapInstance;
}

/**
 * [TODO 2] FUNGSI PENANDA (MARKER GEDUNG DARI DATA UMAR)
 */
export function addBuildingMarkers(buildingsData = [], onMarkerClick = null) {
  if (!mapInstance || !markersLayer) return;

  markersLayer.clearLayers();

  const list = Array.isArray(buildingsData)
    ? buildingsData
    : Object.keys(buildingsData).map(k => ({ id: k, ...buildingsData[k] }));

  list.forEach((b) => {
    const lat = b.lat !== undefined ? b.lat : (b.coordinates ? b.coordinates[0] : null);
    const lng = b.lng !== undefined ? b.lng : (b.coordinates ? b.coordinates[1] : null);

    if (lat === null || lng === null) return;

    const icon = L.divIcon({
      className: 'fmipa-building-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #C54F2D;
          border: 2px solid #FFFDF7;
          box-shadow: 0 4px 10px rgba(197, 79, 45, 0.45);
          font-size: 13px;
          cursor: pointer;
        ">
          🏛️
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const marker = L.marker([lat, lng], { icon });

    marker.bindPopup(`
      <div style="font-family: sans-serif; font-size: 12px; min-width: 150px; line-height: 1.4;">
        <strong style="color: #292524; font-size: 13px; display: block; margin-bottom: 2px;">
          ${b.name || b.id}
        </strong>
        <span style="font-size: 10px; background: #FFF4D3; color: #C54F2D; border: 1px solid #EEBF43; padding: 1px 6px; border-radius: 4px; display: inline-block; margin-bottom: 4px;">
          FMIPA UNIMED
        </span>
        <p style="margin: 0; color: #78716c; font-size: 11px;">
          ${b.description || 'Gedung FMIPA UNIMED'}
        </p>
      </div>
    `);

    marker.on('click', () => {
      if (onMarkerClick) onMarkerClick(b);
    });

    marker.addTo(markersLayer);
  });
}

/**
 * [TODO 3] FUNGSI PENGGAMBAR RUTE SESUAI SPESIFIKASI RIDHO:
 * - Titik Awal        : Marker Merah 🔴
 * - Titik Akhir       : Marker Biru 🔵
 * - Gedung Dilewati   : Marker Kuning 🟡
 * - Rute (Polyline)   : Garis Hijau 🟢
 * 
 * Menerima array titik: [{ lat, lng, name }, ...] atau [[lat, lng], ...]
 */
export function drawRoute(pathPoints = []) {
  clearRoute();

  if (!pathPoints || pathPoints.length < 2) {
    console.warn('[map.js] drawRoute membutuhkan minimal 2 titik.');
    return;
  }

  // 1. Ekstrak koordinat untuk Polyline
  const polylineCoords = pathPoints.map(p => {
    if (Array.isArray(p)) return p;
    return [p.lat, p.lng];
  });

  // 2. Garis Rute: WARNA HIJAU (Sesuai Permintaan Ridho)
  const glow = L.polyline(polylineCoords, {
    color: '#4ade80', // Hijau Neon
    weight: 12,
    opacity: 0.65,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeGlowLayer.addLayer(glow);

  const core = L.polyline(polylineCoords, {
    color: '#16a34a', // Hijau Emerald
    weight: 6,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(core);

  const dash = L.polyline(polylineCoords, {
    color: '#ffffff',
    weight: 2,
    opacity: 0.9,
    dashArray: '6, 10',
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(dash);

  // 3. Pasang Marker Titik Rute Sesuai Aturan Warna Ridho:
  pathPoints.forEach((point, index) => {
    const lat = Array.isArray(point) ? point[0] : point.lat;
    const lng = Array.isArray(point) ? point[1] : point.lng;
    const name = (!Array.isArray(point) && point.name) ? point.name : `Titik ${index + 1}`;

    let bgColor = '#eab308'; // Default: Kuning (Gedung yang dilewati)
    let label = 'Dilewati';
    let iconChar = '🟡';

    if (index === 0) {
      bgColor = '#dc2626'; // Merah: Titik Awal
      label = 'Titik Awal (Asal)';
      iconChar = '🔴';
    } else if (index === pathPoints.length - 1) {
      bgColor = '#2563eb'; // Biru: Titik Akhir
      label = 'Titik Akhir (Tujuan)';
      iconChar = '🔵';
    }

    const routeMarkerIcon = L.divIcon({
      className: 'fmipa-route-node-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${bgColor};
          border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
          color: #ffffff;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
        ">
          ${iconChar}
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    const m = L.marker([lat, lng], { icon: routeMarkerIcon });
    m.bindPopup(`<strong>${name}</strong><br><small>${label}</small>`);
    routeMarkersLayer.addLayer(m);
  });

  // 4. Fokuskan kamera otomatis ke seluruh rute
  mapInstance.fitBounds(core.getBounds(), {
    padding: [50, 50],
    animate: true,
  });

  console.log('✅ [map.js] Rute hijau dengan pin Merah-Kuning-Biru siap.');
}

/**
 * FUNGSI PENDUKUNG: BERSIHKAN RUTE
 */
export function clearRoute() {
  if (routeCoreLayer) routeCoreLayer.clearLayers();
  if (routeGlowLayer) routeGlowLayer.clearLayers();
  if (routeMarkersLayer) routeMarkersLayer.clearLayers();
}

export function clearUserMarkers() {
  if (userMarkersLayer) userMarkersLayer.clearLayers();
}

export function getMap() {
  return mapInstance;
}