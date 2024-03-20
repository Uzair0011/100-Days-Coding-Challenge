// *Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
// *Explain & TIP:* We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
var grades = [75, 98, 64, 91, 80, 95]; // A list of grades
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length; // Calculates the average grade
console.log(averageGrade);
