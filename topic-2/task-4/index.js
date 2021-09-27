/**
 * Задача 4 - вычислить площадь круга
 * Вам необходимо написать функцию circleArea, которая вычисляет площадь круга
 * Сама функция должна быть сохранена внутри константы miniMathLib
 * !!! В функцию гарантированно передается число !!!
 * */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {
        if (radius < 0){
            throw Error('Фу, минус, убери.');
        }
        if (typeof radius !== 'number'){
            throw Error('Я с незнакомыми типами не разговариваю.');
        }

        return radius ** 2 * miniMathLib.pi;
    }
}


module.exports.miniMathLib = miniMathLib