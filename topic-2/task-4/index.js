/**
 * Задача 4 - вычислить площадь круга
 * Вам необходимо написать функцию circleArea, которая вычисляет площадь круга
 * Сама функция должна быть сохранена внутри константы miniMathLib
 * !!! В функцию гарантированно передается число !!!
 * */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {
        if (typeof radius !== 'number') {
            return;
        }

        if (radius <= 0) {
            throw new Error('Radius must be bigger than zero');
        }

        return this.pi * radius ** 2;
    }
}



module.exports.miniMathLib = miniMathLib
