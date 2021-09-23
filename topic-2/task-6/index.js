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

const calculateVolume = function (radius, height){
    const isCorrectParam = (param) => Number.isFinite(param) && param >= 0;
    if (!isCorrectParam(radius)) {
        throw new Error('Argument error. Argument radius must be a not negative number.');
    }
    if (!isCorrectParam(height)) {
        throw new Error('Argument error. Argument height must be a not negative number.');
    }

    return height * this.pi * radius * radius;
}

const miniMathLibExtended = {
    pi: 3.14,
    volume: calculateVolume
}

function cylinderVolumeAccurate(pi){
    const newConstants = {
        pi: pi
    };

    return miniMathLibExtended.volume.bind(newConstants);
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;