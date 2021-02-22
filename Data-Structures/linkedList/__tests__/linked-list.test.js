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

  it('Should return FALSE when searching for a value that does not exist in the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(5);
    testList.head.next = new NodeGen(10);
    testList.head.next.next = new NodeGen(15);
    const valueExists = testList.includes(20);

    expect(valueExists).toEqual(false);
  });

  it('Should properly return a collection of all the values existing in the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('Four');
    testList.head.next = new NodeGen(5);
    testList.head.next.next = new NodeGen('Six');
    testList.insert(3);
    testList.insert('Two');
    testList.insert(1);
    const listString = testList.toString();

    expect(listString).toEqual('{1} -> {Two} -> {3} -> {Four} -> {5} -> {Six} -> NULL');
  });

  it('Should add a node to the end of the list using append() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.append(4);
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> NULL');
  });

  it('Should add multiple nodes to the end of the list using append() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.append(4);
    testList.append(5);
    testList.append(6);
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  });

  it('Should insert a node before a node with a given value in the list using insertBefore() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertBefore(3, 10);
    const listString = testList.toString();
    const response = testList.insertBefore(100, 7);

    expect(listString).toEqual('{0} -> {1} -> {2} -> {10} -> {3} -> NULL');
    expect(response).toEqual('Exception');    
  });

  it('Should insert a node before the first node of the list using insertBefore() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertBefore(0, 20);
    const listString = testList.toString();

    expect(listString).toEqual('{20} -> {0} -> {1} -> {2} -> {3} -> NULL');
  });

  it('Should insert a node after a node with a given value in the list using insertAfter() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertAfter(1, 'A');
    const listString = testList.toString();
    const response = testList.insertAfter(100, 7);


    expect(listString).toEqual('{0} -> {1} -> {A} -> {2} -> {3} -> NULL');
    expect(response).toEqual('Exception');
  });

  it('Should insert a node after the last node of the list using insertAfter() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertAfter(3, 'B');
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {B} -> NULL');
  });
});

