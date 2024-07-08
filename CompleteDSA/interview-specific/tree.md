Tree Basic Features
Nodes: Trees consist of nodes. Each node stores data and may have a reference to zero or more child nodes.

Root: The topmost node in a tree is called the root. It is the starting point for accessing the tree data.

Edges: The connections between nodes are called edges. They represent relationships between nodes.

Parent and Child Nodes: A node directly connected to another node (closer to the root) is its parent. Conversely, nodes directly connected below a node are its children.

Leaf Nodes: Nodes that do not have any children are called leaf nodes or terminal nodes.

Internal Nodes: Nodes that have at least one child are called internal nodes.

Depth: The depth of a node is the number of edges from the root to the node.

Height: The height of a tree is the maximum depth of any node in that tree.

Subtree: A subtree is a set of nodes and edges comprised of a parent node and all the descendants of that parent.

Binary Tree: A binary tree is a tree structure in which each node has at most two children, referred to as the left child and the right child.





Sure! Let's go through the various types of tree data structures and their JavaScript implementations, from basic to advanced.

1. Basic Tree Implementation
A simple tree structure with basic insert and traversal operations.


class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class Tree {
    constructor(value) {
        this.root = new TreeNode(value);
    }

    traverseDFS(node, callback) {
        callback(node);
        node.children.forEach(child => this.traverseDFS(child, callback));
    }

    traverseBFS(callback) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);
            queue.push(...node.children);
        }
    }
}

// Example Usage
const tree = new Tree(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
tree.root.addChild(child1);
tree.root.addChild(child2);
child1.addChild(new TreeNode(4));
child2.addChild(new TreeNode(5));

tree.traverseDFS(tree.root, node => console.log(node.value)); // DFS: 1 2 4 3 5
tree.traverseBFS(node => console.log(node.value)); // BFS: 1 2 3 4 5
2. Binary Tree
A tree where each node has at most two children.


class BinaryTreeNode {
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

    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    preOrder(node, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    postOrder(node, result = []) {
        if (node) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

// Example Usage
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log("In-Order Traversal:", binaryTree.inOrder(binaryTree.root)); // [3, 5, 7, 10, 15]
console.log("Pre-Order Traversal:", binaryTree.preOrder(binaryTree.root)); // [10, 5, 3, 7, 15]
console.log("Post-Order Traversal:", binaryTree.postOrder(binaryTree.root)); // [3, 7, 5, 15, 10]
3. Binary Search Tree (BST)
A binary tree with the property that the left subtree of a node contains only nodes with values less than the node’s value, and the right subtree only nodes with values greater than the node’s value.


class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.#searchNode(this.root, value);
    }

    #searchNode(node, value) {
        if (!node) {
            return false;
        }
        if (value < node.value) {
            return this.#searchNode(node.left, value);
        } else if (value > node.value) {
            return this.#searchNode(node.right, value);
        } else {
            return true;
        }
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(7);
console.log("In-Order Traversal of BST:", bst.inOrder(bst.root));
console.log("Search for 7:", bst.search(7)); // true
console.log("Search for 15:", bst.search(15)); // false
4. AVL Tree
A self-balancing binary search tree where the difference between the heights of left and right subtrees cannot be more than one for all nodes.


class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#insertNode(this.root, value);
    }

    #insertNode(node, value) {
        if (!node) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.#insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.#insertNode(node.right, value);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.#getHeight(node.left), this.#getHeight(node.right));

        const balance = this.#getBalance(node);

        if (balance > 1 && value < node.left.value) {
            return this.#rightRotate(node);
        }

        if (balance < -1 && value > node.right.value) {
            return this.#leftRotate(node);
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this.#leftRotate(node.left);
            return this.#rightRotate(node);
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this.#rightRotate(node.right);
            return this.#leftRotate(node);
        }

        return node;
    }

    #getHeight(node) {
        return node ? node.height : 0;
    }

    #getBalance(node) {
        return node ? this.#getHeight(node.left) - this.#getHeight(node.right) : 0;
    }

    #rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;
        x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;

        return x;
    }

    #leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;
        y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;

        return y;
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
}

// Example Usage
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);
console.log("In-Order Traversal of AVL Tree:", avl.inOrder(avl.root));
5. Trie (Prefix Tree)
A tree used to store associative data structures, often used for storing strings.


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example Usage
const trie = new Trie();
trie.insert("apple");
console.log("Search 'apple':", trie.search("apple")); // true
console.log("Search 'app':", trie.search("app")); // false
console.log("StartsWith 'app':", trie.startsWith("app")); // true
trie.insert("app");
console.log("Search 'app':", trie.search("app")); // true
6. Segment Tree
A tree used for storing intervals or segments, allowing efficient range queries.


class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = Array(2 * this.n).fill(0);
        this.build(arr);
    }

    build(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index, value) {
        index += this.n;
        this.tree[index] = value;
        while (index > 1) {
            index = Math.floor(index / 2);
            this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
        }
    }

    rangeQuery(left, right) {
        left += this.n;
        right += this.n;
        let sum = 0;
        while (left < right) {
            if (left % 2 === 1) {
                sum += this.tree[left];
                left++;
            }
            if (right % 2 === 1) {
                right--;
                sum += this.tree[right];
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        return sum;
    }
}

// Example Usage
let arr = [1, 3, 5, 7, 9, 11];
let st = new SegmentTree(arr);
console.log("Range Query (1, 3):", st.rangeQuery(1, 4)); // Output: 15
st.update(1, 10);
console.log("Range Query (1, 3) after update:", st.rangeQuery(1, 4)); // Output: 22
These implementations cover a variety of tree data structures, from basic trees to more advanced structures like AVL trees, tries, and segment trees. Each example includes common operations such as insertion, searching, and traversals.


Yes, there are other advanced tree data structures and their variations. Here are a few more tree data structures along with their JavaScript implementations:

7. B-Tree
A B-Tree is a self-balancing search tree in which nodes can have multiple children and is optimized for systems that read and write large blocks of data.

B-Tree Implementation in JavaScript

class BTreeNode {
    constructor(t, leaf = false) {
        this.t = t; // Minimum degree
        this.leaf = leaf; // Is true when node is leaf
        this.keys = []; // Array of keys
        this.children = []; // Array of children pointers
    }

    insertNonFull(key) {
        let i = this.keys.length - 1;

        if (this.leaf) {
            while (i >= 0 && this.keys[i] > key) {
                this.keys[i + 1] = this.keys[i];
                i--;
            }
            this.keys[i + 1] = key;
        } else {
            while (i >= 0 && this.keys[i] > key) {
                i--;
            }
            if (this.children[i + 1].keys.length === 2 * this.t - 1) {
                this.splitChild(i + 1, this.children[i + 1]);

                if (this.keys[i + 1] < key) {
                    i++;
                }
            }
            this.children[i + 1].insertNonFull(key);
        }
    }

    splitChild(i, y) {
        const z = new BTreeNode(y.t, y.leaf);
        z.keys = y.keys.splice(this.t - 1);

        if (!y.leaf) {
            z.children = y.children.splice(this.t);
        }

        this.children.splice(i + 1, 0, z);
        this.keys.splice(i, 0, y.keys.pop());
    }

    traverse() {
        let i = 0;
        for (; i < this.keys.length; i++) {
            if (!this.leaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }
        if (!this.leaf) {
            this.children[i].traverse();
        }
    }

    search(key) {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }

        if (this.keys[i] === key) {
            return true;
        }

        if (this.leaf) {
            return false;
        }

        return this.children[i].search(key);
    }
}

class BTree {
    constructor(t) {
        this.t = t;
        this.root = new BTreeNode(t, true);
    }

    insert(key) {
        const root = this.root;
        if (root.keys.length === 2 * this.t - 1) {
            const s = new BTreeNode(this.t, false);
            this.root = s;
            s.children[0] = root;
            s.splitChild(0, root);
            s.insertNonFull(key);
        } else {
            root.insertNonFull(key);
        }
    }

    traverse() {
        if (this.root !== null) {
            this.root.traverse();
        }
    }

    search(key) {
        return this.root === null ? false : this.root.search(key);
    }
}

// Example Usage
const btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log("Traversal of the B-Tree:");
btree.traverse(); // Output: 5 6 7 10 12 17 20 30

console.log("Search for 6:", btree.search(6)); // true
console.log("Search for 15:", btree.search(15)); // false
8. Splay Tree
A splay tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again.

Splay Tree Implementation in JavaScript

class SplayTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class SplayTree {
    constructor() {
        this.root = null;
    }

    rightRotate(x) {
        const y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }

    leftRotate(x) {
        const y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    splay(root, value) {
        if (!root || root.value === value) {
            return root;
        }

        if (root.value > value) {
            if (!root.left) {
                return root;
            }

            if (root.left.value > value) {
                root.left.left = this.splay(root.left.left, value);
                root = this.rightRotate(root);
            } else if (root.left.value < value) {
                root.left.right = this.splay(root.left.right, value);
                if (root.left.right) {
                    root.left = this.leftRotate(root.left);
                }
            }

            return root.left ? this.rightRotate(root) : root;
        } else {
            if (!root.right) {
                return root;
            }

            if (root.right.value > value) {
                root.right.left = this.splay(root.right.left, value);
                if (root.right.left) {
                    root.right = this.rightRotate(root.right);
                }
            } else if (root.right.value < value) {
                root.right.right = this.splay(root.right.right, value);
                root = this.leftRotate(root);
            }

            return root.right ? this.leftRotate(root) : root;
        }
    }

    insert(value) {
        if (!this.root) {
            this.root = new SplayTreeNode(value);
            return;
        }

        this.root = this.splay(this.root, value);

        if (this.root.value === value) {
            return;
        }

        const newNode = new SplayTreeNode(value);

        if (this.root.value > value) {
            newNode.right = this.root;
            newNode.left = this.root.left;
            this.root.left = null;
        } else {
            newNode.left = this.root;
            newNode.right = this.root.right;
            this.root.right = null;
        }

        this.root = newNode;
    }

    search(value) {
        this.root = this.splay(this.root, value);
        return this.root && this.root.value === value;
    }

    inOrder(node, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
}

// Example Usage
const splayTree = new SplayTree();
splayTree.insert(10);
splayTree.insert(20);
splayTree.insert(30);
splayTree.insert(25);
splayTree.insert(5);
splayTree.insert(1);

console.log("In-Order Traversal of Splay Tree:", splayTree.inOrder(splayTree.root));

console.log("Search for 25:", splayTree.search(25)); // true
console.log("In-Order Traversal after search:", splayTree.inOrder(splayTree.root));
9. N-ary Tree
An N-ary tree is a tree in which a node can have at most N children.

N-ary Tree Implementation in JavaScript

class NaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class NaryTree {
    constructor(value) {
        this.root = new NaryTreeNode(value);
    }

    addChild(parentValue, childValue) {
        const parentNode = this.#findNode(this.root, parentValue);
        if (parentNode) {
            parentNode.children.push(new NaryTreeNode(childValue));
        }
    }

    #findNode(node, value) {
        if (!node) return null;
        if (node.value === value) return node;

        for (const child of node.children) {
            const found = this.#findNode(child, value);
            if (found) return found;
        }
        return null;
    }

    traverseDFS(node, callback) {
        callback(node);
        node.children.forEach(child => this.traverseDFS(child, callback));
    }

    traverseBFS(callback) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);
            queue.push(...node.children);
        }
    }
}

// Example Usage
const naryTree = new NaryTree(1);
naryTree.addChild(1, 2);
naryTree.addChild(1, 3);
naryTree.addChild(1, 4);
naryTree.addChild(2, 5);
naryTree.addChild(2, 6);
naryTree.addChild(3, 7);
naryTree.addChild(3, 8);

console.log("DFS Traversal:");
naryTree.traverseDFS(naryTree.root, node => console.log(node.value)); // DFS: 1 2 5 6 3 7 8 4

console.log("BFS Traversal:");
naryTree.traverseBFS(node => console.log(node.value)); // BFS: 1 2 3 4 5 6 7 8
These additional examples should provide a more comprehensive understanding of various tree data structures and their implementations in JavaScript, from basic to advanced levels.

10. Fenwick Tree (Binary Indexed Tree)
A Fenwick Tree, also known as a Binary Indexed Tree, is used for efficient updates and prefix queries.

Fenwick Tree Implementation in JavaScript

class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = Array(size + 1).fill(0);
    }

    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }

    rangeQuery(left, right) {
        return this.query(right) - this.query(left - 1);
    }
}

// Example Usage
let fenwickTree = new FenwickTree(10);
fenwickTree.update(3, 5);
fenwickTree.update(5, 7);
fenwickTree.update(7, 2);

console.log("Prefix sum up to index 5:", fenwickTree.query(5)); // Output: 12
console.log("Range sum from index 3 to 7:", fenwickTree.rangeQuery(3, 7)); // Output: 14
11. Red-Black Tree
A Red-Black Tree is a self-balancing binary search tree with an extra bit for maintaining balance, ensuring the tree remains approximately balanced.

Red-Black Tree Implementation in JavaScript

const RED = true;
const BLACK = false;

class RedBlackNode {
    constructor(key, color = RED) {
        this.key = key;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.TNULL = new RedBlackNode(0, BLACK);
        this.root = this.TNULL;
    }

    // Preorder
    preOrderHelper(node) {
        if (node !== this.TNULL) {
            console.log(node.key + " ");
            this.preOrderHelper(node.left);
            this.preOrderHelper(node.right);
        }
    }

    // Rotate left
    rotateLeft(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left !== this.TNULL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    // Rotate right
    rotateRight(x) {
        let y = x.left;
        x.left = y.right;
        if (y.right !== this.TNULL) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    // Balance the tree after deletion of a node
    balanceDelete(x) {
        let s;
        while (x !== this.root && x.color === BLACK) {
            if (x === x.parent.left) {
                s = x.parent.right;
                if (s.color === RED) {
                    s.color = BLACK;
                    x.parent.color = RED;
                    this.rotateLeft(x.parent);
                    s = x.parent.right;
                }
                if (s.left.color === BLACK && s.right.color === BLACK) {
                    s.color = RED;
                    x = x.parent;
                } else {
                    if (s.right.color === BLACK) {
                        s.left.color = BLACK;
                        s.color = RED;
                        this.rotateRight(s);
                        s = x.parent.right;
                    }
                    s.color = x.parent.color;
                    x.parent.color = BLACK;
                    s.right.color = BLACK;
                    this.rotateLeft(x.parent);
                    x = this.root;
                }
            } else {
                s = x.parent.left;
                if (s.color === RED) {
                    s.color = BLACK;
                    x.parent.color = RED;
                    this.rotateRight(x.parent);
                    s = x.parent.left;
                }
                if (s.right.color === BLACK && s.left.color === BLACK) {
                    s.color = RED;
                    x = x.parent;
                } else {
                    if (s.left.color === BLACK) {
                        s.right.color = BLACK;
                        s.color = RED;
                        this.rotateLeft(s);
                        s = x.parent.left;
                    }
                    s.color = x.parent.color;
                    x.parent.color = BLACK;
                    s.left.color = BLACK;
                    this.rotateRight(x.parent);
                    x = this.root;
                }
            }
        }
        x.color = BLACK;
    }

    // Balance the tree after insertion of a node
    balanceInsert(k) {
        let u;
        while (k.parent.color === RED) {
            if (k.parent === k.parent.parent.right) {
                u = k.parent.parent.left;
                if (u.color === RED) {
                    u.color = BLACK;
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.left) {
                        k = k.parent;
                        this.rotateRight(k);
                    }
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    this.rotateLeft(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right;
                if (u.color === RED) {
                    u.color = BLACK;
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.right) {
                        k = k.parent;
                        this.rotateLeft(k);
                    }
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    this.rotateRight(k.parent.parent);
                }
            }
            if (k === this.root) {
                break;
            }
        }
        this.root.color = BLACK;
    }

    insert(key) {
        let node = new RedBlackNode(key);
        node.parent = null;
        node.key = key;
        node.left = this.TNULL;
        node.right = this.TNULL;
        node.color = RED;

        let y = null;
        let x = this.root;

        while (x !== this.TNULL) {
            y = x;
            if (node.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        node.parent = y;
        if (y === null) {
            this.root = node;
        } else if (node.key < y.key) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent === null) {
            node.color = BLACK;
            return;
        }

        if (node.parent.parent === null) {
            return;
        }

        this.balanceInsert(node);
    }

    // In-order traversal
    inOrderHelper(node) {
        if (node !== this.TNULL) {
            this.inOrderHelper(node.left);
            console.log(node.key + " ");
            this.inOrderHelper(node.right);
        }
    }

    inOrder() {
        this.inOrderHelper(this.root);
    }
}

// Example Usage
let tree = new RedBlackTree();
tree.insert(55);
tree.insert(40);
tree.insert(65);
tree.insert(60);
tree.insert(75);
tree.insert(57);

console.log("In-order traversal:");
tree.inOrder(); // Output: 40 55 57 60 65 75
12. Treap
A Treap is a combination of a binary search tree and a heap. It maintains the properties of both structures.

Treap Implementation in JavaScript

class TreapNode {
    constructor(key, priority) {
        this.key = key;
        this.priority = priority;
        this.left = null;
        this.right = null;
    }
}

class Treap {
    constructor() {
        this.root = null;
    }

    rotateRight(y) {
        const x = y.left;
        y.left = x.right;
        x.right = y;
        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    insert(root, key, priority) {
        if (root === null) {
            return new TreapNode(key, priority);
        }

        if (key <= root.key) {
            root.left = this.insert(root.left, key, priority);
            if (root.left.priority > root.priority) {
                root = this.rotateRight(root);
            }
        } else {
            root.right = this.insert(root.right, key, priority);
            if (root.right.priority > root.priority) {
                root = this.rotateLeft(root);
            }
        }

        return root;
    }

    deleteNode(root, key) {
        if (root === null) {
            return root;
        }

        if (key < root.key) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.key) {
            root.right = this.deleteNode(root.right, key);
        } else if (root.left === null) {
            root = root.right;
        } else if (root.right === null) {
            root = root.left;
        } else if (root.left.priority < root.right.priority) {
            root = this.rotateLeft(root);
            root.left = this.deleteNode(root.left, key);
        } else {
            root = this.rotateRight(root);
            root.right = this.deleteNode(root.right, key);
        }

        return root;
    }

    inOrder(root, result = []) {
        if (root) {
            this.inOrder(root.left, result);
            result.push(root.key);
            this.inOrder(root.right, result);
        }
        return result;
    }
}

// Example Usage
const treap = new Treap();
treap.root = treap.insert(treap.root, 50, 3);
treap.root = treap.insert(treap.root, 30, 2);
treap.root = treap.insert(treap.root, 20, 1);
treap.root = treap.insert(treap.root, 40, 4);
treap.root = treap.insert(treap.root, 70, 0);

console.log("In-order traversal of Treap:", treap.inOrder(treap.root)); // [20, 30, 40, 50, 70]

treap.root = treap.deleteNode(treap.root, 30);

console.log("In-order traversal after deletion:", treap.inOrder(treap.root)); // [20, 40, 50, 70]
13. AVL Tree
An AVL Tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.

AVL Tree Implementation in JavaScript

class AVLNode {
    constructor(value) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    getHeight(node) {
        if (!node) {
            return 0;
        }
        return node.height;
    }

    getBalanceFactor(node) {
        if (!node) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1) {
            if (value < node.left.value) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        if (balanceFactor < -1) {
            if (value > node.right.value) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
    }

    inOrderTraversal(node, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

// Example Usage
const avlTree = new AVLTree();
let root = null;
root = avlTree.insert(root, 10);
root = avlTree.insert(root, 20);
root = avlTree.insert(root, 30);
root = avlTree.insert(root, 40);
root = avlTree.insert(root, 50);
root = avlTree.insert(root, 25);

console.log("In-order traversal of AVL Tree:", avlTree.inOrderTraversal(root)); // [10, 20, 25, 30, 40, 50]
These additional tree structures and operations will provide a deeper understanding of various advanced tree data structures and their implementations in JavaScript.

14. Splay Tree
A Splay Tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again.

Splay Tree Implementation in JavaScript

class SplayNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class SplayTree {
    rightRotate(x) {
        let y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }

    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    splay(root, key) {
        if (root === null || root.key === key) {
            return root;
        }

        if (key < root.key) {
            if (root.left === null) return root;
            if (key < root.left.key) {
                root.left.left = this.splay(root.left.left, key);
                root = this.rightRotate(root);
            } else if (key > root.left.key) {
                root.left.right = this.splay(root.left.right, key);
                if (root.left.right !== null) {
                    root.left = this.leftRotate(root.left);
                }
            }
            return (root.left === null) ? root : this.rightRotate(root);
        } else {
            if (root.right === null) return root;
            if (key > root.right.key) {
                root.right.right = this.splay(root.right.right, key);
                root = this.leftRotate(root);
            } else if (key < root.right.key) {
                root.right.left = this.splay(root.right.left, key);
                if (root.right.left !== null) {
                    root.right = this.rightRotate(root.right);
                }
            }
            return (root.right === null) ? root : this.leftRotate(root);
        }
    }

    insert(root, key) {
        if (root === null) return new SplayNode(key);
        root = this.splay(root, key);
        if (root.key === key) return root;

        let newNode = new SplayNode(key);
        if (key < root.key) {
            newNode.left = root.left;
            newNode.right = root;
            root.left = null;
        } else {
            newNode.right = root.right;
            newNode.left = root;
            root.right = null;
        }
        return newNode;
    }

    inOrder(root, result = []) {
        if (root !== null) {
            this.inOrder(root.left, result);
            result.push(root.key);
            this.inOrder(root.right, result);
        }
        return result;
    }
}

// Example Usage
let splayTree = new SplayTree();
let root = null;
root = splayTree.insert(root, 10);
root = splayTree.insert(root, 20);
root = splayTree.insert(root, 30);
root = splayTree.insert(root, 40);
root = splayTree.insert(root, 50);
root = splayTree.insert(root, 25);

console.log("In-order traversal of Splay Tree:", splayTree.inOrder(root)); // [10, 20, 25, 30, 40, 50]
15. Interval Tree
An Interval Tree is a tree data structure to hold intervals and quickly find all intervals that overlap with a given interval or point.

Interval Tree Implementation in JavaScript

class IntervalNode {
    constructor(interval) {
        this.interval = interval;
        this.max = interval[1];
        this.left = null;
        this.right = null;
    }
}

class IntervalTree {
    insert(root, interval) {
        if (root === null) {
            return new IntervalNode(interval);
        }

        if (interval[0] < root.interval[0]) {
            root.left = this.insert(root.left, interval);
        } else {
            root.right = this.insert(root.right, interval);
        }

        if (root.max < interval[1]) {
            root.max = interval[1];
        }

        return root;
    }

    overlap(interval1, interval2) {
        return interval1[0] <= interval2[1] && interval2[0] <= interval1[1];
    }

    searchOverlap(root, interval, result = []) {
        if (root === null) return result;

        if (this.overlap(root.interval, interval)) {
            result.push(root.interval);
        }

        if (root.left !== null && root.left.max >= interval[0]) {
            this.searchOverlap(root.left, interval, result);
        }

        this.searchOverlap(root.right, interval, result);

        return result;
    }
}

// Example Usage
let intervalTree = new IntervalTree();
let root = null;
root = intervalTree.insert(root, [15, 20]);
root = intervalTree.insert(root, [10, 30]);
root = intervalTree.insert(root, [17, 19]);
root = intervalTree.insert(root, [5, 20]);
root = intervalTree.insert(root, [12, 15]);
root = intervalTree.insert(root, [30, 40]);

let overlapping = intervalTree.searchOverlap(root, [14, 16]);
console.log("Intervals overlapping with [14, 16]:", overlapping); // [[15, 20], [10, 30], [12, 15]]
16. Segment Tree
A Segment Tree is a tree data structure used for storing intervals or segments. It allows querying which segments contain a given point.

Segment Tree Implementation in JavaScript

class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = Array(2 * this.n).fill(0);
        this.build(arr);
    }

    build(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }

        for (let i = this.n - 1; i > 0; --i) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(pos, value) {
        pos += this.n;
        this.tree[pos] = value;

        while (pos > 1) {
            pos >>= 1;
            this.tree[pos] = this.tree[pos * 2] + this.tree[pos * 2 + 1];
        }
    }

    query(l, r) {
        l += this.n;
        r += this.n;
        let sum = 0;

        while (l <= r) {
            if (l % 2 === 1) sum += this.tree[l++];
            if (r % 2 === 0) sum += this.tree[r--];
            l >>= 1;
            r >>= 1;
        }

        return sum;
    }
}

// Example Usage
let arr = [1, 3, 5, 7, 9, 11];
let segTree = new SegmentTree(arr);

console.log("Sum of values in given range =", segTree.query(1, 3)); // Output: 15
segTree.update(1, 10);
console.log("Sum of values in given range =", segTree.query(1, 3)); // Output: 22
17. Trie (Prefix Tree)
A Trie is a tree-like data structure that stores a dynamic set of strings, where the keys are usually strings.

Trie Implementation in JavaScript

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example Usage
let trie = new Trie();
trie.insert("apple");
console.log("Search 'apple':", trie.search("apple")); // Output: true
console.log("Search 'app':", trie.search("app")); // Output: false
console.log("Starts with 'app':", trie.startsWith("app")); // Output: true
trie.insert("app");
console.log("Search 'app':", trie.search("app")); // Output: true
18. Binary Space Partitioning (BSP) Tree
A Binary Space Partitioning Tree is used in computer graphics to recursively subdivide a space into convex sets.

BSP Tree Implementation in JavaScript

class BSPNode {
    constructor(polygon) {
        this.polygon = polygon;
        this.front = null;
        this.back = null;
    }
}

class BSPTree {
    constructor() {
        this.root = null;
    }

    insert(root, polygon) {
        if (root === null) {
            return new BSPNode(polygon);
        }

        if (this.isFront(root.polygon, polygon)) {
            root.front = this.insert(root.front, polygon);
        } else {
            root.back = this.insert(root.back, polygon);
        }

        return root;
    }

    isFront(polygon1, polygon2) {
        // Implementation to determine if polygon2 is in front of polygon1
        // This is a simplified example, actual implementation would be more complex
        return polygon2[0][0] > polygon1[0][0];
    }

    inOrder(root, result = []) {
        if (root !== null) {
            this.inOrder(root.front, result);
            result.push(root.polygon);
            this.inOrder(root.back, result);
        }
        return result;
    }
}

// Example Usage
let bspTree = new BSPTree();
bspTree.root = bspTree.insert(bspTree.root, [[1, 2], [3, 4], [5, 6]]);
bspTree.root = bspTree.insert(bspTree.root, [[7, 8], [9, 10], [11, 12]]);
bspTree.root = bspTree.insert(bspTree.root, [[0, 1], [2, 3], [4, 5]]);

console.log("In-order traversal of BSP Tree:", bspTree.inOrder(bspTree.root)); // Output: [ [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ], [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ], [ [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ] ]
These additional concepts and implementations provide a comprehensive overview of various tree data structures, their properties, and how they can be implemented in JavaScript.