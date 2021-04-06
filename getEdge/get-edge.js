'use strict';

const graph = require('../graph/graph.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const Edge = graph.Edge;




const getEdge = (graph, array) => {
  if(!graph.size()) {
    return null;
  }

  let tripPossible;
  let tripTotaler = 0;

  for(let i = 0 ; i < array.length - 1 ; i++) {
    let neighbors = graph.getNeighbors(array[i]);
    if(!neighbors) {
      tripPossible = false;
      return;
    }

    if(tripPossible !== false) {
      for(let neighbor of neighbors) {
        let neighborName = neighbor.vertex.value;
        let neighborCost = neighbor.weight;

        if(array[i+1].value === neighborName) {
          tripTotaler+= neighborCost;
          tripPossible = true;
          break;
        } else {
          tripPossible = false;
        }
      }
    } else {
      tripTotaler = 0;
      break;
    }
  }

  if(!tripPossible){ tripTotaler = 0; }
  let tripObject = { possible: tripPossible, cost: `$${tripTotaler}`};
  return tripObject;

};

module.exports = {
  getEdge: getEdge,
};