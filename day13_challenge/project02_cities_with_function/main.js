// *Question 38:* Cities: Describing cities with a function.
// *Explain & TIP:* Use functions with default parameters to handle cases where certain data might
// not change often. This helps in making your code more flexible.
function describe_cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_cities("Karachi");
describe_cities("Islamabad");
describe_cities("Multan");
