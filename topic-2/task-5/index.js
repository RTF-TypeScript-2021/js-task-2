import {miniMathLib} from "../task-4";

/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */
function accurateAreaCalc() {
    const calculator = function (radius) {
        return Math.PI * miniMathLib.circleArea(radius) / miniMathLib.pi;
    }

    return calculator.bind(miniMathLib);
}


module.exports.accurateAreaCalc = accurateAreaCalc;
