// *Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// *Explain & TIP:* The .reduce() method applies a function against an accumulator and each element in the array (from left to right)
//  to reduce it to a single value.
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Example: Calculating the sum of an array of numbers
var numbers = [1, 2, 3, 4];
console.log(calculateSum(numbers));
