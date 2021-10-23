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
    volume(radius, height) {
        if (typeof (radius && height) === 'number' && radius > 0 && height > 0) {
            return Math.pow(radius, 2) * this.pi * height
        }
        else {
            throw new Error('Радиус и высота должны быть положительным числом')
        }
    }
}
function cylinderVolumeAccurate(pi) {
    if (typeof pi === 'number' && pi > 0) {
        return function (radius, height) {
            return miniMathLibExtended.volume(radius, height) / miniMathLibExtended.pi * pi
        }
    } else {
        throw new Error('Число Пи должно быть положительным')
    }
}
module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;