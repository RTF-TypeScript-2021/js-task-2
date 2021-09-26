const { miniMathLib } = require("../task-4");

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
const miniMathLibExtended = {
    volume: function(radius, height) {
        if (height < 0 || radius < 0){
            throw Error('Опять за своими минусами, просила же...');
        }

        return height * miniMathLib.circleArea(radius);
    }
}

function cylinderVolumeAccurate(pi){
    return function(height, radius) {
        return miniMathLibExtended.volume(height, radius) / miniMathLib.pi * pi;
    }
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;