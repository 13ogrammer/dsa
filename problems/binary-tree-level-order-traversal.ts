class BTNode {
  constructor(
    public val: number,
    public left: BTNode | null = null,
    public right: BTNode | null = null
  ) {}
}

function levelOrderTraversal(root: BTNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: BTNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length; // Capture the current level size
    const levelResult: number[] = [];

    // Process exactly levelSize nodes (current level only)
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!; // Safe because we know queue has levelSize elements
      levelResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelResult);
  }

  return result;
}

// Alternative implementation with O(1) dequeue using indices (more efficient)
function levelOrderTraversalOptimized(root: BTNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: BTNode[] = [root];
  let front = 0; // Index of the front element

  while (front < queue.length) {
    const levelSize = queue.length - front; // Current level size
    const levelResult: number[] = [];

    // Process exactly levelSize nodes (current level only)
    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++]; // O(1) dequeue using index
      levelResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelResult);
  }

  return result;
}

// Example usage:
const root = new BTNode(1);
root.left = new BTNode(2);
root.right = new BTNode(3);
root.left.left = new BTNode(4);
root.left.right = new BTNode(5);
root.right.right = new BTNode(6);

console.log(levelOrderTraversal(root)); // [[1], [2, 3], [4, 5, 6]]
console.log(levelOrderTraversalOptimized(root)); // [[1], [2, 3], [4, 5, 6]]
