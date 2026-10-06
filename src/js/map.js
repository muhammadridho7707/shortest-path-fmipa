/**
 * =======================================================================
 * File: src/js/map.js
 * PIC : Tengku Fahreza (Frontend Map Integration)
 * Proyek: FMIPA Map — Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * 
 * TODO LIST UTAMA DARI DEVOPS (RIDHO):
 * 1. initMap(containerId):
 *    - Menyorot presisi kampus FMIPA UNIMED [3.60905, 98.71707]
 *    - Menghilangkan tulisan overlay placeholder bawaan secara otomatis
 *    - Menghubungkan kontrol zoom Zulayka (#btn-zoom-in & #btn-zoom-out)
 *    - Klik peta memunculkan pin interaktif (dilengkapi tombol Hapus Pin di popup)
 * 2. addBuildingMarkers(buildingsData, onMarkerClick):
 *    - Siap menerima array data koordinat dari Umar
 * 3. drawRoute(pathCoordinates) & clearRoute():
 *    - Menggambar garis rute tebal berwarna biru menyala (neon)
 * =======================================================================
 */

// Koordinat Presisi Area Fakultas FMIPA UNIMED
export const FMIPA_UNIMED_CENTER = [3.60711, 98.71497];
export const DEFAULT_ZOOM = 18;

let mapInstance = null;
let markersLayer = null;
let routeGlowLayer = null;
let routeCoreLayer = null;

// Koleksi pin klik interaktif pengguna
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

  // 1. Bersihkan overlay teks bawaan Zulayka ("Interactive map / Area Peta FMIPA")
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

  // 2. Pastikan legenda Zulayka di bawah tetap mengapung di atas peta
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
    zoomControl: false, // Menggunakan tombol zoom Zulayka
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

  // 7. Interaksi Klik Peta: Menancapkan pin dengan nomor urut & tombol Hapus
  mapInstance.on('click', (e) => {
    const { lat, lng } = e.latlng;
    const formattedLat = lat.toFixed(5);
    const formattedLng = lng.toFixed(5);

    // Hitung nomor urut pin
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

    // Popup dengan tombol Hapus Pin
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

    console.log(`📍 [Pin #${markerCount} Ditambahkan] Lat: ${lat}, Lng: ${lng}`);

    if (onMapClick) {
      onMapClick(lat, lng, newMarker);
    }
  });

  // 8. Hubungkan tombol kontrol zoom Zulayka
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');

  if (btnZoomIn) {
    btnZoomIn.onclick = () => mapInstance.zoomIn();
  }
  if (btnZoomOut) {
    btnZoomOut.onclick = () => mapInstance.zoomOut();
  }

  // InvalidateSize agar kanvas tidak abu-abu di Live Server
  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
      mapInstance.setView(FMIPA_UNIMED_CENTER, DEFAULT_ZOOM);
    }
  }, 250);

  console.log('✅ [TODO 1 Selesai] Peta FMIPA UNIMED aktif (Pusat: [3.60905, 98.71707]).');
  return mapInstance;
}

/**
 * Fungsi menghapus semua pin yang ditancapkan pengguna lewat klik
 */
export function clearUserMarkers() {
  if (userMarkersLayer) {
    userMarkersLayer.clearLayers();
  }
}

/**
 * [TODO 2] FUNGSI PENANDA (MARKER GEDUNG DARI UMAR)
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
 * [TODO 3] FUNGSI PENGGAMBAR RUTE (POLYLINE BIRU MENYALA)
 */
export function drawRoute(pathCoordinates = []) {
  clearRoute();

  if (!pathCoordinates || pathCoordinates.length < 2) return;

  // Lapisan Glow Luar (Aura Biru Neon)
  const glow = L.polyline(pathCoordinates, {
    color: '#38bdf8',
    weight: 12,
    opacity: 0.65,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeGlowLayer.addLayer(glow);

  // Lapisan Inti Garis Tebal (Biru Solid)
  const core = L.polyline(pathCoordinates, {
    color: '#1d4ed8',
    weight: 5,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(core);

  // Garis Aksen Putih Penunjuk Arah
  const dash = L.polyline(pathCoordinates, {
    color: '#ffffff',
    weight: 2,
    opacity: 0.9,
    dashArray: '6, 10',
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(dash);

  mapInstance.fitBounds(core.getBounds(), {
    padding: [50, 50],
    animate: true,
  });
}

export function clearRoute() {
  if (routeCoreLayer) routeCoreLayer.clearLayers();
  if (routeGlowLayer) routeGlowLayer.clearLayers();
}

export function getMap() {
  return mapInstance;
}