// Question 35:* Animals: Highlight animals with a common trait.
// Explain & TIP:* Looping through an array of animals allows you to comment on 
// each one individually. This teaches you how to personalize messages
// within a loop based on array items.

let animals: string[] = ["Lion", "Tiger", "Cheetah"]
animals.forEach(animal => {
console.log(`A ${animal} is very Dangerous`)
})
console.log("these animals are live in zoo.")