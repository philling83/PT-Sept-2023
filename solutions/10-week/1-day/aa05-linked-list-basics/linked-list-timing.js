const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let linkedList = new LinkedList();
let doubleList = new DoublyLinkedList();
const n = 1000;


//! Timing for single link list addToHead
console.time('LL:addToHead');

for (let i = 0; i < n; i++){
    linkedList.addToHead(i);
}

console.timeEnd('LL:addToHead')


//! Timing for single link list addToTail
linkedList = new LinkedList();

console.time('LL:addToTail');
for (let i = 0; i < n; i++){
    linkedList.addToTail(i);
}

console.timeEnd('LL:addToTail');


//! Timing for double link list addToHead
console.time('DLL:addToHead');
for (let i = 0; i < n; i++){
    doubleList.addToHead(i)
}
console.timeEnd('DLL:addToHead');

//! Timing for double link list addToTail
console.time('DLL:addToTail');
for (let i = 0; i < n; i++) {
    doubleList.addToTail(i);
}
console.timeEnd('DLL:addToTail');
