// Replace Guest

let familyGuest: string[] = ["Asim", "Ahmed", "Ovais"];
familyGuest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

let unableToAttend = "Ovais";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Abdullah";
familyGuest[familyGuest.indexOf(unableToAttend)] = newGuest;

// New invitations
familyGuest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});