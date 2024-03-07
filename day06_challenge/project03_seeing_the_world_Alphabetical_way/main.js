var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Seeing the World: 
var visitCountry = ["Saudia Arab", "USA", "Canada", "Turky", "Japan"];
console.log("Original order:", visitCountry);
console.log("Alphabetical order:", __spreadArray([], visitCountry, true).sort());
console.log("Original order:", visitCountry);
console.log("Reverse alphabetical order:", __spreadArray([], visitCountry, true).sort().reverse());
console.log("Original order:", visitCountry);
console.log("Reversed order:", visitCountry);
