/**
 * Flood Fill Algorithm (BFS)
 * Given a 2D grid representing an image, a starting pixel (sr, sc), and a new color,
 * change the color of the starting pixel and all connected pixels of the same color to the new color.
 */

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const originalColor = image[sr][sc];

  // If the original color is the same as the new color, no need to proceed
  if (originalColor === newColor) return image;

  // Use BFS to perform the flood fill
  bfs2D(image, sr, sc, originalColor, newColor);

  return image;
}

function findNeighbors(
  image: number[][],
  row: number,
  col: number,
  targetColor: number
): [number, number][] {
  const numRows = image.length;
  const numCols = image[0].length;
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];
  const neighbors: [number, number][] = [];

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    // Check bounds and if the color matches the target color
    if (
      newRow >= 0 &&
      newRow < numRows &&
      newCol >= 0 &&
      newCol < numCols &&
      image[newRow][newCol] === targetColor
    ) {
      neighbors.push([newRow, newCol]);
    }
  }

  return neighbors;
}

function bfs2D(
  image: number[][],
  startRow: number,
  startCol: number,
  originalColor: number,
  newColor: number
): void {
  const queue: [number, number][] = [[startRow, startCol]];
  image[startRow][startCol] = newColor; // Change the color of the starting pixel

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift()!;

    // Find all valid neighbors with the original color
    const neighbors = findNeighbors(
      image,
      currentRow,
      currentCol,
      originalColor
    );

    for (const [neighborRow, neighborCol] of neighbors) {
      image[neighborRow][neighborCol] = newColor; // Change color
      queue.push([neighborRow, neighborCol]); // Add to queue for further processing
    }
  }
}

// Example usage:
const image = [
  [0, 1, 3, 4, 1],
  [3, 8, 8, 3, 3],
  [6, 7, 8, 8, 3],
  [12, 2, 8, 9, 1],
  [12, 3, 1, 3, 2],
];
const sr = 2;
const sc = 2;
const newColor = 5;

const result = floodFill(image, sr, sc, newColor);

const expectedResult = [
  [0, 1, 3, 4, 1],
  [3, 5, 5, 3, 3],
  [6, 7, 5, 5, 3],
  [12, 2, 5, 9, 1],
  [12, 3, 1, 3, 2],
];
console.assert(
  JSON.stringify(result) == JSON.stringify(expectedResult),
  "Test case failed"
);
