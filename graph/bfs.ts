/**
 * Breadth-First Search (BFS) algorithm
 * Used for traversing or searching tree or graph data structures
 *
 * Time complexity: O(V + E), where V -> # of vertices and E -> number of edges
 * Space complexity: O(V) for the queue
 */

type AdjacencyList = Record<string, string[]>;

export function bfs(
  graph: AdjacencyList,
  start: string,
  target?: string
): string[] | void {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const result: string[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (target && node === target) {
      console.log(`Target found: ${node}`);
      console.log(`BFS traversal:`, [...visited, node]);
      return;
    }

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
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
const result = bfs(graph, startNode);
console.log(`BFS traversal starting from node ${startNode}:`, result);
const targetNode = "B";
bfs(graph, startNode, targetNode);
console.timeEnd(`execution time`);
