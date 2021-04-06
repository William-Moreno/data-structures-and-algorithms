const graph = require('../../graph/graph.js');
const edges = require('../get-edge.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const Edge = graph.Edge;
const getEdge = edges.getEdge;

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

describe('Testing getEdges function', () => {
  it('Should return true and the total cost for the full trip using getEdges()', () => {
    const result = getEdge(cityMap, [pandora, arendelle, monstropolis]);
    const result2 = getEdge(cityMap, [arendelle, metroville, naboo, narnia]);

    expect(result.possible).toEqual(true);
    expect(result2.cost).toEqual('$375');
  });

  it('Should return false with a cost of $0 if the trip is not possible using getEdges()', () => {
    const result = getEdge(cityMap, [pandora, naboo, narnia]);


    expect(result.possible).toEqual(false);
    expect(result.cost).toEqual('$0');
  });

});