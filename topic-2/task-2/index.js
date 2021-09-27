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
    if (typeof (size) !== "number") {
        throw Error;
    }

    if (!Array.isArray(array)){
        return [];
    }

    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let innerArray = [];
        for (let j = i; j < i + size; j++) {
            if (j >= array.length) {
                break;
            }
            innerArray.push(array[j]);
        }
        result.push(innerArray);
    }

    return result;
}


module.exports.arrayStripped = arrayStripped;
