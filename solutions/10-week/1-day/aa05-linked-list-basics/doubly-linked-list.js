class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      const oldHead = this.head;

      newNode.next = oldHead;
      oldHead.prev = newNode;

      this.head = newNode;
    }

    this.length++;

  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      const oldTail = this.tail;

      oldTail.next = newNode;
      newNode.prev = oldTail;

      this.tail = newNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
