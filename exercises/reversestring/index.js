// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// v.1
function reverse(str) {
    return str.split("").reverse().join("");
}

// v.2
function reverse(str) {
    let newStr = "";
    for (let i = str.length -1; i >= 0; i-- ) {
        newStr += str[i]; //olleH
        //newStr = newStr + str[i]; //olleH
        //newStr = str[i] + newStr; //Hello
    }
    return newStr;
}

// v.3
function reverse(str) {
    let newStr = "";
    for (let character of str) {
        newStr = character + newStr;
    }
    return newStr;
}

// v.4
function reverse(str) {
    return str.split("").reduceRight((reversed, character) => reversed + character);
}

// v.5
function reverse(str) {
    return str.split("").reduce((reversed, character) => {
        return character + reversed; // 'olleh'
        // return reversed + character // 'hello'
    }, "");
}

// v.5
function reverse(str) {
    if (str === "")
        return "";
    else
        return reverse(str.substr(1)) + str.charAt(0);
}
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
// "hello".substr(1); // "ello"

// The charAt() method returns the specified character from a string.
// "hello".charAt(0); // "h"

module.exports = reverse;
