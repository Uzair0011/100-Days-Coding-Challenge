// *Question 48:* CombipricesLine1ning Arrays with Spread Operator:
// Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array
//  sorted in ascending order, then log the result.
// *Explain & TIP:* The spread operator can be used in conjunction
//  with array methods like sort() to combine and manipulate arrays efficiently.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pricesLine1 = [800, 1500, 900];
var pricesLine2 = [1200, 1000, 600];
var bothPrices = __spreadArray(__spreadArray([], pricesLine1, true), pricesLine2, true).sort(function (a, b) { return a - b; });
console.log(bothPrices);
