// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 42 of 45 Questions


// QUESTION NO:42
// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magician: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);


let magicians: string[] = ["Alice", "David", "Chris"];
function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push()
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians); 
console.log("Great magicians:");
show_magicians(greatMagicians);