// *Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".
// *Explain & TIP:* To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with 
// array bracket notation.
function replaceFruit(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Cherry"];
replaceFruit(fruits);
console.log(fruits);
