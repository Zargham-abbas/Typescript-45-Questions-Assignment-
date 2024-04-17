// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 36 of 45 Questions


// QUESTION NO:36
// Large Shirts: Default values in make_shirt().
function shirt_make(size:string = "large" , message:string = "I love Typescript") {
    console.log(`making a ${size} shirt with a message ${message} printed on it`);
}

shirt_make();
shirt_make("medium");
shirt_make("large","Typescript is great");