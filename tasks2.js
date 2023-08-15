//Sum of Array: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// function addNumbers(a , b) {
//     console.log(a+b);
// }

// addNumbers(2, 1)


// function checksPrime(num) {
//     if (num === 1) {
//         console.log('Not Prime');
//         return;
//     }
//     for (let i = 2; i < num ; i++) {
//         if (num % i === 0) {
//             console.log('Not Prime');
//             return
//         }

//     }
//         console.log('Prime');
    
// }

// checksPrime(9)


function reverseStrings(string) {
    let charArray = string.split('');
    // console.log(charArray);
    let reverseArray = charArray.reverse();
    // console.log(reverseArray);
    let reverseString = reverseArray.join('');
    // console.log(reverseString);

    return reverseString;
}

console.log(reverseStrings("DEFF"));

