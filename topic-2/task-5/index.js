import {miniMathLib} from "../task-4";

/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */
function accurateAreaCalc() {
    return radius => {
        if (typeof radius !== 'number' || radius < 0) {
            throw new Error('Incorrect argument')
        }

        return Math.PI.toFixed(5) * radius * radius;
    };
}


module.exports.accurateAreaCalc = accurateAreaCalc