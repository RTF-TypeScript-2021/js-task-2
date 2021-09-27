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
    pi: 3.14,
    volume: function(r, h) {
        if (r <= 0 || h <= 0) {
            throw Error;
        }

        return r ** 2 * h * miniMathLibExtended.pi;
    }
}

function cylinderVolumeAccurate(pi){
    miniMathLibExtended.pi = pi;

    return (radius, height) => {
        return miniMathLibExtended.volume(radius, height);
    }
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;