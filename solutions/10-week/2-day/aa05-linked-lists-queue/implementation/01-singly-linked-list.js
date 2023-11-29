// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }
        else {
            const oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++

        return {head: this.head, length: this.length};

        // Write your hypothesis on the time complexity of this method here
        //! time complexity O(1), have access to the head pointer value, so no need to iterate.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++
        return { head: this.head, length: this.length };

        // Write your hypothesis on the time complexity of this method here
        //! O(n) need to iterate through the whole linked list to get find the tail.
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;

        this.length--
        const removedHead = this.head;
        if (!this.head.next) {
            this.head = null;

        }
        else {
            this.head = this.head.next;

        }
        return removedHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;
        this.length--;
        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        }
        else {
            //! initialize curr with head
            let curr = this.head;
            //! initialize prev
            let prev;
            while (curr.next) {
                //! save the curr node to prev
                prev = curr;
                //! update curr to the next node
                curr = curr.next;
            }
            //! when the loop finishes, we should have the last 2 nodes in the list.
            prev.next = null;
            return curr;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.head) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        if (!this.head) return;

        let curr = this.head;
       
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
