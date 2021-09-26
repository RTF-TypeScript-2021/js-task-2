"use strict"
import {miniMathLib} from "../task-4";

/**
 * @returns Area of circle
 */

const accurateAreaCalc = () =>
    miniMathLib.circleArea.bind({pi : Math.PI.toFixed(5)})

module.exports.accurateAreaCalc = accurateAreaCalc