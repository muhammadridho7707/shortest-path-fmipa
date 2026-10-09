/**
 * =======================================================================
 * File: src/js/app.js
 * PIC : Frontend Integration (Tengku Fahreza)
 * Proyek: Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 */

import {
  initMap,
  drawRoute,
  clearRoute,
  clearUserMarkers,
  resetMapView,
  updateBuildingInfoPanel,
  resetBuildingInfoPanel,
  NODE_KEY_TO_DROPDOWN
} from './map.js';
import { findShortestPath, calculateWalkingTime } from './algorithm.js';
import { graphData } from './data.js';

export const DROPDOWN_TO_NODE_ID = {
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

export function setGedungAsal(nodeKey, nodeData, dropdownVal) {
  const selectAsal = document.getElementById('select-asal');
  const targetVal = dropdownVal || NODE_KEY_TO_DROPDOWN[nodeKey] || '';
  if (selectAsal && targetVal) {
    selectAsal.value = targetVal;
    selectAsal.dispatchEvent(new Event('change'));
  }
  if (nodeData) {
    updateBuildingInfoPanel(nodeData, nodeKey, setGedungAsal, setGedungTujuan);
  }
  const selectTujuan = document.getElementById('select-tujuan');
  if (selectTujuan && selectTujuan.value && selectTujuan.value !== targetVal) {
    handleCariRute();
  }
}

export function setGedungTujuan(nodeKey, nodeData, dropdownVal) {
  const selectTujuan = document.getElementById('select-tujuan');
  const targetVal = dropdownVal || NODE_KEY_TO_DROPDOWN[nodeKey] || '';
  if (selectTujuan && targetVal) {
    selectTujuan.value = targetVal;
    selectTujuan.dispatchEvent(new Event('change'));
  }
  if (nodeData) {
    updateBuildingInfoPanel(nodeData, nodeKey, setGedungAsal, setGedungTujuan);
  }
  const selectAsal = document.getElementById('select-asal');
  if (selectAsal && selectAsal.value && selectAsal.value !== targetVal) {
    handleCariRute();
  }
}

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
    alert('Gedung asal dan tujuan tidak boleh sama.');
    return;
  }

  const result = findShortestPath(asalId, tujuanId);

  if (!result || !result.found || result.path.length === 0) {
    alert('Maaf, rute antara kedua gedung tersebut belum terhubung dalam graf.');
    clearRoute();
    if (panelHasil) panelHasil.classList.add('hidden');
    return;
  }

  drawRoute(result.steps);

  if (panelHasil) {
    panelHasil.classList.remove('hidden');
    panelHasil.style.display = 'block';
  }

  if (hasilJarak) {
    hasilJarak.textContent = `${result.distance} m`;
  }
  if (hasilWaktu) {
    hasilWaktu.textContent = calculateWalkingTime(result.distance);
  }

  if (hasilRute) {
    const readableSteps = result.steps
      .filter((s, idx) => {
        return s.isBuilding || idx === 0 || idx === result.steps.length - 1;
      })
      .map((s) => s.name);

    if (readableSteps.length <= 1) {
      hasilRute.textContent = result.steps.map((s) => s.name).join(' ➔ ');
    } else {
      hasilRute.textContent = readableSteps.join(' ➔ ');
    }
  }

  if (panelHasil && window.innerWidth < 1024) {
    panelHasil.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

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
 * Mulai Ulang / Reset Keseluruhan Status Aplikasi & Peta
 */
export function handleRestartApp() {
  console.log('🔄 [app.js] Merestart aplikasi & membersihkan peta...');

  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (selectAsal) selectAsal.value = '';
  if (selectTujuan) selectTujuan.value = '';

  const panelHasil = document.getElementById('panel-hasil');
  if (panelHasil) {
    panelHasil.classList.add('hidden');
    panelHasil.style.display = 'none';
  }

  clearRoute();
  clearUserMarkers();
  resetMapView();
  resetBuildingInfoPanel();

  console.log('✨ [app.js] Aplikasi berhasil di-reset.');
}

export function initApp() {
  console.log('🚀 [app.js] Menginisialisasi aplikasi navigasi FMIPA UNIMED...');

  initMap('map-container', {
    onSetAsal: setGedungAsal,
    onSetTujuan: setGedungTujuan,
  });

  const btnCari = document.getElementById('btn-cari');
  if (btnCari) {
    btnCari.onclick = handleCariRute;
  }

  const btnTukar = document.getElementById('btn-tukar');
  if (btnTukar) {
    btnTukar.onclick = handleTukarRute;
  }

  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (selectAsal) {
    selectAsal.addEventListener('change', () => {
      const val = selectAsal.value;
      const nodeId = DROPDOWN_TO_NODE_ID[val];
      const asalNode = nodeId ? graphData.nodes[nodeId] : null;
      if (asalNode) {
        updateBuildingInfoPanel(asalNode, nodeId, setGedungAsal, setGedungTujuan);
      }
    });
  }
  if (selectTujuan) {
    selectTujuan.addEventListener('change', () => {
      const val = selectTujuan.value;
      const nodeId = DROPDOWN_TO_NODE_ID[val];
      const tujuanNode = nodeId ? graphData.nodes[nodeId] : null;
      if (tujuanNode && !selectAsal?.value) {
        updateBuildingInfoPanel(tujuanNode, nodeId, setGedungAsal, setGedungTujuan);
      }
    });
  }

  console.log('✅ [app.js] Inisialisasi aplikasi selesai.');
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}