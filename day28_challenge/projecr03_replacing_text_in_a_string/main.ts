// *Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word
// "JavaScript" with "TypeScript".

// *Explain & TIP:* The .replace() method can search for a specific text pattern in a string and replace it with something else.
// By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

//This function swaps "JavaScript" with "TypeScript" in a sentence

function replaceText(name) {
  return name.replace(/JavaScript/g, "TypeScript");
}

console.log(
  replaceText(
    "I learn JavaScript on daily basis & day by day more efficiency in JavaScript"
  )
);
