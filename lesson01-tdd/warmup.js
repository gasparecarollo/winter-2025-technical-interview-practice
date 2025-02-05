// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"
//pseudo code
//input: number
//output: string
function giveAsterisksPerNum(n) {
    let numberOfAsterisks = "";

    for (let i = 0; i < n; i++) {
        numberOfAsterisks += "*";
    }
    return numberOfAsterisks;
}
console.log(giveAsterisksPerNum(5))


// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'
//pseudocode 
/*

You're on the right track! But there are a few adjustments needed for the correct syntax.

Here’s how you can get the first, middle, and last characters of a string:

First character: Use n[0], which is correct.
Middle character: The middle character is at the index Math.floor(n.length / 2) for an odd length string. For an even length string, you would need to decide how to handle it, but usually, you take the lower index for simplicity.
Last character: You use n[n.length - 1], which is also correct.
Corrected version:
javascript
Copy
Edit
let first = n[0];  // First character
let middle = n[Math.floor(n.length / 2)];  // Middle character
let last = n[n.length - 1];  // Last character
*/
function convertFirstCharAndLastCharToAsterisk(n) {

    let convertedStr = "";

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            convertedStr += "*";
        } else if (i === n - 1) {
            convertedStr += "*";
        } else {
            convertedStr + " ";
        }
    }
    return convertedStr;
}

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

function createNLinesOfMChars(n, m) {
    let convertedStr = "";
    for (let i = 0; i < n; i++) {
        if (n === 0 || i === -1) {
            convertedStr += "*".repeat(m)
        } else if (n === n.Math.floor(n.length / 2)) {
            convertedStr += "*" + " ".repeat(m - 2) + "*";
        }
        convertedStr += "/n";
    }
    return convertedStr;
}



// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
