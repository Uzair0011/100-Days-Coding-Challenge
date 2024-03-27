// *Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and
// say hello. If no name is given, it should greet an anonymous user.
// *Explain & TIP:* Default parameters allow your functions to have preset values for their parameters. These values are
// used if no other value is provided, making functions more flexible.
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name) {
    if (name === void 0) { name = "Ahmed"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Uzair");
greetUser();
