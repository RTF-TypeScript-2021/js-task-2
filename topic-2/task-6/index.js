
/**
 * Задача 6 - Третье измерение
 * Круги кругами, а интересно какой объем у цилиндра.
 * Только вот тут хотелось бы ещё и точность вычислений настроить.
 * Реализуйте логику константы miniMathLibExtended
 * Константа должна содержать функцию volume
 * Подсмотрите в задачу 4
 *
 * Реализуйте функцию, которая возвращает модифицированный volume из miniMathLibExtended
 * в которую передается значение Пи, необходимое для расчетов
 * */
import {miniMathLib} from "../task-4";

const miniMathLibExtended = {
    volume: function(radius, height) {
        if (radius < 0 && height < 0) {
            throw new Error('Радиус или высота меньше 0')
        }
         
        return miniMathLib.circleArea(radius) * height;
    }
}
 
function cylinderVolumeAccurate(pi) {
    const func = function(radius, height) {
        return pi * miniMathLibExtended.volume(radius, height) / miniMathLib.pi;
    }

    return func.bind(miniMathLib);
}
 
module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;
