// *Question 87:* Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

// *Explain & TIP:* .substring() can be used to get a specific part of a string, by specifying the start and end positions.

// This function takes out the first 10 characters from any text
function extractFirstTenChars(str: string): string {
    return str.substring(0, 14); // Gets characters from start to position 10
}

// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("I am learning TypeScript & JavaScript")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.

