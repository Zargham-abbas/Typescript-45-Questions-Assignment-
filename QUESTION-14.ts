// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 14 of 45 Questions


// QUESTION NO:14
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttend = "Arsalan";
console.log(`${unableToAttend} can't make it to attend`);

// Replace the Guest:
let newGuest = "Saqib";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations:
guests.forEach(guest => {
    console.log(`Dear ${guest} ,would you like to join me for dinner?`)
});