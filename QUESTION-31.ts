// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 31 of 45 Questions


// QUESTION NO:31
// Checking Usernames: Ensure uniqueness in usernames.
let current_users: string[] = ["user1","admin","user3","user4","user5"];
let new_users: string[] = ["User2","User6","User7","Admin","User8"];
new_users.forEach(newUser => {
    if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }else {
        console.log(`${newUser} is available`);
    }
});