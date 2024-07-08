//Certainly! Binary trees are fundamental data structures where each node has at most two children, typically referred to as the left child and the right child. Here, I'll cover all basic operations of a binary tree with examples in JavaScript.
// Binary Tree Operations
// Insertion: Adding a new node to the tree while maintaining the binary search tree (BST) property.

// Traversal: Visiting all nodes in a specific order:

// In-order: Visit left subtree, then current node, then right subtree.
// Pre-order: Visit current node, then left subtree, then right subtree.
// Post-order: Visit left subtree, then right subtree, then current node.
// Searching: Finding a node with a specific value in the tree.

// Deletion: Removing a node from the tree while maintaining the BST property.

class BTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // insertion operations
  insert(value) {
    const newNode = new BTNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    console.log("Node insert: " + node.value + " New node: " + newNode.value);
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In - order traversal
  inOrderTraversal(node, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Pre - order traversal
  preOrderTraversal(node, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Post - order traversal
  postOrderTraversal(node, result = []) {
    if (node) {
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
      result.push(node.value);
    }
  }
  //Search operation
  search(value) {
    return this.searchNode(this.root, value);
  }

  //   search method
  searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  //   Deletion operation
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Case 1: No children or only one child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // Case 2: Node has two children
      // Find the minimum value node in the right subtree
      node.value = this.minValue(node.right);

      // Delete the inorder successor
      node.right = this.deleteNode(node.right, node.value);
    }

    return node;
  }

  minValue(node) {
    let minValue = node.value;
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }
}

// Example Usage
const binaryTree = new BinaryTree();
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(70);
binaryTree.insert(60);
binaryTree.insert(80);

// console.log(
//   "In-order traversal:",
//   binaryTree.inOrderTraversal(binaryTree.root)
// ); // [20, 30, 40, 50, 60, 70, 80]
// console.log(
//   "Pre-order traversal:",
//   binaryTree.preOrderTraversal(binaryTree.root)
// ); // [50, 30, 20, 40, 70, 60, 80]
// console.log(
//   "Post-order traversal:",
//   binaryTree.postOrderTraversal(binaryTree.root)
// ); // [20, 40, 30, 60, 80, 70, 50]

// console.log("Searching for 30:", binaryTree.search(30)); // true
// console.log("Searching for 100:", binaryTree.search(100)); // false

// binaryTree.delete(30);
// console.log(
//   "In-order traversal after deletion of 30:",
//   binaryTree.inOrderTraversal(binaryTree.root)
// ); // [20, 40, 50, 60, 70, 80]
