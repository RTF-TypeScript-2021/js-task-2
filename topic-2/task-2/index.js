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
    if (!Number.isInteger(size) || size === null ) { //до этого была проврка на NaN, теперь сделал через функцию  isInteger.
        throw Error();
    }

    if (!Array.isArray(array) || !array.length) {
        return [];
    }
    
    const groupArray = [];
    groupArray.push([]);

    let indexGroup = 0;
    for (let i = 0; i < array.length; i++) {
        if (groupArray[indexGroup].length === size) {
            indexGroup++;
            groupArray.push([]);
        }   
        groupArray[indexGroup].push(array[i])
    }

    return groupArray;
}


module.exports.arrayStripped = arrayStripped;
