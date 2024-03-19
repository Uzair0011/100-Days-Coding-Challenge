
// *Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
//  what a computer programmer knows, like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them.

// *Explain & TIP:* Breaking down a complex list into simpler parts makes it easier to work with and 
// understand specific pieces of information.

// A list showing a programmer's skills in detail
let programmerKnows = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = programmerKnows;

// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`);