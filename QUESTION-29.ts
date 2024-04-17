// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 29 of 45 Questions


// QUESTION NO:29
// Hello Admin: Greet users differently, especially 'admin'.
let usernames:string[] = ["admin" , "user1" , "user2" , "user3" , "user4"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("hello admin, would you like to see a status report?");
    } else {
        console.log(`hello ${username}, thank you for logging in again.`);
    }
});