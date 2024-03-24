// *Question 67:* Arithmetic with Mixed Types: Write a function that
// takes two parameters: a number and a string that represents a number
// (e.g., "15"). Return their sum as a number.
// *Explain & TIP:* JavaScript allows arithmetic operations between mixed
// types. When you add a number to a string that looks like a number,
// JavaScript converts the string to a number for the operation.
// This function adds a number and a string that represents a number
function NumberAndStringBoth(number1: number, numberString: string): number {
  return number1 + Number(numberString);
}
console.log(NumberAndStringBoth(20, "15"));
