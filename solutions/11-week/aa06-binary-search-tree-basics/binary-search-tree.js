// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {

    if (!currentNode) return this.root = new TreeNode(val);

    //! val is less than current Node go left
    if (currentNode.val > val) {
      if(currentNode.left) {
        this.insert(val, currentNode.left);
      }
      else {
        currentNode.left = new TreeNode(val);
      }
    }

    else if(currentNode.val < val){
      if (currentNode.right) {
        this.insert(val, currentNode.right);
      }
      else {
        currentNode.right = new TreeNode(val);
      }
    }

  }

  search(val, root = this.root) {
    if (!root) return false;

    if (root.val === val) return true;

    //! root val greater than val, go left
    if (root.val > val) {
        return this.search(val, root.left)
    }
    else if (root.val < val) {
        return this.search(val, root.right);
    }

    //* iterative solution

      // let currentNode = this.root;

      // while(currentNode){
      //   if(val < currentNode.val){
      //     currentNode = currentNode.left;
      //   }
      //   else if(val > currentNode.val){
      //     currentNode = currentNode.right;
      //   }
      //   else{
      //     return true;
      //   }
      // }
      // return false;

    //* end
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  //! use a queue to breadth first
  breadthFirstTraversal() {
    let queue = [this.root];

    while (queue.length > 0) {
      let dequed = queue.shift();

      console.log(dequed.val);

      if (dequed.left) queue.push(dequed.left);
      if (dequed.right) queue.push(dequed.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    //! use a stack to depth first
    let stack = [this.root];

    while (stack.length > 0) {
      let popped = stack.pop();

      console.log(popped.val);

      if (popped.left) stack.push(popped.left);
      if (popped.right) stack.push(popped.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
