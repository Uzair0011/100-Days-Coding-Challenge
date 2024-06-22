// Type Conversions
// String Conversion
var value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
// Numeric Conversion
alert("6" / "2"); // 3, strings are converted to numbers
We;
can;
use;
the;
Number(value);
function to() { }
explicitly;
convert;
a;
value;
to;
a;
number: var str = "123";
alert(typeof str); // string
var num = Number(str); // becomes a number 123
alert(typeof num); // number
// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
// If the string is not a valid number, the result of such a conversion is NaN. For instance:
var age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed
alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN (error reading a number at "z")
alert(Number(true)); // 1
alert(Number(false)); // 0
// Boolean Conversion
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
-- -
;
