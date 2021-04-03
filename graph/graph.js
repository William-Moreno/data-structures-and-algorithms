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
    if(!this.size()) {
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
          valueArray.push({ neighbor: neighborVertex.value, weight: neighbor.weight });
          queue.unshift(neighborVertex);
        }
      }
    }

    return valueArray;
  }

  depthFirst(vertex) {
    if(!this.size()) {
      return null;
    }

    const visitedVertices = new Set();

    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

      visited.add(current);

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };

    traverse(vertex, visitedVertices);
    return visitedVertices;
  }
}


let test = new Graph();

let one = new Vertex('one');
let two = new Vertex('two');
let three = new Vertex('three');
let four = new Vertex('four');
let five = new Vertex('five');
let six = new Vertex('six');

test.addNode(one);
test.addNode(two);
test.addNode(three);
test.addNode(four);
test.addNode(five);
test.addNode(six);

test.addEdge(one, three);
test.addEdge(two, four);
test.addEdge(one, four);
test.addEdge(four, two);
test.addEdge(four, five);
test.addEdge(two, six);

console.log(test.breadthFirst(two));
// console.log(test.depthFirst(one));
// console.log(test.getNeighbors(one));

console.log(test.getEdges());
// console.log(test.size());

module.exports = {
  Graph: Graph,
  Edge: Edge,
  Vertex: Vertex,
};