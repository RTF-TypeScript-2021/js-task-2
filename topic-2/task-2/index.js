/**
 * Задача 2
 * Допишите функцию, разбивающую массив на группы по размеру
 * Если массив не может быть разделен равномерно, последней частью
 * будут оставшиеся элементы. Порядок элементов внутри группы важен.
 * 
 * arrayStripped(['a', 'b', 'c', 'd'], 2)) => [['a', 'b'], ['c', 'd']]
 * arrayStripped([1, 'b', 5, 0, 'c'], 2)) => [[1, 'b'], [5, 0], ['c']]
 * 
 * Если разбивать на группы нечего, выведите пустой массив.1
 * 
 * @param {*} array массив на вход
 * @param {*} size из скольких элементов состоит группа
 * @returns массив разбитый на группы
*/

const arrayStripped = (array, size) => {
    const result = [];
    if (typeof(size) !== "number" || size <= 0 || array === null) {
        throw new Error ("Invalid data");
    } else if (array === undefined || typeof(array) !== "object") {
        return result;
    } else {
        const result1 = [];
        while (array.length) {
            result1.push(array.splice(0, size));
        }

        return result1;
    }
}

module.exports.arrayStripped = arrayStripped;
