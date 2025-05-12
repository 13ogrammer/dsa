/**
 * Binary Search algorithm
 * Used for finding the position of a target value within a sorted array
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 *
 * Note: The array must be sorted before performing binary search
 */

export function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.time(`execution time`);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;
const result = binarySearch(arr, target);
if (result === -1) {
  console.log(`Target not found`);
} else {
  console.log(`Target found at index ${result}`);
}
console.timeEnd(`execution time`);
