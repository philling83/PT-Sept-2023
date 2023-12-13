const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Iter
  let min = rootNode.val;
  let curr = rootNode;

  while (curr.left) {
    curr = curr.left;
    min = curr.val;
  };

  return min;

  // //Recur
  // if (rootNode.left) {
  //   return findMinBST(rootNode.left);
  // };

  // return rootNode.val;
};

function findMaxBST(rootNode) {
  // Iter
  let max = rootNode.val;
  let curr = rootNode;

  while (curr.right) {
    curr = curr.right;
    max = curr.val;
  };

  return max;

  // // Recur
  // if (rootNode.right) {
  //   return findMaxBST(rootNode.right);
  // };

  // return rootNode.val;
};

function findMinBT(rootNode) {
  // Iter
  let min = rootNode.val;
  let queue = [rootNode];

  while (queue.length) {
    let currNode = queue.shift();

    if (currNode.val < min) {
      min = currNode.val;
    };

    if (currNode.left) {
      queue.push(currNode.left);
    };

    if (currNode.right) {
      queue.push(currNode.right);
    };
  };

  return min;

  // // Recur
  // let min = rootNode.val;

  // if (rootNode.left) {
  //   min = Math.min(min, findMinBT(rootNode.left));
  // };

  // if (rootNode.right) {
  //   min = Math.min(min, findMinBT(rootNode.right));
  // };

  // return min;
};

function findMaxBT(rootNode) {
  // Iter
  let max = rootNode.val;
  let queue = [rootNode];

  while (queue.length) {
    let currNode = queue.shift();

    if (currNode.val > max) {
      max = currNode.val;
    };

    if (currNode.left) {
      queue.push(currNode.left);
    };

    if (currNode.right) {
      queue.push(currNode.right);
    };
  };

  return max;

  // // Recur
  // let min = rootNode.val;

  // if (rootNode.left) {
  //   min = Math.max(min, findMaxBT(rootNode.left));
  // };

  // if (rootNode.right) {
  //   min = Math.max(min, findMaxBT(rootNode.right));
  // };

  // return min;
};

function getHeight(rootNode) {
  // Iter
  if (!rootNode) {
    return -1;
  };

  let queue = [rootNode];

  rootNode.level = 0;
  let levels = [];

  while (queue.length > 0) {
    let currNode = queue.shift();
    levels[currNode.level] = currNode;

    if (currNode.left) {
      currNode.left.level = currNode.level + 1;
      queue.push(currNode.left);
    };

    if (currNode.right) {
      currNode.right.level = currNode.level + 1;
      queue.push(currNode.right);
    };
  };

  return levels.length - 1;

  // // Recur
  // if (!rootNode) {
  //   return -1;
  // };

  // if (!rootNode.left && !rootNode.right) {
  //   return 0;
  // };

  // return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
};

function balancedTree(rootNode) {
  let queue = [rootNode];

  while (queue.length) {
    let curr = queue.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) {
        queue.push(curr.left);
      };

      if (curr.right) {
        queue.push(curr.right);
      };
    } else {
      return false;
    };
  };

  return true;
};

function countNodes(rootNode) {
  // Iter
  let count = 1;
  let queue = [rootNode];

  while (queue.length) {
    let currNode = queue.shift();

    if (currNode.left) {
      queue.push(currNode.left);
      count++;
    };

    if (currNode.right) {
      queue.push(currNode.right);
      count++;
    };
  };

  return count;

  // // Recur
  // if (!rootNode) {
  //   return 0;
  // };

  // return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
};

function getParentNode(rootNode, target) {
  if (rootNode.val === target) {
    return null;
  };

  let stack = [rootNode];

  while (stack.length > 0) {
    let current = stack.pop();

    if ((current.left && current.left.val === target) || (current.right && current.right.val === target)) {
      return current;
    };

    if (current.left) {
      stack.push(current.left);
    };

    if (current.right) {
      stack.push(current.right);
    };
  };

  return undefined;
};

function inOrderPredecessor(rootNode, target) {
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (!current && stack.length > 0) {
      current = stack.pop();

      if (current.val === target) {
        if (!predecessor) {
          return null;
        };

        return predecessor.val;
      };

      predecessor = current;
      current = current.right;
    } else {
      break;
    };
  };
};

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) {
    return undefined;
  };

  // Set target based on parent
  let targetNode;
  let isLeftChild = false;

  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error("Algorithm Error: This should never happen");
  };

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) {
      parentNode.left = null;
    } else {
      parentNode.right = null;
    };
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target);

    deleteNodeBST(rootNode, predecessor);

    targetNode.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) {
        parentNode.left = targetNode.left;
      } else {
        parentNode.right = targetNode.left;
      };
    } else {
      if (isLeftChild) {
        parentNode.left = targetNode.right;
      } else {
        parentNode.right = targetNode.right;
      };
    };
  };
};

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
};
