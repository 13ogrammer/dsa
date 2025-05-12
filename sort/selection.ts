/**
 * Selection Sort algorithm
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * Stable: No
 * Adaptive: No
 * Online: No
 */

export function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  // Traverse through all array elements
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Example usage
console.time("Execution Time");
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = selectionSort(arr);
console.timeEnd("Execution Time");
console.log("Sorted array:", sortedArr);
// Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]
