// *Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, 
// then swap their values so that a becomes 10 and b becomes 5.

// *Explain & TIP:* Swapping variables is a common task. You can use a temporary variable to hold one value while you swap 
// them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.

// This function swaps the values of two variables
function swapValue() {
    let a = 2, b = 3;
    console.log("before swap a=", a, "b =", b);
    let temp = a, temp1 = b;
    b = temp; a = temp1;
        console.log("After swap: a=", a, "b", b,);
    }
swapValue();