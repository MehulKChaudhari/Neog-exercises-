var readlineSync = require('readline-sync');

//Taking the input from user of string
var string = prompt('Enter to string:');

const checkPalindromeString = (str) => {

    // finding the length of a string
    const len = string.length;

    // looping the half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome string';
        }
    }
    return 'It is a palindrome string';
}

const result  = checkPalindromeString(string);

console.log(result);


