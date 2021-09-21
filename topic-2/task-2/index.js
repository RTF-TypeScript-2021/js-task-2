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
    if(array === null || size === null || typeof(size) !== 'number'){
        throw new Error('');
    }
    let resultArray = [];
    let bufferArray = [];
    if(array !== undefined && typeof(array) === 'object'){
        for( let i = 0; i < array.length; i = i+size){
            for(let j = 0; j < size; j++){
                if(i+j < array.length){
                    bufferArray.push(array[i+j])
                }
            }
            resultArray.push(bufferArray);
            bufferArray = []
        }
    }

    return resultArray;
}


module.exports.arrayStripped = arrayStripped;
