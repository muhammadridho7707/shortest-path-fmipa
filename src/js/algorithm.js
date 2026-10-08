/**
 * =======================================================================
 * File: src/js/algorithm.js
 * PIC : Algorithm & Navigation Engine (Tengku Fahreza)
 * Proyek: Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * Mengimplementasikan Algoritma Dijkstra untuk mencari rute berbobot
 * terpendek antar gedung berdasarkan graf jalan setapak src/js/data.js
 * =======================================================================
 */

import { Graph } from './graph.js';
import { graphData } from './data.js';

/**
 * Membangun struktur Graf FMIPA lengkap dari data.js
 */
export function buildFMIPAGraph() {
  const graph = new Graph();

  // 1. Daftarkan semua node (gedung dan titik persimpangan)
  Object.keys(graphData.nodes).forEach((nodeId) => {
    graph.addNode(nodeId, graphData.nodes[nodeId]);
  });

  // 2. Hubungkan semua edge jalan setapak
  graphData.edges.forEach((edge) => {
    graph.addEdge(edge.from, edge.to, edge.weight);
  });

  return graph;
}

/**
 * Algoritma Dijkstra untuk mencari rute terpendek
 * @param {Graph} graph 
 * @param {string} startNodeId 
 * @param {string} targetNodeId 
 * @returns {Object} { found, path, distance, steps }
 */
export function dijkstra(graph, startNodeId, targetNodeId) {
  if (!startNodeId || !targetNodeId) {
    return { found: false, path: [], distance: 0, steps: [] };
  }

  if (startNodeId === targetNodeId) {
    const details = graph.getNodeDetails(startNodeId) || {};
    return {
      found: true,
      path: [startNodeId],
      distance: 0,
      steps: [{ id: startNodeId, ...details }],
    };
  }

  const distances = {};
  const previous = {};
  const allNodes = Object.keys(graph.adjacencyList);
  const unvisited = new Set(allNodes);

  allNodes.forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[startNodeId] = 0;

  while (unvisited.size > 0) {
    let currentNode = null;
    let minDistance = Infinity;

    for (const node of unvisited) {
      if (distances[node] < minDistance) {
        minDistance = distances[node];
        currentNode = node;
      }
    }

    if (!currentNode || minDistance === Infinity) break;
    if (currentNode === targetNodeId) break;

    unvisited.delete(currentNode);

    const neighbors = graph.getNeighbors(currentNode);
    for (const neighbor of neighbors) {
      if (!unvisited.has(neighbor.node)) continue;

      const alt = distances[currentNode] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        previous[neighbor.node] = currentNode;
      }
    }
  }

  if (distances[targetNodeId] === Infinity) {
    return { found: false, path: [], distance: 0, steps: [] };
  }

  // Rekonstruksi rute
  const path = [];
  let curr = targetNodeId;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  const steps = path.map((nodeId) => {
    const details = graph.getNodeDetails(nodeId) || {};
    return {
      id: nodeId,
      ...details,
    };
  });

  return {
    found: true,
    path,
    distance: Math.round(distances[targetNodeId] * 10) / 10,
    steps,
  };
}

/**
 * Helper langsung untuk mencari rute antar ID gedung
 */
export function findShortestPath(startNodeId, targetNodeId) {
  const g = buildFMIPAGraph();
  return dijkstra(g, startNodeId, targetNodeId);
}

/**
 * Estimasi waktu tempuh jalan kaki (kecepatan santai ~1.2 m/s atau ~72 m/menit)
 */
export function calculateWalkingTime(distanceMeters) {
  if (!distanceMeters || distanceMeters <= 0) return '0 Menit';
  const minutes = Math.ceil(distanceMeters / 72);
  if (minutes < 1) return '< 1 Menit';
  return `~${minutes} Menit`;
}