// *Question 86:* Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. 
// It should return true if found, otherwise false.
// *Explain & TIP:* The .includes() method lets you check if a string contains a certain piece of text, returning a boolean 
// (true or false).
function findJavaScript(str) {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
    return str.includes("Visual");
}
console.log(findJavaScript("I learn coding in JavaScript! with the help of TypeScript"));
