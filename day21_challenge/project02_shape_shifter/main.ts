
// *Question 63:* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
// including properties unique to each shape.
// *Explain & TIP:* A type alias lets you create a custom type. It's like a shortcut for describing more complex information, 
// such as the details of different shapes.
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};
// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 4
};
// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 20,
    height: 30
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle