/**
 * Depth First Search (DFS) algorithm
 * Used for traversing or searching tree or graph data structures
 *
 * Time complexity: O(V + E), where V -> # of vertices and E -> number of edges
 * Space complexity: O(V) for the stack
 *
 * Notes:
 * - the graph is represented as an adjacency list
 * -
 */

export function dfs(
  graph: Record<string, string[]>,
  start: string,
  target?: string
): string[] | void {
  const visited = new Set<string>();
  const stack: string[] = [start];
  const result: string[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;

    if (target && node === target) {
      console.log(`Target found: ${node}`);
      console.log(`DFS traversal:`, [...visited, node]);
      return;
    }

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

console.time(`execution time`);
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};
const startNode = "A";
const result = dfs(graph, startNode);
console.log(`DFS traversal starting from node ${startNode}:`, result);

const targetNode = "B";
dfs(graph, startNode, targetNode);
console.timeEnd(`execution time`);
