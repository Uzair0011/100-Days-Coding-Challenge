
// *Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops,
// each with properties make, model, and year,use array destructuring to assign the first and second laptops to variables.
//  Then, log these variables.
// *Explain & TIP:* Destructuring can also be used to quickly extract elements
//  from arrays of objects, simplifying access to complex data structures.
let laptops = [
    { make: "Dell", model: "E6540", year: 2013 },
    { make: "Apple", model: "MacBook Pro", year: 2024 },
    { make: "HP", model: "EG3003CA", year: 2020 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);