// *Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.

// *Explain & TIP:* The .filter() method creates a new array with all elements that pass the test implemented by the
//  provided function.


function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}


const numbers: number[] = [2, 5, 10, 15, 25, 50];
console.log(filterGreaterThanTen(numbers)); 
// The new array contains only the numbers that are greater than 10.


