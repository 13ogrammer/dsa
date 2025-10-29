function findMinInRotatedSortedArray(arr: number[]): number | null {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= arr[arr.length - 1]) {
      boundary_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundary_index;
}

// Example usage
const arr = [30, 40, 50, 10, 20];
const index = findMinInRotatedSortedArray(arr);
console.log(index ? arr[index] : "N/A");
