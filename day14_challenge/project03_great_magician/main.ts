// *Question 42:* Great Magicians: Add "the Great" to magician names.

// *Explain & TIP:* Modifying array contents within a function demonstrates 
// how functions can change data. This shows the impact of passing arrays by reference.

function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

function show_magicians(magicians) {
    console.log(magicians);
}

let magicians = ["Asim", "Ahmed", "Ovais"];

make_great(magicians); 
show_magicians(magicians);