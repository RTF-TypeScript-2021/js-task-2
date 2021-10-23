// Задача 1
// Напишите функцию, удаляющую наименьший элемент в массиве. Не изменяйте исходный массив
// Если есть несколько элементов с одинаковым значением, удалите один с меньшим индексом.
// Если вы получили пустой массив, верните пустой массив.

/**
 * 
 * @param {*} numbers массив
 * @returns массив с удаленным элементом
 */
function removeSmallest(numbers) {
    if (Array.isArray(numbers)) {
        let arr = numbers //Исходя из условий задачи, что исходный массив нельзя изменять
        if (arr.every(elem => typeof elem === 'number')) {
            let a = +Infinity
            for (let i = 0; i < arr.length; i++) {
                if (a > arr[i]) {
                    a = arr[i]
                }
            }
            let index = arr.indexOf(a)
            arr.splice(index, 1)
            return arr
        }
        else if (arr === []) {
            return arr
        }
        else {
            throw new Error('Ожидался массив чисел, либо пустой массив')
        }
    }
    else {
        throw new Error('Ожидался массив')
    }
}
module.exports.removeSmallest = removeSmallest;


