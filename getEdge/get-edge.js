'use strict';

const graph = require('../graph/graph.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const Edge = graph.Edge;




const getEdges = (graph, array) => {
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

  console.log(tripPossible, `$${tripTotaler}`);

};

// getNeighbors(vertex) {
//   if (!this.adjacencyList.has(vertex)) {
//     throw new Error(`No neighbors found for ${vertex.value}`);
//   }

//   return [...this.adjacencyList.get(vertex)];
// }

// while (queue.length) {

//     const currentVertex = queue.pop();
//     const neighbors = this.getNeighbors(currentVertex);

//     for (let neighbor of neighbors) {

//       const neighborVertex = neighbor.vertex;

//       if (visited.has(neighborVertex)) {
//         continue;
//       } else { 
//         visited.add(neighborVertex);
//         valueArray.push({ neighbor: neighborVertex.value, weight: neighbor.weight });
//         queue.unshift(neighborVertex);
//       }
//     }
//   }

const cityMap = new Graph();

const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const metroville = new Vertex('Metroville');
const monstropolis = new Vertex('Monstropolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');

cityMap.addNode(pandora);
cityMap.addNode(arendelle);
cityMap.addNode(metroville);
cityMap.addNode(monstropolis);
cityMap.addNode(narnia);
cityMap.addNode(naboo);

cityMap.addEdge(pandora, arendelle, 150);
cityMap.addEdge(arendelle, pandora, 150);
cityMap.addEdge(pandora, metroville, 82);
cityMap.addEdge(metroville, pandora, 82);
cityMap.addEdge(arendelle, metroville, 99);
cityMap.addEdge(metroville, arendelle, 99);
cityMap.addEdge(arendelle, monstropolis, 42);
cityMap.addEdge(monstropolis, arendelle, 42);
cityMap.addEdge(metroville, monstropolis, 105);
cityMap.addEdge(monstropolis, metroville, 105);
cityMap.addEdge(metroville, naboo, 26);
cityMap.addEdge(naboo, metroville, 26);
cityMap.addEdge(metroville, narnia, 37);
cityMap.addEdge(narnia, metroville, 37);
cityMap.addEdge(monstropolis, naboo, 73);
cityMap.addEdge(naboo, monstropolis, 73);
cityMap.addEdge(naboo, narnia, 250);
cityMap.addEdge(narnia, naboo, 250);

getEdges(cityMap, [arendelle, monstropolis, naboo]);
getEdges(cityMap, [metroville, pandora]);
getEdges(cityMap, [naboo, pandora]);
getEdges(cityMap, [narnia, arendelle, naboo]);


