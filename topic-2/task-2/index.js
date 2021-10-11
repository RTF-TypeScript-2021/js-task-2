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
    if (array === null || size == null || !Number.isInteger(size)) {
        throw new Error("Method gets incorrect data");
    }

    if (array === undefined || !Array.isArray(array)) {
        return [];
    }

    const arrayForReturn = [];
    let arrayBuffer = [];
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        arrayBuffer.push(array[i]);
        counter++;
        if (counter === size) {
            counter = 0;
            arrayForReturn.push(arrayBuffer);
            arrayBuffer = [];
        }
    }

    if (arrayBuffer.length != []) {
        arrayForReturn.push(arrayBuffer);
    }

    return arrayForReturn;
}

module.exports.arrayStripped = arrayStripped;
