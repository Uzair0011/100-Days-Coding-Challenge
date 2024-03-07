//Shrinking Guests:

let guest: string [] = ["Adil","Asim", "Ahmed", "Ovais", "Abdullah", "Abdul Samad"];
//guest.map((list)=> console.log(`Dear ${guest},"Unfortunately, I can only invite two people for dinner."`));

while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guest.forEach((newList) => console.log(`"Dear ${newList} ,you're still invited to dinner.`));

