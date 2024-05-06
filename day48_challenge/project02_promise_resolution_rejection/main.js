// *Question 143:* Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// *Explain & TIP:* The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
// Creates a Promise that either resolves or rejects based on a condition
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error.message); });
