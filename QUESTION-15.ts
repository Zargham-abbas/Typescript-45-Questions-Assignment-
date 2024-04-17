// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 15 of 45 Questions


// QUESTION NO:15
// More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestss:string[]=["Ahmed","Bilal","Saqib"];
console.log("Great news!I found a bigger table"!);

// Adding more guests:
guestss.unshift("Anas");
guestss.splice(guestss.length / 2, 0 , "Taha hassan");
guestss.push("Sameer");

guestss.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner!!`)
});