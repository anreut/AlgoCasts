// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//v.1
function capitalize(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
    }
    return arr.join(" ");
}

//v.2
function capitalize(str) {
    return str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }).join(" ");
}

//v.3
function capitalize(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

//v.4
function capitalize(str) {
    const words = [];
    for (let word of str.split(" ")) {
        words.push( word[0].toUpperCase() + word.slice(1) );
    };
    return words.join(" ");
}

module.exports = capitalize;
