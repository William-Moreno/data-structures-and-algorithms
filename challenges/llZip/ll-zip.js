'use strict';

const master = require('../../Data-Structures/linkedList/linked-list.js');
const NodeGen = master.nodeGen;
const ListGen = master.listGen;



const ll1 = new ListGen();
ll1.head = new NodeGen(5);
ll1.head.next = new NodeGen(10);
ll1.head.next.next = new NodeGen(15);
ll1.head.next.next.next = new NodeGen(20);
ll1.head.next.next.next.next = new NodeGen(25);

const ll2 = new ListGen();
ll2.head = new NodeGen('A');
ll2.head.next = new NodeGen('B');
ll2.head.next.next = new NodeGen('C');
// ll2.head.next.next.next = new NodeGen('B');
// ll2.head.next.next.next.next = new NodeGen('C');



function zipLists(list1, list2) {
  let ll3 = new ListGen();
  let curr1 = list1.head;
  let curr2 = list2.head;

  while(curr1 && curr2) {

    if(curr1) {
      let tempValue = curr1.value;
      ll3.append(tempValue);
    } 

    if(curr2) {
      let tempValue = curr2.value;
      ll3.append(tempValue);
    } 

    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  while(curr1) {
    let tempValue = curr1.value;
    ll3.append(tempValue);
    curr1 = curr1.next;
  }

  while(curr2) {
    let tempValue = curr2.value;
    ll3.append(tempValue);
    curr2= curr2.next;
  }
  return ll3;

}

const zipped = zipLists(ll1, ll2);

console.log(zipped.toString());

