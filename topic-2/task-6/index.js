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
    volume: function(radius, height) {
        if (typeof radius !== 'number' || typeof height !== 'number') {
            return;
        }

        if (radius <= 0 || height <= 0) {
            throw new Error('Radius and height must be bigger than zero');
        }

        return this.pi * radius ** 2 * height;
    }
}

function cylinderVolumeAccurate(pi){
    return miniMathLibExtended.volume.bind({pi: pi});
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;
