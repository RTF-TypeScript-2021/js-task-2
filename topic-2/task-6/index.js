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
    volume: function (radius, height) {
        if (radius < 0) {
            throw new Error("Radius can't be negative");
        }
        if (height < 0) {
            throw new Error("Height can't be negative");
        }

        return this.pi * (radius ** 2) * height;
    }
}

function cylinderVolumeAccurate(pi){
    return function (radius, height) {
        return miniMathLibExtended.volume(radius, height) / miniMathLibExtended.pi * pi;
    }
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;