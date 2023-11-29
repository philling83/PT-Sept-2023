# `S1W10D3`

---

## Warmup Problem

Implement a queue using a linked list instead of an array. Adding and removing elements from the queue should have constant time complexity O(1).

- Node class
  - val property
  - next property
- Queue class
  - head property
  - tail property
  - length property
  - enqueue method
  - dequeue method
  - find method (will traverse the list and return the node containing the search value)
  - size method (will return how many nodes are in the queue)

```js
class Node {
  constructor(val){
    
  };
};

class Queue {
  constructor(){
    
  };

  //addToTail
  enqueue(val){
    
  };

  //removeFromHead
  dequeue(){
    
  };

  find(searchVal){
    
  };

  size(){
    
  };
};
```

---
## Hashing

Hashing is basically just running some input through a formula
and getting back a different, but consistent result.

Hashing is ONE WAY, we don't care about the original data, just
that we get something more 'unique'.

Here's a super simple hashing function

```js
const hashIt = (word) => {
  return word
    .split('')
    .reduce((res, char) =>{
      console.log("res: ", res)
      return Number(char.charCodeAt().toString(2)) + res
    }, 0);
  };

  console.log(hashIt('Alan'))
```

Not great, that's why we have some better hashing algorithms out there.
Better just means similar inputs have vastly different outputs. Many possibilities
that would be hard, near impossible to crack.

- SHA256
- MD5
- A lot more
<br />

![hashing](../../../images/hashing.png)
---