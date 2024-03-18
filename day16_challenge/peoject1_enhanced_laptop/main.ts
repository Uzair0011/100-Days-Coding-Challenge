// *Question 46:* Enhanced Laptop Object: Construct an object for a laptop
// including properties make, model, year, and a method describe() that logs
//  a sentence about the laptop.

// *Explain & TIP:* Objects can also contain functions (methods) that
//  can perform actions using the object's properties. This introduces
//  method definition within objects.

let Laptop = {
    make: "Dell",
    mode: "Latitude",
    year: "2020",

describe: function () {
    console.log(`This Laptop generation is i5 & it's ${this.year} ${this.make} ${this.model}`);
}
};
Laptop.describe ();