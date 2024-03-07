//Shrinking Guests:
var guest = ["Adil", "Asim", "Ahmed", "Ovais", "Abdullah", "Abdul Samad"];
//guest.map((list)=> console.log(`Dear ${guest},"Unfortunately, I can only invite two people for dinner."`));
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guest.forEach(function (newList) { return console.log("\"Dear ".concat(newList, " ,you're still invited to dinner.")); });
