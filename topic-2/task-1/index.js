"use strict"

/**
 * @param {Array<Number>} numbers Initial array
 * @returns Copy of initial array without first smallest num
 */

function removeSmallest(numbers) {
    let copy = Array.from(numbers);
    copy.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1);
    return copy;
}

module.exports.removeSmallest = removeSmallest;