//store a person name in variable
let personName: string = "Uzair Ahmed";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\bw/g,c => c.toLowerCase()));
