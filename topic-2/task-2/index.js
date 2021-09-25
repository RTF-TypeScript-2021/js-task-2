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
    if(!Number.isInteger(size) || size < 0 || array === null)
    {
        throw Error("The array can't be empty and there can't be a string instead");
    }
    if(!Array.isArray(array) || array === undefined)
    {
        return [];
    }
    let result = []
    for(let i = 0; i < array.length; i += size)
    {
        result.push(array.slice(i, i + size));
    }
    return result;
}

module.exports.arrayStripped = arrayStripped;
