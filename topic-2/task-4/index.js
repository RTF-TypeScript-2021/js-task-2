/**
 * Задача 4 - вычислить площадь круга
 * Вам необходимо написать функцию circleArea, которая вычисляет площадь круга
 * Сама функция должна быть сохранена внутри константы miniMathLib
 * !!! В функцию гарантированно передается число !!!
 * */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {
        if (typeof radius !== 'number' || radius < 0) {
            throw new Error(`Incorrect argument: radius = ${radius}, type = ${typeof radius}`);
        }

        return this.pi * radius * radius;
    }
}


module.exports.miniMathLib = miniMathLib