// *Question 120:* Use a for...of loop to iterate through 
// an array of your favorite movies and log each one.
// *Explain & TIP:* The for...of loop is a modern loop
//  introduced in ES6, designed to iterate over iterable
//   objects like arrays, strings, Maps, NodeLists, and
//   more, making it very readable and easy to use.
var favoriteMovies = [
    "Fast & Furious",
    "Terminator",
    "Evil Dead",
];
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie);
}
