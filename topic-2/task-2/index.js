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
    if (Number.isInteger(size)) {
        if (!Array.isArray(array) || array.length == 0) {
            return []
        }
        else if (Array.isArray(array)) {
            const a = array.length / size
            let arr = []
            for (let i = 0; i < a; i++) {
                let arr_1 = []
                for (let b = 0; b < size; b++) {
                    if (array.length === 0) {
                        break
                    }
                    arr_1.push(array[0])
                    array.splice(0, 1)
                }
                arr.push(arr_1)
            }
            return arr
        }
    }
    else {
        throw new Error('Ожидался массив и целосчисленный разделитель')
    }
}
module.exports.arrayStripped = arrayStripped;
