// *Question 113:* Write a function that checks if a Map
//  contains a key for "Canada" and logs the capital if it
//  exists.
// *Explain & TIP:* You can check for the presence of a key 
// in a Map with the .has() method and retrieve its value
// with the .get() method.
var countriesData = new Map();
countriesData.set("Pakistan", "Islamabad");
countriesData.set("Turkey", "Istanbul");
countriesData.set("Philippines", "Manila");
// console.log(countriesData);
function logCapitalOfIstabul(countriesData) {
    if (countriesData.has("istanbul")) {
        console.log("The capital of istanbul\n     is ".concat(countriesData.get("istanbul")));
    }
    else {
        console.log("istanbul is not in the Map.");
    }
}
logCapitalOfIstabul(countriesData);
