/**
 * Insertion Sort algorithm
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * Stable: Yes
 * Adaptive: Yes
 * Online: Yes
 */

export function insertionSort(arr: number[]): number[] {
  const n = arr.length;

  // Traverse through 1 to n
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
console.time("Execution Time");
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = insertionSort(arr);
console.timeEnd("Execution Time");
console.log("Sorted array:", sortedArr);
// Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]
