const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    //!!START
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    //!!END
  }

  hash(key) {
    //!!START
    // First 8 characters of sha256 hash
    const hashHexString = sha256(key).slice(0, 8);

    // Convert to int
    return parseInt(`0x${hashHexString}`);
    //!!END
  }

  hashMod(key) {
    //!!START
    // Get index after hashing
    return this.hash(key) % this.capacity;
    //!!END
  }

  insertNoCollisions(key, value) {
    //!!START
    // Find the bucket index
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error('hash collision or same key/value pair already exists!');
    }
    //!!END
  }

  insertWithHashCollisions(key, value) {
    //!!START
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    // equivalent to add to head for a linked list
    if (!this.data[index]) {
      this.data[index] = newPair
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }

    this.count++;
    //!!END
  }

  insert(key, value) {
    //!!START
    const index = this.hashMod(key);

    let currentPair = this.data[index];

    // iteration to check if same key already exists
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      // if truthy, the same key exists so update value
      currentPair.value = value;
    } else {
      // equivalent to add to head for a linked list
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }

      this.count++;
    }
    //!!END
  }

}


module.exports = HashTable;
