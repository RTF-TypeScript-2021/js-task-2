const {miniMathLib} = require("../task-4");
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
    volume: function(radius, height){
        if(radius < 0 || height < 0 || !Number(radius) || !Number(height)){
            throw "input data is incorrect";
        }

        return miniMathLib.circleArea(radius) * height;
    }
}

function cylinderVolumeAccurate(pi){
    if(!Number(pi) || Math.floor(pi) !== 3){
        throw "pi is incorrect";
    }

    return function(radius, height){
        return pi * miniMathLibExtended.volume(radius, height) / miniMathLib.pi;
    }
}

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;