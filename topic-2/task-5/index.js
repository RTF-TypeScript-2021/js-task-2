/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */
function accurateAreaCalc() {
    return r => {
        if (r < 0) {
            throw new Error();
        }

        return 3.14159 * r ** 2;
    }
}


module.exports.accurateAreaCalc = accurateAreaCalc