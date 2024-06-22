
// Basic operators, maths

// Maths
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.



let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

//example 2
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// Example 3
The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Modify-in-place
// We often need to apply an operator to a variable and store the new result in that same variable.

For example:

let n = 2;
n = n + 5;
n = n * 2;
// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


// Example 
// Increment/decrement
// Increasing or decreasing a number by one is among the most common numerical operations.

// So, there are special operators for it:

// Increment ++ increases a variable by 1:

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
// Decrement -- decreases a variable by 1:

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1