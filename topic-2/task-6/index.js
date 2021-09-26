"use strict"
const { miniMathLib } = require("../task-4");

/**
 * @returns Volume of cylinder
 */

const miniMathLibExtended = {
    pi: Math.PI,
    volume: function(radius, height) {
        if ((radius || height) < 0) {
            throw new Error("Radius and height cant be negative numbers")
        }

        return this.pi * height * (radius * radius);
    }
}

/**
 * @param {Number} pi Custom pi constant
 * @returns Volume of cylinder
 */

const cylinderVolumeAccurate = pi =>
    miniMathLibExtended.volume.bind({pi : pi});

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;