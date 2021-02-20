'use strict';

const master = require('../linked-list.js');
const NodeGen = master.nodeGen;
const ListGen = master.listGen;

describe('Testing Linked List functionality', () => {
  it('Should instantiate an empty linked list', () => {
    const testList = new ListGen();

    expect(testList.head).toBeFalsy();
  });

  it('Should properly insert a node at the head of the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(1);
    testList.head.next = new NodeGen(2);
    testList.insert(3);

    expect(testList.head.value).toEqual(3);
  });

  it('The head property should point to the first node in the linked list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('1st Node');
    testList.head.next = new NodeGen('2nd Node');
    testList.head.next.next = new NodeGen('3rd Node');

    expect(testList.head.value).toEqual('1st Node');
  });

  it('Should properly insert multiple nodes into the linked list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('A');
    testList.head.next = new NodeGen('B');
    testList.head.next.next = new NodeGen('C');
    testList.insert('X');
    testList.insert('Y');
    testList.insert('Z');
    const listString = testList.toString();

    expect(listString).toEqual('{Z} -> {Y} -> {X} -> {A} -> {B} -> {C} -> NULL');
  });

  it('Should return TRUE when finding a value that exists within the linked list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(5);
    testList.head.next = new NodeGen(10);
    testList.head.next.next = new NodeGen(15);
    const valueExists = testList.includes(10);

    expect(valueExists).toEqual(true);
  });
});

