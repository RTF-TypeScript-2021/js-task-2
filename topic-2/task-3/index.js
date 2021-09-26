"use strict"

/**
 * @param {String} group Brackets group
 * @returns Group valid positioning check result
 */

function isGroup(group) {
    let borders = new Array;
    const opening = new Set(['[', '{', '('])
    const bracketPairs = {']' : '[', '}' : '{', ')' : '('}

    for (let bracket of group) {
        if (opening.has(bracket)){
            borders.push(bracket)
        } else if (borders[borders.length - 1] === bracketPairs[bracket]) {
            borders.pop();
        } else { 
            return false;
        }
    };

    return true;
}

module.exports.isGroup = isGroup;