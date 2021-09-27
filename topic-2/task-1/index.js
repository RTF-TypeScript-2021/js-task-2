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
    const min = Math.min.apply(null, numbers);
    const index = numbers.indexOf(min);
    if (numbers === []){
        return numbers;
    }
    
    return numbers.filter((e, i) => i !== index);
}

module.exports.removeSmallest = removeSmallest;


