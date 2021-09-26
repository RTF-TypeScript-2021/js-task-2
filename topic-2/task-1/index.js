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
    if(numbers.lenght == 0){
        return numbers;
    }
    numbers.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1);

    return numbers;
}

module.exports.removeSmallest = removeSmallest;


