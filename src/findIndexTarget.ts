export function findIndexTarget(array: number[], target: number): number[] {
  // We validate that the length of the array is equal to or greater than 2
  if (array.length < 2) throw new Error('Array length must be >= 2');
  /*This solution has a complexity of O(n^2) perhaps it is not the most optimal.
  We create a nested loop that will compare and find if the element of the index 'i'
  added to the element of the index 'j' is equal to the target, then it will 
  return the indices of 'i' and 'j'*/
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  // If it doesn't find any solution it will reach this return and return an empty array
  return [];
}
// Display the result
console.log(findIndexTarget([2, 7, 11, 15], 9))