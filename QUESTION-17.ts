// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 17 of 45 Questions


// QUESTION NO:17
// Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
let places: string[] = ["new zealand" , "Pakistan" , "china" , "Japan" , "America"]
console.log("Original order:", places);
console.log("Alphabetical order:" ,[...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:" , [...places].sort().reverse());
console.log("Original order:", places);

places.reverse();
console.log("Reserved order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:" , places);

places.reverse();
console.log("Reverse alphabetical order:" , places);