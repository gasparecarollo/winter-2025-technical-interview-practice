/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  //input: string
  //output: boolean
  //remove spaces, punctuation, and capitalization
  //compare the original string with the reverse string
  //return true if they are the same, false otherwise

  ///[^a-zA-Z0-9]/g, ""
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanStr);
  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(reversedStr);
  // your code here
  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("r,a,c,e,c,a,r"))
module.exports = isPalindrome;
