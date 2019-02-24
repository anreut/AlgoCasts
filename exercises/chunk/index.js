// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// v.1
function chunk(array, size) {
    //create a main array
    const chunked = [];

    // iterate throw passed array
    for (let element of array) {
        // get the last element of chunked array  [[element], [element]]
        const last = chunked[chunked.length - 1];
        // if no last element or element.length is full === size
        // create an array with element and push it into initial array
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

// v.2
function chunk(array, size) {
    // main array
    const chunked = [];
    // starting point for slicing
    let index = 0;
    while (index < array.length) {
        // will slice first elements from index to index+size
        chunked.push(array.slice(index, index + size));
        // then move to other element on position starting at index+size
        index += size;
    }
    return chunked;
}


module.exports = chunk;
