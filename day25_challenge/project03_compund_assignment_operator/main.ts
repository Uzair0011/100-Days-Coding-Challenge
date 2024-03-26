// // *Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. 
// // Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound 
// // operators.

// // *Explain & TIP:* Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner
// //  and more concise. Instead of writing x = x + 2, you can simply write x += 2.

function compoundAssignment(){
    let x = 4; console.log("Initial x =",x);
    x += 2;
    console.log("After addition +2 :", x);
    x -= 4;
    console.log("After Subtraction -4:", x);
    x *= 6
    console.log("After Multiplication by *6:", x)
    x /= 8
    console.log("After Division /8:", x)
}
compoundAssignment()