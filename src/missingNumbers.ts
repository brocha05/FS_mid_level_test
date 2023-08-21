export function findMissingNumbers(array: number[]): number[] {
	// We declare a constant that will help us to create an array of the same length and do certain validations.
	const n = array.length;
	// We delimit the maximum range to validate.
	const MAX_LENGTH = 10000;
	// Declare a error variable to handle possible errors in data input.
	let error = false;
	// We loop the array to verify that the data is valid
	/*
	I consider it important to validate and adhere to the restrictions that were established, 
	it is also a loop with O(n) complexity and in the first case that it finds an invalid input,
	it ends the loop and sets the error.
	*/
	array.forEach(number => {
		// If any data violates the constraints then we set the error to true and end the loop.
		if (number < 1 || number > n || n > MAX_LENGTH) {
			console.log("Please enter a valid input.")
			error = true;
			return;
		}
	});
	// If the error does not exist, we execute the logic of our algorithm.
	if (!error) {
		// We create a new array of length 'n' and we also fill it with numbers that will go from 1 to 'n' ([1...n])
		const missingNumbers = Array.from({ length: n }, (_, i) => i + 1);
		/*
		We iterate over this array that we have created that goes from [1...n]
		and for each element, if it is not included in the array that was passed as a parameter,
		then we return it and it is added to the array that is returned by the filter function 
		and these numbers will be the missing ones.
		*/
		return missingNumbers.filter((num) => !array.includes(num));
	} else {
		// Otherwise we return an empty array.
		return [];
	}
}
// You can modify the values ​​of this array to test with different values
const numbers: number[] = [4, 3, 2, 7, 8, 2, 3, 1];
// we store the result of the call to findMissingNumbers in the variable missingNumbers
const missingNumbers = findMissingNumbers(numbers);
// Display the result.
console.log(missingNumbers);