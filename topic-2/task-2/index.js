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
    if (!Number.isInteger(size)) {
        throw new Error();
    }
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }
    let miniarray = [];
    let arrays = [];
    for (let i = 0; i < array.length; i++) {
        miniarray.push(array[i]);
        if (miniarray.length === size) {
            arrays.push(miniarray);
            miniarray = [];
        }
        if (i === array.length - 1) {
            if (miniarray.length !== 0) {
                arrays.push(miniarray);
            }
            return arrays;
        }
    }
}


module.exports.arrayStripped = arrayStripped;
