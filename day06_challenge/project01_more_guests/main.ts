let guest: string [] = ["Asim", "Ahmed", "Ovais"];
//guest.map((list) => console.log(`Dear ${list}, you are invited`));

// Adding more guest start
guest.unshift("Adil");
// guest.map((list) => console.log(`dear ${list}, you are invited`));


// Adding more guest in middle
let middleGuest: string = "Abdul Samad"
let middleIndex = guest.length/2
guest.splice(middleIndex,0,middleGuest)
// guest.map((list) => console.log(`dear ${list}, you are invited`));


//Adding more guests end
guest.push("Abdullah");
guest.map((list) => (console.log(`Dear ${list}, you are invited`)));





