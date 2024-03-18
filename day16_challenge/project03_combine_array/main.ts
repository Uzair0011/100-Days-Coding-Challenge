// *Question 48:* CombipricesLine1ning Arrays with Spread Operator:
// Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array
//  sorted in ascending order, then log the result.
// *Explain & TIP:* The spread operator can be used in conjunction
//  with array methods like sort() to combine and manipulate arrays efficiently.

let pricesLine1 = [800, 1500, 900];
let pricesLine2 = [1200, 1000, 600];
let bothPrices = [...pricesLine1, ...pricesLine2].sort((a, b) => a - b);
console.log(bothPrices);