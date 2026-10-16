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
  NODE_KEY_TO_DROPDOWN,
  updateSelectionHighlight,        // ← BARU
  clearSelectionHighlight,         // ← BARU (opsional)
  handleResetMap,          // ← BARU
  resetUserPinCounter,     // ← BARU
} from './map.js';
import { findShortestPath, calculateWalkingTime } from './algorithm.js';
import { graphData } from './data.js';
import { cariRuangan, getGedungByKode } from './dataruang.js';
import { NODE_ID_TO_KODE_GEDUNG } from './roomMapping.js';

export const DROPDOWN_TO_NODE_ID = {
  'gedung-syawal': 'building_syawal',
  'gedung-fisika': 'building_fisika',
  'gedung-biologi': 'building_biologi',
  'gedung-kimia': 'building_kimia',
  'gedung-matematika': 'building_matematika',
  'gedung-bilingual': 'building_bilingual',
  'gedung-bersama': 'building_bersama',
  'lab-fisika': 'lab_fisika',
  'lab-matematika': 'lab_math',
  'lab-kimia': 'lab_kimia',
  'lab-biologi': 'lab_bio_new',
  'lab-biologi-timur': 'lab_bio-old',
};

// Mapping kebalikan: kodeGedung → node_id (untuk search)
export const KODE_GEDUNG_TO_NODE_ID = Object.fromEntries(
  Object.entries(NODE_ID_TO_KODE_GEDUNG).map(([nodeId, kode]) => [kode, nodeId])
);

// Mapping kebalikan: node_id → dropdown value
export const NODE_ID_TO_DROPDOWN = Object.fromEntries(
  Object.entries(DROPDOWN_TO_NODE_ID).map(([dropdown, nodeId]) => [nodeId, dropdown])
);

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
  const btnCari = document.getElementById('btn-cari');

  if (!selectAsal || !selectTujuan) return;

  const rawAsal = selectAsal.value;
  const rawTujuan = selectTujuan.value;

  // Validasi: belum pilih
  if (!rawAsal || !rawTujuan) {
    showToast('Silakan pilih Gedung Asal dan Gedung Tujuan terlebih dahulu.', 'warning');
    return;
  }

  const asalId = DROPDOWN_TO_NODE_ID[rawAsal] || rawAsal;
  const tujuanId = DROPDOWN_TO_NODE_ID[rawTujuan] || rawTujuan;

  // Validasi: sama
  if (asalId === tujuanId) {
    showToast('Gedung asal dan tujuan tidak boleh sama.', 'warning');
    return;
  }

  // Tampilkan loading state di tombol
  const originalHTML = btnCari ? btnCari.innerHTML : '';
  if (btnCari) {
    btnCari.classList.add('is-loading');
    btnCari.innerHTML = `
      <span class="fmipa-spinner"></span>
      Menghitung...
    `;
  }

  // Delay kecil untuk visual feedback (50ms) lalu hitung rute
  setTimeout(() => {
  try {
    const result = findShortestPath(asalId, tujuanId);

    if (!result || !result.found || result.path.length === 0) {
      showToast('Rute antara kedua gedung belum terhubung dalam graf.', 'error');
      clearRoute();
      if (panelHasil) panelHasil.classList.add('hidden');
      return;
    }

    drawRoute(result.steps);

    // ✅ FIX: Setelah rute ditemukan, PAKSA panel ke gedung TUJUAN
    if (tujuanId && graphData.nodes[tujuanId]) {
      updateBuildingInfoPanel(
        graphData.nodes[tujuanId],
        tujuanId,
        setGedungAsal,
        setGedungTujuan
      );
    }

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

      // Toast sukses
      const asalName = graphData.nodes[asalId]?.label || asalId;
      const tujuanName = graphData.nodes[tujuanId]?.label || tujuanId;
      showToast(
        `Rute ditemukan: ${asalName} → ${tujuanName} (${result.distance} m)`,
        'success'
      );

      if (panelHasil && window.innerWidth < 1024) {
        panelHasil.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch (err) {
      console.error('[handleCariRute] Error:', err);
      showToast('Terjadi kesalahan saat mencari rute.', 'error');
    } finally {
      // Kembalikan tombol
      if (btnCari) {
        btnCari.classList.remove('is-loading');
        btnCari.innerHTML = originalHTML;
      }
    }
  }, 50);
}

export function handleTukarRute() {
  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (!selectAsal || !selectTujuan) return;

  const temp = selectAsal.value;
  selectAsal.value = selectTujuan.value;
  selectTujuan.value = temp;

  // Update highlight dulu
  const asalId = DROPDOWN_TO_NODE_ID[selectAsal.value] || null;
  const tujuanId = DROPDOWN_TO_NODE_ID[selectTujuan.value] || null;
  updateSelectionHighlight(asalId, tujuanId);

  // Baru cari rute
  if (selectAsal.value && selectTujuan.value) {
    handleCariRute();
  }
}

/**
 * Mulai Ulang / Reset Keseluruhan Status Aplikasi & Peta
 */
export function handleRestartApp() {
  const btnRestart = document.getElementById('btn-restart');
  const originalHTML = btnRestart ? btnRestart.innerHTML : '';

  // Loading state di tombol
  if (btnRestart) {
    btnRestart.classList.add('is-loading');
    btnRestart.innerHTML = `
      <span class="fmipa-spinner"></span>
      Mereset...
    `;
  }

  // Delay kecil untuk visual feedback (150ms)
  setTimeout(() => {
    try {
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
      clearSelectionHighlight();
      resetMapView();
      resetBuildingInfoPanel();
      resetUserPinCounter();

      showToast('Semua data telah direset.', 'info', 2000);
    } catch (err) {
      console.error('[handleRestartApp] Error:', err);
      showToast('Gagal reset. Coba lagi.', 'error');
    } finally {
      // Kembalikan tombol
      if (btnRestart) {
        btnRestart.classList.remove('is-loading');
        btnRestart.innerHTML = originalHTML;
      }
    }
  }, 150);
}

// =====================================================================
// TOAST NOTIFICATION
// =====================================================================
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('fmipa-toast-container');
  if (!container) {
    console.warn('Toast container tidak ditemukan');
    return;
  }

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  };

  const toast = document.createElement('div');
  toast.className = `fmipa-toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" aria-label="Tutup">✕</button>
  `;

  container.appendChild(toast);

  // Auto dismiss
  const dismiss = () => {
    toast.classList.add('toast-out');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  };

  const timer = setTimeout(dismiss, duration);

  // Manual close
  const closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) {
    closeBtn.onclick = () => {
      clearTimeout(timer);
      dismiss();
    };
  }
}

// Export supaya bisa dipakai di tempat lain kalau perlu
export { showToast };

// =====================================================================
// SEARCH RUANGAN GLOBAL
// =====================================================================
let searchDebounceTimer = null;

function highlightKeyword(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="search-result-highlight">$1</span>');
}

function performGlobalSearch(keyword) {
  const resultsEl = document.getElementById('search-results');
  const clearBtn = document.getElementById('btn-clear-search');
  if (!resultsEl) return;

  const query = (keyword || '').trim().toLowerCase();

  if (!query) {
    resultsEl.classList.add('hidden');
    resultsEl.innerHTML = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    return;
  }

  if (clearBtn) clearBtn.classList.remove('hidden');

  // Cari ruangan
  const allResults = cariRuangan(query);
const MAX_SHOWN = 50;
const results = allResults.slice(0, MAX_SHOWN);
const totalFound = allResults.length;

  if (results.length === 0) {
    resultsEl.innerHTML = `
      <div class="search-result-empty">
        Tidak ada ruangan yang cocok dengan "<strong>${keyword}</strong>".
      </div>
    `;
    positionSearchDropdown();
    resultsEl.classList.remove('hidden');
    return;
  }

  const html = results.map((r, idx) => {
    const kodeGedung = r.kodeGedung;
    const namaGedung = r.namaGedung;
    const lantai = r.lantai;
    const nodeId = KODE_GEDUNG_TO_NODE_ID[kodeGedung];

    if (!nodeId) {
      return `
        <div class="search-result-item" data-disabled="true">
          <div class="search-result-header">
            <div class="search-result-info">
              <div class="search-result-name">${highlightKeyword(r.namaRuangan, keyword)}</div>
              <div class="search-result-code">${highlightKeyword(r.kodeRuangan, keyword)}</div>
              <div class="search-result-meta">${namaGedung} — Lt.${lantai} (tidak tersedia di graf)</div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="search-result-item" data-idx="${idx}">
        <div class="search-result-header">
          <div class="search-result-info">
            <div class="search-result-name">${highlightKeyword(r.namaRuangan, keyword)}</div>
            <div class="search-result-code">${highlightKeyword(r.kodeRuangan, keyword)}</div>
            <div class="search-result-meta">${namaGedung} — Lt.${lantai}</div>
          </div>
          <span class="search-result-chevron">›</span>
        </div>
        <div class="search-result-actions">
          <button class="btn-set-awal" data-node-id="${nodeId}" data-dropdown="${NODE_ID_TO_DROPDOWN[nodeId] || ''}">
            Jadikan Awal
          </button>
          <button class="btn-set-tujuan" data-node-id="${nodeId}" data-dropdown="${NODE_ID_TO_DROPDOWN[nodeId] || ''}">
            Jadikan Tujuan
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Indikator "X hasil lainnya"
const moreIndicator = totalFound > MAX_SHOWN ? `
  <div style="padding: 14px 16px; text-align: center; font-size: 12px; color: #78716c; background: #faf6ec; border-top: 1px dashed #E4D5B6;">
    Menampilkan <strong>${MAX_SHOWN}</strong> dari <strong>${totalFound}</strong> hasil.<br>
    <span style="font-size: 11px;">Persempit pencarian untuk hasil lebih spesifik.</span>
  </div>
` : '';

resultsEl.innerHTML = html + moreIndicator;
  positionSearchDropdown();
  resultsEl.classList.remove('hidden');

  // Event: klik item → toggle active (buka action buttons)
  resultsEl.querySelectorAll('.search-result-item').forEach((item) => {
    if (item.dataset.disabled === 'true') return;

    const header = item.querySelector('.search-result-header');
    if (header) {
      header.onclick = (e) => {
        e.stopPropagation();
        // Tutup item lain
        resultsEl.querySelectorAll('.search-result-item').forEach((other) => {
          if (other !== item) other.classList.remove('is-active');
        });
        // Toggle item ini
        item.classList.toggle('is-active');
      };
    }
  });

  // Event: klik tombol Awal
  resultsEl.querySelectorAll('.btn-set-awal').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const nodeId = btn.dataset.nodeId;
      const dropdown = btn.dataset.dropdown;
      if (nodeId && dropdown) {
        setGedungAsal(nodeId, graphData.nodes[nodeId], dropdown);
        showToast(`Gedung asal diset: ${graphData.nodes[nodeId]?.label || nodeId}`, 'success');
        closeSearchResults();
      }
    };
  });

  // Event: klik tombol Tujuan
  resultsEl.querySelectorAll('.btn-set-tujuan').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const nodeId = btn.dataset.nodeId;
      const dropdown = btn.dataset.dropdown;
      if (nodeId && dropdown) {
        setGedungTujuan(nodeId, graphData.nodes[nodeId], dropdown);
        showToast(`Gedung tujuan diset: ${graphData.nodes[nodeId]?.label || nodeId}`, 'success');
        closeSearchResults();
      }
    };
  });
}

function closeSearchResults() {
  const resultsEl = document.getElementById('search-results');
  const inputEl = document.getElementById('search-ruangan-global');
  const clearBtn = document.getElementById('btn-clear-search');
  if (resultsEl) {
    resultsEl.classList.add('hidden');
    resultsEl.innerHTML = '';
  }
  if (inputEl) inputEl.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
}

// =====================================================================
// POSISI DROPDOWN SEARCH (fixed di bawah input)
// =====================================================================
function positionSearchDropdown() {
  const inputEl = document.getElementById('search-ruangan-global');
  const resultsEl = document.getElementById('search-results');
  if (!inputEl || !resultsEl) return;

  const rect = inputEl.getBoundingClientRect();
  resultsEl.style.top = `${rect.bottom + 6}px`;
  resultsEl.style.left = `${rect.left}px`;
  // width diatur CSS
}

async function handleExportMap() {
  const btnExport = document.getElementById('btn-export-map');
  const mapContainer = document.getElementById('map-container');

  if (!mapContainer) {
    showToast('Peta tidak ditemukan.', 'error');
    return;
  }

  if (typeof htmlToImage === 'undefined') {
  console.error('[handleExportMap] html-to-image tidak termuat. Cek koneksi ke unpkg.com');
  showToast('Library export belum termuat. Coba refresh.', 'error');
  return;
}

  // Loading state
  const originalHTML = btnExport ? btnExport.innerHTML : '';
  if (btnExport) {
    btnExport.disabled = true;
    btnExport.classList.add('opacity-50');
    btnExport.innerHTML = `
      <span class="fmipa-spinner" style="width: 14px; height: 14px; border-width: 2px;"></span>
    `;
  }

  showToast('Menyiapkan gambar...', 'info', 2000);

  // Sembunyikan sementara elemen yang tidak perlu (legend, kontrol)
  const hiddenEls = [];
  const hideEl = (selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      hiddenEls.push({ el, original: el.style.visibility });
      el.style.visibility = 'hidden';
    });
  };
  hideEl('.leaflet-control-zoom');
  hideEl('.leaflet-control-attribution');

  // Tunggu rendering
  await new Promise(resolve => setTimeout(resolve, 200));

  try {
    // Capture dengan html-to-image
    const dataURL = await htmlToImage.toPng(mapContainer, {
      quality: 1,
      pixelRatio: 2,                 // 2x resolution untuk HD
      backgroundColor: '#fbf8ef',
      cacheBust: true,               // cache buster biar gambar fresh
      skipFonts: false,
      filter: (node) => {
        // Skip tombol-tombol Leaflet
        if (node.classList) {
          if (node.classList.contains('leaflet-control-zoom')) return false;
          if (node.classList.contains('leaflet-control-attribution')) return false;
        }
        return true;
      },
    });

    // Info header
    const selectAsal = document.getElementById('select-asal');
    const selectTujuan = document.getElementById('select-tujuan');
    const hasilJarak = document.getElementById('hasil-jarak');
    const hasilWaktu = document.getElementById('hasil-waktu');

    const asalName = selectAsal?.options[selectAsal.selectedIndex]?.text || '';
    const tujuanName = selectTujuan?.options[selectTujuan.selectedIndex]?.text || '';
    const jarakText = hasilJarak?.textContent || '';
    const waktuText = hasilWaktu?.textContent || '';

    // Muat image
    const img = new Image();
    img.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = dataURL;
    });

    // Gabung dengan header
    const finalCanvas = document.createElement('canvas');
    const headerHeight = 80;
    finalCanvas.width = img.width;
    finalCanvas.height = img.height + headerHeight;

    const ctx = finalCanvas.getContext('2d');

    // Header bg
    ctx.fillStyle = '#FFFDF7';
    ctx.fillRect(0, 0, finalCanvas.width, headerHeight);

    // Garis pemisah
    ctx.strokeStyle = '#E4D5B6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, headerHeight);
    ctx.lineTo(finalCanvas.width, headerHeight);
    ctx.stroke();

    // Title
    ctx.fillStyle = '#292524';
    ctx.font = 'bold 22px sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText('🚶 Rute FMIPA UNIMED', 20, 26);

    // Subtitle
    if (asalName && tujuanName) {
      ctx.fillStyle = '#57534e';
      ctx.font = '16px sans-serif';
      ctx.fillText(`${asalName}  →  ${tujuanName}`, 20, 56);
    }

    // Info jarak
    if (jarakText !== '-' && jarakText) {
      ctx.fillStyle = '#C54F2D';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${jarakText}  •  ${waktuText}`, finalCanvas.width - 20, 40);
      ctx.textAlign = 'left';
    }

    // Tempel peta
    ctx.drawImage(img, 0, headerHeight);

    // Download
    const finalURL = finalCanvas.toDataURL('image/png');
    const filename = generateFilename(asalName && tujuanName ? 'fmipa-rute' : 'fmipa-peta');
    downloadImage(finalURL, filename);

    showToast('Gambar berhasil di-download!', 'success');
  } catch (err) {
    console.error('[handleExportMap] Error:', err);
    showToast('Gagal membuat gambar. Coba lagi.', 'error');
  } finally {
    // Restore visibility
    hiddenEls.forEach(({ el, original }) => {
      el.style.visibility = original;
    });

    if (btnExport) {
      btnExport.disabled = false;
      btnExport.classList.remove('opacity-50');
      btnExport.innerHTML = originalHTML;
    }
  }
}

function generateFilename(prefix) {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${prefix}-${yyyy}${mm}${dd}-${hh}${min}.png`;
}

function downloadImage(dataURL, filename) {
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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

  const btnRestart = document.getElementById('btn-restart');
if (btnRestart) {
  btnRestart.onclick = handleRestartApp;
}

const btnResetMap = document.getElementById('btn-reset-map');
if (btnResetMap) {
  btnResetMap.onclick = () => {
    handleResetMap();
    // Reset dropdown & panel
    const selectAsal = document.getElementById('select-asal');
    const selectTujuan = document.getElementById('select-tujuan');
    if (selectAsal) selectAsal.value = '';
    if (selectTujuan) selectTujuan.value = '';
    resetBuildingInfoPanel();
  };
}

const btnExport = document.getElementById('btn-export-map');
if (btnExport) {
  btnExport.onclick = handleExportMap;
}

  const btnTukar = document.getElementById('btn-tukar');
  if (btnTukar) {
    btnTukar.onclick = handleTukarRute;
  }

  const selectAsal = document.getElementById('select-asal');
  const selectTujuan = document.getElementById('select-tujuan');
  if (selectAsal) {
  selectAsal.addEventListener('change', () => {
  const asalId = DROPDOWN_TO_NODE_ID[selectAsal.value] || null;
  const tujuanId = DROPDOWN_TO_NODE_ID[selectTujuan?.value] || null;

  updateSelectionHighlight(asalId, tujuanId);

    console.log(`🔄 [select-asal change] asal=${asalId}, tujuan=${tujuanId}`);
    updateSelectionHighlight(asalId, tujuanId);

    const focusId = tujuanId || asalId;
    if (focusId && graphData.nodes[focusId]) {
      updateBuildingInfoPanel(
        graphData.nodes[focusId],
        focusId,
        setGedungAsal,
        setGedungTujuan
      );
    }
  });
}

// ===== Search ruangan global =====
const searchInput = document.getElementById('search-ruangan-global');
const clearSearchBtn = document.getElementById('btn-clear-search');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounceTimer);
    const val = e.target.value;
    searchDebounceTimer = setTimeout(() => {
      performGlobalSearch(val);
    }, 250);
  });

  // Reposisi dropdown saat resize/scroll
  window.addEventListener('resize', positionSearchDropdown);
  let scrollRAF = null;
window.addEventListener('scroll', () => {
  if (scrollRAF) return;
  scrollRAF = requestAnimationFrame(() => {
    const resultsEl = document.getElementById('search-results');
    if (resultsEl && !resultsEl.classList.contains('hidden')) {
      positionSearchDropdown();
    }
    scrollRAF = null;
  });
}, true);

  // Klik di luar → tutup hasil
  document.addEventListener('click', (e) => {
    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;
    // Kalau klik di luar dropdown & di luar input
    if (!resultsEl.contains(e.target) && e.target !== searchInput) {
      resultsEl.classList.add('hidden');
    }
  });

  // Esc untuk clear
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchResults();
      searchInput.blur();
    }
  });
}

if (clearSearchBtn) {
  clearSearchBtn.onclick = () => {
    closeSearchResults();
    if (searchInput) searchInput.focus();
  };
}

if (selectTujuan) {
  selectTujuan.addEventListener('change', () => {
    const asalVal = selectAsal?.value;
    const asalId = DROPDOWN_TO_NODE_ID[asalVal] || null;
    
    const tujuanVal = selectTujuan.value;
    const tujuanId = DROPDOWN_TO_NODE_ID[tujuanVal] || null;

    console.log(`🔄 [select-tujuan change] asal=${asalId}, tujuan=${tujuanId}`);
    updateSelectionHighlight(asalId, tujuanId);

    // Selalu update panel info dengan gedung TUJUAN (yang baru dipilih)
    if (tujuanId && graphData.nodes[tujuanId]) {
      updateBuildingInfoPanel(graphData.nodes[tujuanId], tujuanId, setGedungAsal, setGedungTujuan);
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