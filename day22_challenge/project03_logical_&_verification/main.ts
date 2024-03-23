// *Question 66:* Logical AND Verification: Create a function that checks 
// two boolean (true or false) values. It should only say true if both are
// true, using the && operator. For instance, checkBothTrue(true, false)
// should be false.
// *Explain & TIP:* The && operator in JavaScript checks if both sides are
//  true. It's great for confirming several things are true all at once.
function checkBothTrue(val1: boolean, val2: boolean): boolean {
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
console.log(checkBothTrue(true, true));
console.log(checkBothTrue(false, false));
console.log(checkBothTrue(false, false));
