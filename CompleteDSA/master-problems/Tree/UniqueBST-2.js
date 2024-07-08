class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function generateTrees(n) {
  if (n === 0) return [];
  return generate(1, n);
}

function generate(start, end) {
  let allTrees = [];

  if (start > end) {
    allTrees.push(null);
    return allTrees;
  }

  for (let i = start; i <= end; i++) {
    // generate all left sub trees

    let leftTrees = generate(start, i - 1);

    let rightTrees = generate(i + 1, end);

    // connect left and right subtrees to the root node i

    for (let left of leftTrees) {
      for (let right of rightTrees) {
        let currentTree = new Node(i);
        currentTree.left = left;
        currentTree.right = right;
        allTrees.push(currentTree);
      }
    }
  }
  return allTrees;
}

let result = generateTrees(3);

// Function to print the trees (in-order traversal)
function printTree(node, result = []) {
  if (node) {
    printTree(node.left, result);
    result.push(node.value);
    printTree(node.right, result);
  }
  return result;
}

// Print all generated trees
result.forEach((tree, index) => {
  console.log(`Tree ${index + 1}:`, printTree(tree));
});
