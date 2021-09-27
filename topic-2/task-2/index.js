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
    let result=[];
    let tmpArr=[];
    if (typeof size!=="number" ){
        throw Error(`size = null`)
    }
    if (typeof array !== "object"){
        return [];
    }
    for(let i =0; i<array.length;i++){
        tmpArr.push(array[i]);
        if (tmpArr.length==size){
            result.push(tmpArr)
            tmpArr=[];
        }
    }
    if (tmpArr.length!==0){
        result.push(tmpArr)
    }

    return result;
}


module.exports.arrayStripped = arrayStripped;
