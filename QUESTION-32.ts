// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 32 of 45 Questions


// QUESTION NO:32
// Ordinal Numbers: Display numbers with their ordinal suffixes.
let numbers: number[] = [1,2,3,4,5,6,7,8,9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});