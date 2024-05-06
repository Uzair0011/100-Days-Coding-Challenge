// *Question 145:* Create a function that accepts a callback and invokes it with some arguments.

// *Explain & TIP:* Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.

function callback(
  callback: (plus1: number, plus2: number) => void,
  plus1: number,
  plus2: number
): void {
  callback(plus1, plus2);
}

const add = (a: number, b: number) => {
  console.log(a + b);
};

callback(add, 10, 3);
