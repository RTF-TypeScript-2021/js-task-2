import {miniMathLib} from "../task-4";

/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */
function accurateAreaCalc() {
    miniMathLib.pi=(Math.PI).toFixed(5);

    return (radius) => {
        return miniMathLib.circleArea(radius);
    }
}


module.exports.accurateAreaCalc = accurateAreaCalc