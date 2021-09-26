/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */

import {miniMathLib} from "../task-4/index.js";
function accurateAreaCalc() {
    const tempP = {
        p : (Math.PI).toFixed(5)
    }

    return miniMathLib.circleArea.bind(tempP);
}

module.exports.accurateAreaCalc = accurateAreaCalc