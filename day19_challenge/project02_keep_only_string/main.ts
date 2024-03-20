// *Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// *Explain & TIP:* We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
// A mixed bag of items

let mixedArray = [1, "Asim", true, "Ahmed", 3, false, "ovais"]; // mixed string, number, boolean

let stringArray = mixedArray.filter(item => typeof item ==="string"); // only string filter

console.log(stringArray); // output only string

