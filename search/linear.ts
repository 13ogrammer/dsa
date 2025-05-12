/**
 * Linear Search algorithm
 * Used for finding the position of a target value within an array
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

export function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.time(`execution time`);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;
const result = linearSearch(arr, target);
if (result === -1) {
  console.log(`Target not found`);
} else {
  console.log(`Target found at index ${result}`);
}
console.timeEnd(`execution time`);
