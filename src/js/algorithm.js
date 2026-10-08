/**
 * =======================================================================
 * File: src/js/algorithm.js
 * PIC : Algorithm Integration (Dijkstra)
 * Proyek: Navigasi Shortest Path FMIPA UNIMED
 * =======================================================================
 * Implementasi Algoritma Dijkstra untuk mencari rute terpendek antar gedung
 * dan persimpangan di FMIPA UNIMED berdasarkan data.js dan graph.js.
 * =======================================================================
 */

import { graphData } from './data.js';
import { Graph } from './graph.js';

/**
 * Membangun objek Graf FMIPA dari data.js
 * @returns {Graph}
 */
export function buildFMIPAGraph() {
  const g = new Graph();
  const nodes = graphData.nodes;

  Object.keys(nodes).forEach((nodeId) => {
    const n = nodes[nodeId];
    g.addNode(nodeId, {
      name: n.name,
      category: n.category,
      x: n.x,
      y: n.y,
      svgId: n.svgId,
      isBuilding: !!n.isBuilding,
    });
  });

  const edges = graphData.edges || [];
  edges.forEach((edge) => {
    const from = edge.from || edge.source;
    const to = edge.to || edge.target;
    if (from && to) {
      g.addEdge(from, to, edge.weight);
    }
  });

  return g;
}

/**
 * Algoritma Dijkstra untuk mencari rute terpendek antar dua simpul
 * @param {Graph} graph
 * @param {string} startNodeId
 * @param {string} targetNodeId
 * @returns {{ distance: number, path: string[], found: boolean }}
 */
export function dijkstra(graph, startNodeId, targetNodeId) {
  if (startNodeId === targetNodeId) {
    return { distance: 0, path: [startNodeId], found: true };
  }

  const distances = {};
  const previous = {};
  const unvisited = new Set();
  const allNodes = Object.keys(graph.nodes);

  allNodes.forEach((nodeId) => {
    distances[nodeId] = Infinity;
    previous[nodeId] = null;
    unvisited.add(nodeId);
  });

  if (!graph.nodes[startNodeId] || !graph.nodes[targetNodeId]) {
    console.warn(`[algorithm.js] Simpul '${startNodeId}' atau '${targetNodeId}' tidak ditemukan dalam graf.`);
    return { distance: Infinity, path: [], found: false };
  }

  distances[startNodeId] = 0;

  while (unvisited.size > 0) {
    let closestNode = null;
    let shortestDistance = Infinity;

    unvisited.forEach((nodeId) => {
      if (distances[nodeId] < shortestDistance) {
        shortestDistance = distances[nodeId];
        closestNode = nodeId;
      }
    });

    if (!closestNode || shortestDistance === Infinity) {
      break;
    }

    if (closestNode === targetNodeId) {
      break;
    }

    unvisited.delete(closestNode);

    const neighbors = graph.getNeighbors(closestNode);
    neighbors.forEach((neighbor) => {
      if (unvisited.has(neighbor.node)) {
        const alt = distances[closestNode] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = closestNode;
        }
      }
    });
  }

  if (distances[targetNodeId] === Infinity) {
    return { distance: Infinity, path: [], found: false };
  }

  const path = [];
  let curr = targetNodeId;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  return {
    distance: Math.round(distances[targetNodeId]),
    path: path,
    found: true,
  };
}

/**
 * Fungsi pencarian rute terpendek yang siap pakai
 * @param {string} startNodeId
 * @param {string} targetNodeId
 * @returns {{ distance: number, path: string[], steps: Array, found: boolean }}
 */
export function findShortestPath(startNodeId, targetNodeId) {
  const graph = buildFMIPAGraph();
  const result = dijkstra(graph, startNodeId, targetNodeId);

  if (!result.found) {
    return { ...result, steps: [] };
  }

  const steps = result.path.map((nodeId) => {
    const meta = graph.getNodeMetadata(nodeId) || {};
    return {
      id: nodeId,
      name: meta.name || nodeId,
      x: meta.x || 0,
      y: meta.y || 0,
      isBuilding: !!meta.isBuilding,
      category: meta.category || '',
    };
  });

  return {
    distance: result.distance,
    path: result.path,
    steps: steps,
    found: true,
  };
}

/**
 * Menghitung estimasi waktu jalan santai (rata-rata 75 m / menit)
 * @param {number} distanceMeters
 * @returns {string}
 */
export function calculateWalkingTime(distanceMeters) {
  const SPEED_M_PER_MIN = 75;
  const minutes = distanceMeters / SPEED_M_PER_MIN;

  if (minutes < 1) {
    const seconds = Math.round(minutes * 60);
    return `± ${seconds} detik jalan kaki`;
  }
  return `± ${minutes.toFixed(1)} menit jalan kaki`;
}