'use strict';

const graph = require('../graph/graph.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const Edge = graph.Edge;


const depthFirst = (graph, startingVertex) => {
  if(!graph.size()) {
    return null;
  }

  const visitedNodes = [];
  const returnArray = [];

  const traverse = (current, visited) => {
    visited.push(current.vertex);
    if(!returnArray.includes(current.value)){
      returnArray.push(current.value);
    }

    const neighbors = graph.getNeighbors(current);

    for (let neighbor of neighbors) {
      if (!visited.includes(neighbor.vertex)) {
        traverse(neighbor.vertex, visited);
      }
    }
  };

  traverse(startingVertex, visitedNodes);

  return returnArray;

};


module.exports = {
  depthFirst: depthFirst,
};