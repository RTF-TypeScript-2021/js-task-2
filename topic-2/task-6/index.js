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
    volume: (radius,height,pi=3.14)=>{
        if (radius<0 || height<0){
            throw Error(`Радиус ${radius} или ${height} меньше 0`);
        }

        return pi * radius * radius * height;
    }
}

function cylinderVolumeAccurate(pi){

    return (radius,height) => miniMathLibExtended.volume(radius,height,pi);
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;