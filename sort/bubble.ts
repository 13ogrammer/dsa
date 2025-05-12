/**
 * Bubble Sort algorithm
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * Stable: Yes
 * Adaptive: Yes
 * Online: No
 */

export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  let swapped: boolean;

  // Traverse through all array elements
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, then break
    if (!swapped) break;
  }

  return arr;
}

// Example usage
console.time("Execution Time");
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
console.timeEnd("Execution Time");
console.log("Sorted array:", sortedArr);
// Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]
