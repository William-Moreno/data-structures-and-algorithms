'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex = null, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes() {
    let tempArray = [];
    let tempSize = this.size();

    if(!tempSize) {
      return null;
    }

    const nodesInGraph = this.adjacencyList.keys();
    for(let i = 0; i < tempSize ; i++) {
      let temp = (nodesInGraph.next().value.value);
      tempArray.push(temp);
    }
    return tempArray;

  }

  getEdges() {
    let tempArray = [];
    let tempSize = this.size();

    if(!tempSize) {
      return null;
    }

    const nodesInGraph = this.adjacencyList.keys();
    for(let i = 0; i < tempSize ; i++) {
      let temp = (nodesInGraph.next().value.value);
      tempArray.push(temp);
    }
    return tempArray;

  }


  size() {
    return this.adjacencyList.size;
  }


  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error(`No neighbors found for ${vertex}`);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {
    if(!this.adjacencyList.has(vertex) || !this.size()) {
      return null;
    }

    const queue = [];
    const visited = new Set();
    const valueArray = [];

    queue.unshift(vertex);
    visited.add(vertex);
    valueArray.push(vertex.value);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) {
          continue;
        } else { 
          visited.add(neighborVertex);
          valueArray.push(neighborVertex.value);
          queue.unshift(neighborVertex);
        }
      }
    }

    return valueArray;
  }
}


module.exports = {
  Graph: Graph,
  Edge: Edge,
  Vertex: Vertex,
};
