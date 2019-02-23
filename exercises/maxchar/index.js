// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    let maxValue = 0;
    let maxChar = "";

    // iterate over str and transform it into an object
    // obj = {"h": 1,"e": 1, "l": 2, "o": 1}
    for (let char of str) {
        if (obj.hasOwnProperty(char)) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
    // iterate over created object and compare key and values with maxValue
    // maxValue = 0  // maxChar = ""
    // maxValue = 1  // maxChar = "H"
    // maxValue = 3 // maxChar = "l" -> return maxChar
    for (let char in obj) {
        if (obj[char] > maxValue) {
            maxValue = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
