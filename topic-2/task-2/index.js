/**
 * Задача 2
 * Допишите функцию, разбивающую массив на группы по размеру
 * Если массив не может быть разделен равномерно, последней частью
 * будут оставшиеся элементы. Порядок элементов внутри группы важен.
 * 
 * arrayStripped(['a', 'b', 'c', 'd'], 2)) => [['a', 'b'], ['c', 'd']]
 * arrayStripped([1, 'b', 5, 0, 'c'], 2)) => [[1, 'b'], [5, 0], ['c']]
 * 
 * Если разбивать на группы нечего, выведите пустой массив.
 * 
 * @param {*} array массив на вход
 * @param {*} size из скольких элементов состоит группа
 * @returns массив разбитый на группы
*/
const arrayStripped = (array, size) => {
    if (array === null || !Number.isInteger(size) || size < 0) {
        throw new Error("The input data has wrong type")
    } else if (array === undefined || array.length === 0 || typeof array === "string") {
        return [];
    } else {
        let curSize = 0;
        let curGroup = [];
        let result = [];

        for (let i = 0; i < array.length; i++) {
            if (curSize === size) {
                //result.splice(-1, 0, ...result.splice(-1, 1, curGroup))
                result.push(curGroup);
                curGroup = [];
                curSize = 0;
            }

            curSize++;
            curGroup.push(array[i]);
        }

        //result.splice(-1, 0, ...result.splice(-1, 1, curGroup));

        return result.push(curGroup);
    }
}

module.exports.arrayStripped = arrayStripped;
