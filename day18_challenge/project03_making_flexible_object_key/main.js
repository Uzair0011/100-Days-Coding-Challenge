// *Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name
//  of each section based on what you need at that moment, like adjusting labels based on user choices.
// *Explain & TIP:* This is like having labels you can rewrite anytime, which is great for when you need
//  to adjust your list based on new information.
function flexibleObject(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup
var userdata1 = flexibleObject("First Name", "Uzair");
var userdata2 = flexibleObject("last Name", "Ahmed");
//user's choice
console.log(userdata1);
console.log(userdata2);
