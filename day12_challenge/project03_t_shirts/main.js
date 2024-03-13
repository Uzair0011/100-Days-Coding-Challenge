// *Question 36:* T-Shirt: Create a function for customizing t-shirts.
// *Explain & TIP:* Writing a function that accepts parameters allows you to reuse code efficiently.
//This introduces you to function parameters and printing dynamic content based on those parameters.
make_shirt("small", "Government Initiative program");
function make_shirt(size, message) {
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
