// *Question 71:* Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a 
// const-declared variable and catch the error.

// *Explain & TIP:* let allows you to declare variables that can be reassigned, while const is for variables that should not change 
// once set. Using const helps make your code safer and more predictable.

// Using `let`
let age = 20;
age = 30; //its work
console.log(age); // Shows 26

// using `const`
const name = "Alice";
try {
    name = "Bob";       // This is an error
} catch (error) {
    console.log("Error"); 
};