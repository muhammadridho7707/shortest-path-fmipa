/**
 * =======================================================================
 * File: src/js/map.js
 * PIC : Frontend Developer - Map Integration (Tengku Fahreza)
 * Proyek: Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 */

import { graphData } from './data.js';

// Ukuran kanvas SVG asli FMIPA UNIMED
export const SVG_WIDTH = 2028;
export const SVG_HEIGHT = 1138;
export const MAP_BOUNDS = [
  [0, 0],
  [SVG_HEIGHT, SVG_WIDTH],
];

// Pemetaan ID Node ke value dropdown HTML
export const NODE_KEY_TO_DROPDOWN = {
  GEDUNG_SYAWAL_GULTOM: 'gedung-syawal',
  GEDUNG_04: 'gedung-fisika',
  GEDUNG_05: 'gedung-biologi',
  GEDUNG_KIMIA: 'gedung-kimia',
  GEDUNG_02: 'gedung-matematika',
  GEDUNG_06: 'gedung-bilingual',
  GEDUNG_12: 'gedung-bersama',
  GEDUNG_LAB_FISIKA: 'lab-fisika',
  GEDUNG_09: 'lab-matematika',
  GEDUNG_LAB_KIMIA: 'lab-kimia',
  GEDUNG_LAB_BIOLOGI_BARAT: 'lab-biologi',
  GEDUNG_LAB_BIOLOGI_TIMUR: 'lab-biologi-timur',
};

let mapInstance = null;
let svgOverlay = null;
let neutralMarkersLayer = null;
let routeGlowLayer = null;
let routeCoreLayer = null;
let routeMarkersLayer = null;
let userPinLayer = null;
let highlightLayer = null;        // ← BARU
let activeAsalNodeId = null;      // ← BARU: simpan node ID asal aktif
let activeTujuanNodeId = null;    // ← BARU: simpan node ID tujuan aktif

let activeCallbackSetAsal = null;
let activeCallbackSetTujuan = null;
let userPinIdCounter = 0;

export function svgToLatLng(x, y) {
  return [SVG_HEIGHT - y, x];
}

export function latLngToSvg(lat, lng) {
  return {
    x: Math.round(lng),
    y: Math.round(SVG_HEIGHT - lat),
  };
}

/**
 * Render marker highlight merah (asal) & biru (tujuan) di atas neutral markers
 */
export function updateSelectionHighlight(asalId, tujuanId) {
  activeAsalNodeId = asalId || null;
  activeTujuanNodeId = tujuanId || null;

  if (!mapInstance || !highlightLayer) return;
  highlightLayer.clearLayers();

  const allNodes = graphData.nodes;

  function makeHighlightMarker(nodeId, color, iconChar, label) {
    const node = allNodes[nodeId];
    if (!node || !node.x || !node.y) return;

    const latLng = svgToLatLng(node.x, node.y);
    const icon = L.divIcon({
      className: 'fmipa-selected-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${color};
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          animation: fmipa-pulse 1.2s ease-in-out infinite alternate;
        " title="${label}">
          ${iconChar}
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    L.marker(latLng, { icon, interactive: false, zIndexOffset: 1000 })
      .addTo(highlightLayer);
  }

  if (activeAsalNodeId) {
    const n = allNodes[activeAsalNodeId];
    makeHighlightMarker(activeAsalNodeId, '#dc2626', '🔴', n?.label || activeAsalNodeId);
  }
  if (activeTujuanNodeId) {
    const n = allNodes[activeTujuanNodeId];
    makeHighlightMarker(activeTujuanNodeId, '#2563eb', '🔵', n?.label || activeTujuanNodeId);
  }
}

/**
 * Clear highlight (dipanggil saat reset)
 */
export function clearSelectionHighlight() {
  activeAsalNodeId = null;
  activeTujuanNodeId = null;
  if (highlightLayer) highlightLayer.clearLayers();
}

/**
 * Inisialisasi peta Leaflet dengan overlay map.svg & pembatas zoom presisi
 */
export function initMap(containerId = 'map-container', callbacks = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[map.js] Elemen container '#${containerId}' tidak ditemukan.`);
    return null;
  }

  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  if (callbacks.onSetAsal) activeCallbackSetAsal = callbacks.onSetAsal;
  if (callbacks.onSetTujuan) activeCallbackSetTujuan = callbacks.onSetTujuan;

  // Latar kanvas serasi agar tidak tampak celah kosong
  container.style.backgroundColor = '#fbf8ef';
  container.style.overflow = 'hidden';

  mapInstance = L.map(containerId, {
    crs: L.CRS.Simple,
    minZoom: -1.0, // Dikunci otomatis oleh updateZoomConstraints
    maxZoom: 2.5,
    zoomSnap: 0.1,
    zoomDelta: 0.35,
    attributionControl: false,
    zoomControl: false,
    maxBounds: MAP_BOUNDS,
    maxBoundsViscosity: 1.0, // Dinding kokoh: peta tidak dapat ditarik keluar layar
    bounceAtZoomLimits: true,
  });

  const svgCandidates = [
    './map.svg',
    '../../map.svg',
    'map.svg',
    '/map.svg',
    'assets/map.svg',
  ];

  function tryLoadSvg(index) {
    if (index >= svgCandidates.length) {
      console.warn('[map.js] Menggunakan fallback background kanvas FMIPA.');
      return;
    }
    const currentUrl = svgCandidates[index];
    const img = new Image();
    img.onload = () => {
      svgOverlay = L.imageOverlay(currentUrl, MAP_BOUNDS).addTo(mapInstance);
      console.log(`[map.js] Berhasil memuat map.svg dari: ${currentUrl}`);
    };
    img.onerror = () => {
      tryLoadSvg(index + 1);
    };
    img.src = currentUrl;
  }
  tryLoadSvg(0);

  neutralMarkersLayer = L.layerGroup().addTo(mapInstance);
  routeGlowLayer = L.layerGroup().addTo(mapInstance);
  routeCoreLayer = L.layerGroup().addTo(mapInstance);
  routeMarkersLayer = L.layerGroup().addTo(mapInstance);
  userPinLayer = L.layerGroup().addTo(mapInstance);
  highlightLayer = L.layerGroup().addTo(mapInstance);

  mapInstance.fitBounds(MAP_BOUNDS);

  // Kunci batas zoom out minimum agar pinggiran peta tidak pernah kosong terpotong
  function updateZoomConstraints() {
    if (!mapInstance) return;
    try {
      const fitZoom = mapInstance.getBoundsZoom(MAP_BOUNDS, false);
      mapInstance.setMinZoom(fitZoom);
    } catch (err) {
      console.warn('[map.js] Catatan minZoom:', err);
    }
  }

  updateZoomConstraints();

  // Klik sembarang tempat pada peta untuk membuat pin manual
  mapInstance.on('click', (e) => {
    if (e.originalEvent && e.originalEvent._fmipaHandled) return;
    createUserPin(e.latlng.lat, e.latlng.lng);
  });

  // Render 12 gedung FMIPA dengan pin netral
  renderNeutralMarkers();

  // Hubungkan tombol zoom jika tersedia
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  if (btnZoomIn) btnZoomIn.onclick = () => mapInstance && mapInstance.zoomIn();
  if (btnZoomOut) btnZoomOut.onclick = () => mapInstance && mapInstance.zoomOut();

  // Hubungkan tombol reset peta di sebelah tombol minus (-)
  const btnResetMap = document.getElementById('btn-reset-map');
const btnRestart = document.getElementById('btn-restart');
const onResetClicked = () => {
  // 1. Reset visual peta
  resetMapView();
  clearRoute();
  clearUserMarkers();
  clearSelectionHighlight(); 
  resetBuildingInfoPanel();

  // 2. Reset dropdown — pakai dispatchEvent supaya listener lain ikut ter-trigger
  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (selectAsal) {
    selectAsal.value = '';
    selectAsal.dispatchEvent(new Event('change'));
  }
  if (selectTujuan) {
    selectTujuan.value = '';
    selectTujuan.dispatchEvent(new Event('change'));
  }

  // 3. Hide panel hasil — hapus inline style juga, jangan cuma class
  const panelHasil = document.getElementById('panel-hasil');
  if (panelHasil) {
    panelHasil.classList.add('hidden');
    panelHasil.style.display = '';   // ← KOSONGKAN, jangan 'none'
  }
};
if (btnResetMap) btnResetMap.onclick = onResetClicked;
if (btnRestart) btnRestart.onclick = onResetClicked;

  // Responsif saat ukuran layar atau jendela browser berubah
  window.addEventListener('resize', () => {
    if (mapInstance) {
      mapInstance.invalidateSize();
      updateZoomConstraints();
    }
  });

  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
      mapInstance.fitBounds(MAP_BOUNDS);
      updateZoomConstraints();
    }
  }, 250);

  return mapInstance;
}

/**
 * Membuat pin manual pengguna yang DAPAT DIHAPUS kapan saja
 */
export function createUserPin(lat, lng) {
  if (!mapInstance || !userPinLayer) return null;

  userPinIdCounter++;
  const pinId = `pin_${Date.now()}_${userPinIdCounter}`;
  const pos = latLngToSvg(lat, lng);

  const pinIcon = L.divIcon({
    className: 'fmipa-user-pin',
    html: `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #C54F2D;
        border: 2px solid #FFFDF7;
        box-shadow: 0 4px 10px rgba(197, 79, 45, 0.5);
        color: #FFFDF7;
        font-size: 14px;
        cursor: pointer;
        transition: transform 0.15s ease;
      " title="Klik untuk opsi hapus atau klik kanan untuk hapus instan">
        📍
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const marker = L.marker([lat, lng], { icon: pinIcon }).addTo(userPinLayer);

  const popupHtml = `
    <div style="font-family: inherit; font-size: 12px; min-width: 170px; line-height: 1.4;">
      <strong style="color: #292524; font-size: 13px; display: block; margin-bottom: 2px;">
        Titik Penanda #${userPinIdCounter}
      </strong>
      <p style="margin: 0 0 8px 0; color: #78716c; font-size: 11px;">
        Koordinat: (${pos.x}, ${pos.y})
      </p>
      <button id="btn-delete-${pinId}" style="
        width: 100%;
        background: #ef4444;
        color: white;
        border: none;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      ">
        🗑️ Hapus Pin Ini
      </button>
      <small style="display: block; text-align: center; color: #a8a29e; font-size: 10px; margin-top: 4px;">
        (Bisa klik kanan pin untuk hapus langsung)
      </small>
    </div>
  `;

  marker.bindPopup(popupHtml);

  marker.on('popupopen', () => {
    const btnDel = document.getElementById(`btn-delete-${pinId}`);
    if (btnDel) {
      btnDel.onclick = (ev) => {
        if (ev) ev.stopPropagation();
        userPinLayer.removeLayer(marker);
      };
    }
  });

  marker.on('contextmenu', (ev) => {
    L.DomEvent.stopPropagation(ev);
    userPinLayer.removeLayer(marker);
  });
  marker.on('dblclick', (ev) => {
    L.DomEvent.stopPropagation(ev);
    userPinLayer.removeLayer(marker);
  });

  marker.openPopup();
  return marker;
}

/**
 * Menampilkan 12 gedung FMIPA dengan tombol '📍 Set Awal' dan '🎯 Set Tujuan'
 */
export function renderNeutralMarkers(callbacks = {}) {
  if (!mapInstance || !neutralMarkersLayer) return;
  neutralMarkersLayer.clearLayers();

  const onSetAsal = callbacks.onSetAsal || activeCallbackSetAsal;
  const onSetTujuan = callbacks.onSetTujuan || activeCallbackSetTujuan;

  const nodes = graphData.nodes;
  Object.keys(nodes).forEach((key) => {
    const node = nodes[key];
    if (!node.isBuilding) return;

    const latLng = svgToLatLng(node.x, node.y);
    const dropdownValue = NODE_KEY_TO_DROPDOWN[key] || '';

    const neutralIcon = L.divIcon({
      className: 'fmipa-neutral-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #475569;
          border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35);
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
          transition: transform 0.2s;
        " title="${node.label || node.name || key}">
          🏛️
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const marker = L.marker(latLng, { icon: neutralIcon }).addTo(neutralMarkersLayer);

    const popupHtml = `
      <div style="font-family: inherit; font-size: 12px; min-width: 190px; line-height: 1.4;">
        <strong style="color: #1e293b; font-size: 13px; display: block; margin-bottom: 2px;">
  ${node.label || node.name || key}
</strong>
<span style="font-size: 10px; ...">
  ${node.category || 'Gedung FMIPA'}
</span>
        <p style="margin: 0 0 8px 0; color: #64748b; font-size: 11px;">
          Koordinat: (${node.x}, ${node.y})
        </p>
        <div style="display: flex; gap: 6px; margin-top: 4px;">
          <button id="popup-set-asal-${key}" style="
            flex: 1;
            background: #dc2626;
            color: #ffffff;
            border: none;
            padding: 6px 4px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
          ">
            📍 Set Awal
          </button>
          <button id="popup-set-tujuan-${key}" style="
            flex: 1;
            background: #2563eb;
            color: #ffffff;
            border: none;
            padding: 6px 4px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
          ">
            🎯 Set Tujuan
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);

    marker.on('popupopen', () => {
      const btnAsal = document.getElementById(`popup-set-asal-${key}`);
      const btnTujuan = document.getElementById(`popup-set-tujuan-${key}`);
      if (btnAsal) {
        btnAsal.onclick = (ev) => {
          if (ev) ev.stopPropagation();
          if (onSetAsal) onSetAsal(key, node, dropdownValue);
          marker.closePopup();
        };
      }
      if (btnTujuan) {
        btnTujuan.onclick = (ev) => {
          if (ev) ev.stopPropagation();
          if (onSetTujuan) onSetTujuan(key, node, dropdownValue);
          marker.closePopup();
        };
      }
    });

    marker.on('click', (e) => {
      if (e.originalEvent) e.originalEvent._fmipaHandled = true;
      updateBuildingInfoPanel(node, key, onSetAsal, onSetTujuan);
    });
  });
}

export function updateBuildingInfoPanel(buildingNode, nodeKey, onSetAsal = null, onSetTujuan = null) {
  const namaEl = document.getElementById('nama-gedung');
  const daftarEl = document.getElementById('daftar-ruangan');
  const panelActions = document.getElementById('panel-gedung-actions');

  if (namaEl && buildingNode) {
  namaEl.textContent = buildingNode.label || buildingNode.name || 'Gedung';
}

  const dropdownValue = nodeKey ? NODE_KEY_TO_DROPDOWN[nodeKey] : '';
  const cbAsal = onSetAsal || activeCallbackSetAsal;
  const cbTujuan = onSetTujuan || activeCallbackSetTujuan;

  if (panelActions) {
    panelActions.classList.remove('hidden');
    const btnAsal = document.getElementById('btn-set-asal');
    const btnTujuan = document.getElementById('btn-set-tujuan');
    if (btnAsal) {
      btnAsal.onclick = () => {
        if (cbAsal && buildingNode) cbAsal(nodeKey, buildingNode, dropdownValue);
      };
    }
    if (btnTujuan) {
      btnTujuan.onclick = () => {
        if (cbTujuan && buildingNode) cbTujuan(nodeKey, buildingNode, dropdownValue);
      };
    }
  }

  if (daftarEl) {
    daftarEl.innerHTML = `
      <div class="rounded-xl border border-dashed border-[#D2BE91] bg-[#FFFDF7] px-4 py-3 text-xs text-stone-500">
        Data ruangan untuk <strong>${buildingNode ? (buildingNode.label || buildingNode.name) : 'gedung ini'}</strong> siap diselaraskan dengan pembaruan tim.
      </div>
    `;
  }
}

export function resetBuildingInfoPanel() {
  const namaEl = document.getElementById('nama-gedung');
  const daftarEl = document.getElementById('daftar-ruangan');
  const panelActions = document.getElementById('panel-gedung-actions');

  if (namaEl) namaEl.textContent = 'Informasi gedung';
  if (panelActions) panelActions.classList.add('hidden');
  if (daftarEl) {
    daftarEl.innerHTML = `
      <div class="rounded-xl border border-dashed border-[#D2BE91] bg-[#FFFDF7] px-4 py-3 text-sm text-stone-500">
        Pilih gedung pada peta untuk melihat informasi ruangan yang tersedia.
      </div>
    `;
  }
}

/**
 * Menggambar lintasan Dijkstra pada peta Leaflet
 */
export function drawRoute(steps = []) {
  clearRoute();
  if (!steps || steps.length < 2) {
    console.warn('[map.js] drawRoute membutuhkan minimal 2 titik lintasan.');
    return;
  }

  const polylineCoords = steps.map((s) => svgToLatLng(s.x, s.y));

  // 1. Garis Glow Hijau
  const glow = L.polyline(polylineCoords, {
    color: '#4ade80',
    weight: 12,
    opacity: 0.65,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeGlowLayer.addLayer(glow);

  // 2. Garis Inti Rute Hijau Emerald
  const core = L.polyline(polylineCoords, {
    color: '#16a34a',
    weight: 6,
    opacity: 0.95,
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(core);

  // 3. Garis Putus-putus Tengah
  const dash = L.polyline(polylineCoords, {
    color: '#ffffff',
    weight: 2,
    opacity: 0.9,
    dashArray: '6, 10',
    lineCap: 'round',
    lineJoin: 'round',
  });
  routeCoreLayer.addLayer(dash);

  // 4. Pin Berwarna pada Titik Rute
  steps.forEach((step, idx) => {
    const latLng = svgToLatLng(step.x, step.y);
    const isStart = idx === 0;
    const isEnd = idx === steps.length - 1;

    if (!isStart && !isEnd && !step.isBuilding) {
      const dotIcon = L.divIcon({
        className: 'fmipa-waypoint-dot',
        html: `
          <div style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #eab308;
            border: 2px solid #ffffff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.4);
          " title="${step.name}"></div>
        `,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });
      const wpMarker = L.marker(latLng, { icon: dotIcon });
      wpMarker.bindPopup(`<strong>${step.name}</strong><br><small>Titik Jalur</small>`);
      routeMarkersLayer.addLayer(wpMarker);
      return;
    }

    let bgColor = '#eab308';
    let label = 'Titik Dilewati';
    let iconChar = '🟡';

    if (isStart) {
      bgColor = '#dc2626';
      label = 'Titik Asal (Mulai)';
      iconChar = '🔴';
    } else if (isEnd) {
      bgColor = '#2563eb';
      label = 'Titik Tujuan (Sampai)';
      iconChar = '🔵';
    }

    const pinIcon = L.divIcon({
      className: 'fmipa-route-pin',
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${bgColor};
          border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          color: #ffffff;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
        ">
          ${iconChar}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const m = L.marker(latLng, { icon: pinIcon });
    m.bindPopup(`
      <strong style="font-size: 13px;">${step.name}</strong><br>
      <span style="font-size: 11px; color: ${bgColor}; font-weight: bold;">${label}</span>
    `);
    routeMarkersLayer.addLayer(m);
  });

  // Pusatkan tampilan pada rute
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
  if (userPinLayer) userPinLayer.clearLayers();
}

/**
 * Reset posisi zoom & tampilan peta ke ukuran penuh
 */
export function resetMapView() {
  if (mapInstance) {
    mapInstance.fitBounds(MAP_BOUNDS, {
      padding: [0, 0],
      animate: true,
    });
    try {
      const fitZoom = mapInstance.getBoundsZoom(MAP_BOUNDS, false);
      mapInstance.setMinZoom(fitZoom);
    } catch (e) {}
  }
}

export function addBuildingMarkers(onBuildingSelect) {
  renderNeutralMarkers({
    onSetAsal: onBuildingSelect,
    onSetTujuan: onBuildingSelect,
  });
}

export function getMap() {
  return mapInstance;
}