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
    if (numbers.length == 0) {
        return numbers;
    }
    let obj = {
        smallest : Infinity,
        index : 0
    }
    for (let i = 0; i < numbers.length; i++) {
        if (obj.smallest > numbers[i]) {
            obj.smallest = numbers[i]
            obj.index = i;
        }
    }
    let changedNummbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i != obj.index) {
            changedNummbers.push(numbers[i]);
        }
    }
    return(changedNummbers);

}

module.exports.removeSmallest = removeSmallest;


