// *Question 30:* Hello Admin: Greet users differently, especially 'admin'.

// *Explain & TIP:* Loop through usernames to personalize greetings
// . This introduces looping and conditional logic together.
let greet: string[] = ["admin", "user01", "user02"];
greet.forEach(greets => {
    if (greets === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`"Hello ${greets} thank you for logging in again."`)
       }
});
 