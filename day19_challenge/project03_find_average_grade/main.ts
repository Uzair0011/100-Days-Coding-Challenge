// *Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.

// *Explain & TIP:* We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.


let grades = [75, 98, 64, 91, 80, 95]; // A list of grades

let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length; // Calculates the average grade

console.log(averageGrade);