// Replace Guest
var familyGuest = ["Asim", "Ahmed", "Ovais"];
familyGuest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttend = "Ovais";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Abdullah";
familyGuest[familyGuest.indexOf(unableToAttend)] = newGuest;
// New invitations
familyGuest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
