/**
 * =======================================================================
 * File: src/js/app.js
 * PIC : Frontend Integration (Tengku Fahreza)
 * Proyek: Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * Menghubungkan antarmuka UI dengan modul map.js dan algorithm.js
 * =======================================================================
 */

import { initMap, drawRoute, clearRoute, updateBuildingInfoPanel } from './map.js';
import { findShortestPath, calculateWalkingTime } from './algorithm.js';
import { graphData } from './data.js';

// Pemetaan value select option HTML Zulayka ke ID Node di data.js
const DROPDOWN_TO_NODE_ID = {
  'gedung-syawal': 'GEDUNG_SYAWAL_GULTOM',
  'gedung-syawal-gultom': 'GEDUNG_SYAWAL_GULTOM',
  'gedung-fisika': 'GEDUNG_04',
  'gedung-04': 'GEDUNG_04',
  'gedung-biologi': 'GEDUNG_05',
  'gedung-05': 'GEDUNG_05',
  'gedung-kimia': 'GEDUNG_KIMIA',
  'gedung-matematika': 'GEDUNG_02',
  'gedung-02': 'GEDUNG_02',
  'gedung-bilingual': 'GEDUNG_06',
  'gedung-06': 'GEDUNG_06',
  'gedung-bersama': 'GEDUNG_12',
  'gedung-12': 'GEDUNG_12',
  'lab-fisika': 'GEDUNG_LAB_FISIKA',
  'gedung-lab-fisika': 'GEDUNG_LAB_FISIKA',
  'lab-matematika': 'GEDUNG_09',
  'gedung-09': 'GEDUNG_09',
  'lab-kimia': 'GEDUNG_LAB_KIMIA',
  'gedung-lab-kimia': 'GEDUNG_LAB_KIMIA',
  'lab-biologi': 'GEDUNG_LAB_BIOLOGI_BARAT',
  'lab-biologi-barat': 'GEDUNG_LAB_BIOLOGI_BARAT',
  'lab-biologi-timur': 'GEDUNG_LAB_BIOLOGI_TIMUR',
};

/**
 * Mencari rute optimal dan menampilkan hasilnya ke antarmuka
 */
export function handleCariRute() {
  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  const panelHasil = document.getElementById('panel-hasil');
  const hasilJarak = document.getElementById('hasil-jarak');
  const hasilWaktu = document.getElementById('hasil-waktu');
  const hasilRute = document.getElementById('hasil-rute');

  if (!selectAsal || !selectTujuan) return;

  const rawAsal = selectAsal.value;
  const rawTujuan = selectTujuan.value;

  if (!rawAsal || !rawTujuan) {
    alert('Silakan pilih Gedung Asal dan Gedung Tujuan terlebih dahulu.');
    return;
  }

  const asalId = DROPDOWN_TO_NODE_ID[rawAsal] || rawAsal;
  const tujuanId = DROPDOWN_TO_NODE_ID[rawTujuan] || rawTujuan;

  if (asalId === tujuanId) {
    alert('Gedung asal dan gedung tujuan tidak boleh sama.');
    return;
  }

  // Hitung dengan Algoritma Dijkstra
  const result = findShortestPath(asalId, tujuanId);

  if (!result || !result.found || result.path.length === 0) {
    alert('Maaf, rute antara kedua gedung tersebut belum terhubung dalam graf.');
    clearRoute();
    if (panelHasil) panelHasil.classList.add('hidden');
    return;
  }

  // 1. Gambar rute di peta Leaflet
  drawRoute(result.steps);

  // 2. Tampilkan panel hasil
  if (panelHasil) {
    panelHasil.classList.remove('hidden');
    panelHasil.style.display = 'block';
  }

  // 3. Tuliskan jarak dan estimasi waktu
  if (hasilJarak) hasilJarak.textContent = `${result.distance} m`;
  if (hasilWaktu) hasilWaktu.textContent = calculateWalkingTime(result.distance);

  // 4. Tuliskan rangkaian rute gedung
  if (hasilRute) {
    const readable = result.steps
      .filter((s, idx) => s.isBuilding || idx === 0 || idx === result.steps.length - 1)
      .map((s) => s.name);
    hasilRute.textContent = (readable.length > 1 ? readable : result.steps.map((s) => s.name)).join(' ➔ ');
  }
}

/**
 * Menukar gedung asal dan tujuan
 */
export function handleTukarRute() {
  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (!selectAsal || !selectTujuan) return;

  const temp = selectAsal.value;
  selectAsal.value = selectTujuan.value;
  selectTujuan.value = temp;

  if (selectAsal.value && selectTujuan.value) {
    handleCariRute();
  }
}

/**
 * Inisialisasi Event Listener dan Peta
 */
export function initApp() {
  console.log('[app.js] Menginisialisasi aplikasi navigasi FMIPA...');

  // Inisialisasi peta
  initMap('map-container');

  // Pasang event tombol Cari
  const btnCari = document.getElementById('btn-cari');
  if (btnCari) btnCari.onclick = handleCariRute;

  // Pasang event tombol Tukar
  const btnTukar = document.getElementById('btn-tukar');
  if (btnTukar) btnTukar.onclick = handleTukarRute;

  // Update info panel saat dropdown berubah
  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');

  if (selectAsal) {
    selectAsal.addEventListener('change', () => {
      const node = graphData.nodes[DROPDOWN_TO_NODE_ID[selectAsal.value]];
      if (node) updateBuildingInfoPanel(node);
    });
  }

  if (selectTujuan) {
    selectTujuan.addEventListener('change', () => {
      const node = graphData.nodes[DROPDOWN_TO_NODE_ID[selectTujuan.value]];
      if (node && !selectAsal?.value) updateBuildingInfoPanel(node);
    });
  }
}

// Jalankan otomatis saat browser siap
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}