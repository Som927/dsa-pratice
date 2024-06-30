Sure! Let's go through the various types of tree data structures and their JavaScript implementations, from basic to advanced.

1. Basic Tree Implementation
A simple tree structure with basic insert and traversal operations.

javascript
Copy code
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

javascript
Copy code
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

javascript
Copy code
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

javascript
Copy code
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

javascript
Copy code
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

javascript
Copy code
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
javascript
Copy code
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
javascript
Copy code
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
javascript
Copy code
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