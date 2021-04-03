'use strict';

const graph = require('../graph.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const Edge = graph.Edge;

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
// test.addNode(six);

test.addEdge(one, three);
test.addEdge(two, four);
test.addEdge(one, four);
test.addEdge(four, two);
test.addEdge(four, five);
// test.addEdge(two, six);

let test2 = new Graph();

let test3 = new Graph();

test3.addNode(one);
test3.addEdge(one);

describe('Testing methods of the Graph', () => {
  it('Should successfully add a node to the graph using addNode()', () => {
    test.addNode(six);
    const result = test.getNodes();

    expect(result[result.length - 1]).toEqual('six');
  });

  it('Should successfully add an edge to the graph using addEdge()', () => {
    test.addEdge(two, six);
    const result = test.breadthFirst(two);

    expect(result[2].neighbor).toEqual('six');
  });

  it('Should retrieve a collection of all nodes in the graph using getNodes()', () => {
    const result = test.getNodes();

    expect(result).toEqual(['one', 'two', 'three', 'four', 'five', 'six']);
  });

  it('Should retrieve all appropriate neighbors from the graph using getNeighbors()', () => {
    const result = test.getNeighbors(one);

    expect(result.length).toEqual(2);
  });

  it('Should return neighbors with the weight between nodes included', () => {
    const result = test.breadthFirst(one);

    expect(result[2].weight).toEqual(0);
  });  

  it('Should the size, representing of all nodes in the graph using size()', () => {
    const result = test.size();

    expect(result).toEqual(6);
  });

  it('Should return a graph with only one node and one edge using getNodes()', () => {
    const result = test3.getNodes();

    expect(result).toEqual(['one']);
  });

  it('Should return null with an empty graph using getNodes()', () => {
    const result = test2.getNodes();

    expect(result).toEqual(null);
  });

});