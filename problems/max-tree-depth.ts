import { BTNode, btreeBuilder } from "../graph/tree.helpers";

type NumNode = BTNode<number>;

function maxTreeDepth(root: NumNode | null): number {
  if (root === null) return 0;

  return bfs(root) - 1;
}

function bfs(node: NumNode | null): number {
  if (!node) return 0;

  return Math.max(bfs(node.left), bfs(node.right)) + 1;
}

// Example usage

const tree = [1, 2, 3, null, null, null, 4, null, null];
const root = btreeBuilder(tree);

console.log(maxTreeDepth(root));
// Result: 2
