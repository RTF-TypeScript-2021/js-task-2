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
    let lowest = numbers[0];
    numbers.forEach(number => {
        if (number < lowest) {
            lowest = number;
        }
    });
    let index = numbers.indexOf(lowest);
    return numbers.filter((element, i) => i !== index);
}

module.exports.removeSmallest = removeSmallest;


