// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 16 of 45 Questions


// QUESTION NO:16
//  Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guests1:string[] =["Ahmed,bilal,saqib,taha,sameer"]
console.log("unfortunately,i can only invite two people for dinner.");
while (guests1.length >2) {
    let removedGuest = guests1.pop();
    console.log(`sorry, ${removedGuest}, I can only invite two people for dinner`);
}

guests1.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}); 

guests1.splice(0, guests1.length);
console.log(guests1);