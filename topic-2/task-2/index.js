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
    if (array === null || size == null || typeof size !== 'number'){
        throw "error";
    }

    if (array === undefined || !(array instanceof Array)){
        return [];
    }

    let newArr = [];
    let counter = 0;
    let group = [];

    for (let i = 0; i < array.length; i++){
        group.push(array[i])
        counter++;
        if (counter === size){
            counter = 0;
            newArr.push(group);
            group = []
        }
    }
    if (group.length > 0){
        newArr.push(group);
    }

    return newArr;
}


module.exports.arrayStripped = arrayStripped;
