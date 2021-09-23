"use strict"

/**
 * @param {Array} array Initial array
 * @param {Array} size Strip size
 * @returns Groups array
*/

const arrayStripped = (array, size) => {
    if(array === null || typeof size !== 'number') {
        throw new Error("Invalid params were caught");
    }
    if (array === undefined || !Array.isArray(array)) {
        return [];
    }
    
    let copy = Array.from(array);
    let result = new Array;
    for (let i = 0; i < array.length; i += size) {
        result.push(copy.splice(0, size));
    }

    return result;
}

module.exports.arrayStripped = arrayStripped;
