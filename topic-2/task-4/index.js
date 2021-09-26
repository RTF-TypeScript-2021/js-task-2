"use strict"

/**
 * @param {Number} radius
 * @returns Circle area
 */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {
        if (radius < 0) {
            throw new Error("Radius cant be negative number");
        }

        return this.pi * (radius * radius);
    }
}

module.exports.miniMathLib = miniMathLib