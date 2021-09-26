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

    let groupArray =[];
    for(let j = 0; j < array.length; j = j + size){
        let group = [];
        for (let i = j; i < j + size; i++){
            if(i >= array.length){
                break;
            }
            group.push(array[i]);
        }
        groupArray.push(group);
    }

    return groupArray;
}


module.exports.arrayStripped = arrayStripped;
