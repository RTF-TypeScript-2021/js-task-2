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
    if (array === null || size === null || !Number.isInteger(size)) {
        throw new Error();
    }
    const res = [];
    if (array !== undefined && size > 0 && typeof array !== 'string') {
        for (let i = 0; i < Math.ceil(array.length / size); i++) {
            res.push(array.slice((i*size), (i*size) + size));
        }
    }

    return res;
}


module.exports.arrayStripped = arrayStripped;
