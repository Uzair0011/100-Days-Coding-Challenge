//store a person name in variable
var personName = "Uzair Ahmed";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toLowerCase(); }));
