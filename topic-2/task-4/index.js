/**
 * Задача 4 - вычислить площадь круга
 * Вам необходимо написать функцию circleArea, которая вычисляет площадь круга
 * Сама функция должна быть сохранена внутри константы miniMathLib
 * !!! В функцию гарантированно передается число !!!
 * */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {

        if(radius<0){
            throw new Error('r < 0');
        }

        return radius*radius*miniMathLib.pi;
    }
}


module.exports.miniMathLib = miniMathLib