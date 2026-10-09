// src/js/graph.js
import { graphNodes, graphData } from './data.js';

// Konversi piksel SVG ke meter di dunia nyata (1 px = 0.5 meter)
const PIXEL_TO_METER_SCALE = 0.5;

import { graphNodes, graphData } from './data.js';

// Konversi piksel SVG ke meter di dunia nyata (1 px = 0.5 meter)
const PIXEL_TO_METER_SCALE = 0.5;

// Helper: Menghitung Jarak Euclidean sebagai bobot jalur (dalam METER)
function getDistance(nodeA, nodeB) {
  if (!nodeA || !nodeB) return 5;
  const dx = nodeA.x - nodeB.x;
  const dy = nodeA.y - nodeB.y;
  const distPixels = Math.sqrt(dx * dx + dy * dy);
  const distMeters = Math.round(distPixels * PIXEL_TO_METER_SCALE);
  
  return distMeters === 0 ? 5 : distMeters;
}

// 1. Gabungkan semua node untuk kemudahan lookup koordinat
  
  return distMeters === 0 ? 5 : distMeters;
}

const allNodes = {
  ...graphNodes.gedung,
  ...graphNodes.waypoints
};

// Raw Connections (Tanpa Edge A yang nyelip)
const rawConnections = {
  // --- Gedung Bersama (12) & Koridor Sayap ---
// Raw Connections (Tanpa Edge A yang nyelip)
const rawConnections = {
  'pintu-gedung-12-utara': ['kor-01', 'GEDUNG_12'],
  'pintu-gedung-12-selatan': ['kor-05', 'GEDUNG_12'],
  'pintu-gedung-12-timur': ['kor-04', 'GEDUNG_12'],
  'pintu-gedung-12-selatan-barat': ['kor-18'],
  'GEDUNG_12': ['pintu-gedung-12-utara', 'pintu-gedung-12-selatan', 'pintu-gedung-12-timur'],

  'kor-01': ['kor-02', 'kor-03', 'pintu-gedung-12-utara'],
  'kor-02': ['kor-01'],
  'kor-03': ['kor-01', 'kor-04', 'kor-05'],
  'kor-04': ['kor-03', 'pintu-gedung-12-timur'],
  'kor-05': ['kor-03', 'kor-06', 'kor-18', 'pintu-gedung-12-selatan'],
  'kor-06': ['kor-05'],
  'kor-18': ['kor-05', 'pintu-gedung-12-selatan-barat'],

  'pintu-gedung-lab-biologi-barat': ['kor-08', 'GEDUNG_LAB_BIOLOGI_BARAT'],
  'GEDUNG_LAB_BIOLOGI_BARAT': ['pintu-gedung-lab-biologi-barat'],

  'pintu-gedung-lab-biologi-timur': ['kor-17', 'GEDUNG_LAB_BIOLOGI_TIMUR'],
  'GEDUNG_LAB_BIOLOGI_TIMUR': ['pintu-gedung-lab-biologi-timur'],

  'pintu-gedung-09': ['kor-07', 'GEDUNG_09'],
  'pintu-gedung-09-barat': ['kor-19', 'GEDUNG_09'],
  'GEDUNG_09': ['pintu-gedung-09', 'pintu-gedung-09-barat'],

  'pintu-gedung-lab-kimia': ['kor-04', 'kor-09', 'GEDUNG_LAB_KIMIA'],
  // EDGE A DIPERBAIKI: Hapus 'kor-04' dari pintu lab kimia
  'pintu-gedung-lab-kimia': ['kor-09', 'GEDUNG_LAB_KIMIA'],
  'GEDUNG_LAB_KIMIA': ['pintu-gedung-lab-kimia'],

  'kor-08': ['pintu-gedung-lab-biologi-barat', 'kor-17'],
  'kor-17': ['kor-08', 'pintu-gedung-lab-biologi-timur', 'kor-19'],
  'kor-19': ['kor-17', 'pintu-gedung-09-barat', 'kor-07'],
  'kor-07': ['kor-19', 'pintu-gedung-09'],

  // --- Gedung Syawal Gultom (01) & Koridor Lingkar ---
  'kor-09': ['kor-10', 'kor-16', 'pintu-gedung-syawal-gultom-barat'],
  'kor-09': ['kor-10', 'kor-16', 'pintu-gedung-syawal-gultom-barat', 'pintu-gedung-lab-kimia'],
  'kor-10': ['kor-09', 'kor-11', 'pintu-gedung-04'],
  'kor-11': ['kor-10', 'kor-12', 'pintu-gedung-lab-fisika'],
  'kor-12': ['kor-11', 'kor-13', 'pintu-gedung-05'],
  'kor-13': ['kor-12', 'kor-14', 'pintu-gedung-syawal-gultom-timur'],
  'kor-14': ['kor-13', 'kor-15', 'pintu-gedung-02'],
  'kor-15': ['kor-14', 'kor-16', 'pintu-gedung-syawal-gultom-selatan', 'pintu-gedung-06'],
  'kor-16': ['kor-15', 'kor-09', 'pintu-gedung-kimia'],

  'pintu-gedung-syawal-gultom-barat': ['kor-09', 'GEDUNG_SYAWAL_GULTOM'],
  'pintu-gedung-syawal-gultom-timur': ['kor-13', 'GEDUNG_SYAWAL_GULTOM'],
  'pintu-gedung-syawal-gultom-selatan': ['kor-15', 'GEDUNG_SYAWAL_GULTOM'],
  'GEDUNG_SYAWAL_GULTOM': ['pintu-gedung-syawal-gultom-barat', 'pintu-gedung-syawal-gultom-timur', 'pintu-gedung-syawal-gultom-selatan'],

  'pintu-gedung-04': ['kor-10', 'GEDUNG_04'],
  'GEDUNG_04': ['pintu-gedung-04'],

  'pintu-gedung-05': ['kor-12', 'GEDUNG_05'],
  'GEDUNG_05': ['pintu-gedung-05'],

  'pintu-gedung-kimia': ['kor-16', 'GEDUNG_KIMIA'],
  'GEDUNG_KIMIA': ['pintu-gedung-kimia'],

  'pintu-gedung-02': ['kor-14', 'GEDUNG_02'],
  'GEDUNG_02': ['pintu-gedung-02'],

  'pintu-gedung-06': ['kor-15', 'GEDUNG_06'],
  'GEDUNG_06': ['pintu-gedung-06'],

  'pintu-gedung-lab-fisika': ['kor-11', 'GEDUNG_LAB_FISIKA'],
  'GEDUNG_LAB_FISIKA': ['pintu-gedung-lab-fisika']
};

// Buat array edges terstruktur untuk di-export
export const generatedEdges = [];
const processedPairs = new Set();

Object.keys(rawConnections).forEach(from => {
  rawConnections[from].forEach(to => {
    const pairKey = [from, to].sort().join('--');
    if (!processedPairs.has(pairKey)) {
      processedPairs.add(pairKey);
      const nodeA = allNodes[from];
      const nodeB = allNodes[to];
      if (nodeA && nodeB) {
        generatedEdges.push({
          from,
          to,
          weight: getDistance(nodeA, nodeB)
        });
      }
    }
  });
});

export const graphAdjacency = {};
Object.keys(rawConnections).forEach(fromNodeId => {
  graphAdjacency[fromNodeId] = [];
  rawConnections[fromNodeId].forEach(toNodeId => {
    const nodeA = allNodes[fromNodeId];
    const nodeB = allNodes[toNodeId];
    if (nodeA && nodeB) {
      graphAdjacency[fromNodeId].push({
        node: toNodeId,
        weight: getDistance(nodeA, nodeB)
      });
    }
  });
});

// 4. Ekspor Class Graph
// Buat array edges terstruktur untuk di-export
export const generatedEdges = [];
const processedPairs = new Set();

Object.keys(rawConnections).forEach(from => {
  rawConnections[from].forEach(to => {
    const pairKey = [from, to].sort().join('--');
    if (!processedPairs.has(pairKey)) {
      processedPairs.add(pairKey);
      const nodeA = allNodes[from];
      const nodeB = allNodes[to];
      if (nodeA && nodeB) {
        generatedEdges.push({
          from,
          to,
          weight: getDistance(nodeA, nodeB)
        });
      }
    }
  });
});

export const graphAdjacency = {};
Object.keys(rawConnections).forEach(fromNodeId => {
  graphAdjacency[fromNodeId] = [];
  rawConnections[fromNodeId].forEach(toNodeId => {
    const nodeA = allNodes[fromNodeId];
    const nodeB = allNodes[toNodeId];
    if (nodeA && nodeB) {
      graphAdjacency[fromNodeId].push({
        node: toNodeId,
        weight: getDistance(nodeA, nodeB)
      });
    }
  });
});

export class Graph {
  constructor() {
    this.nodes = {};
    this.adjacencyList = {};
    this.initDefaultEdges();
  }

  addNode(nodeId, details = {}) {
    this.nodes[nodeId] = details;
    if (!this.adjacencyList[nodeId]) {
      this.adjacencyList[nodeId] = [];
    }
  }

  addEdge(from, to, weight = null) {
    if (!this.nodes[from]) this.addNode(from, allNodes[from] || {});
    if (!this.nodes[to]) this.addNode(to, allNodes[to] || {});

    const calcWeight = weight !== null ? weight : getDistance(this.nodes[from], this.nodes[to]);

    if (!this.adjacencyList[from].some(e => e.node === to)) {
      this.adjacencyList[from].push({ node: to, weight: calcWeight });
    }
    if (!this.adjacencyList[to].some(e => e.node === from)) {
      this.adjacencyList[to].push({ node: from, weight: calcWeight });
    }
  }

  getNodeDetails(nodeId) {
    return this.nodes[nodeId] || allNodes[nodeId] || null;
  }

  getNeighbors(nodeId) {
    return this.adjacencyList[nodeId] || [];
  }

  initDefaultEdges() {
    Object.keys(rawConnections).forEach(from => {
      rawConnections[from].forEach(to => {
        const nodeA = allNodes[from];
        const nodeB = allNodes[to];
        if (nodeA && nodeB) {
          this.addEdge(from, to, getDistance(nodeA, nodeB));
        }
      });
    const edgesToLoad = graphData.edges && graphData.edges.length > 0 ? graphData.edges : generatedEdges;
    edgesToLoad.forEach(edge => {
      this.addEdge(edge.from, edge.to, edge.weight);
    });
  }
}