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
        return [];
    }

    let min = Infinity;
    let indexMin = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            indexMin = i;
        }
    }

    const array1 = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (i != indexMin) {
            array1.push(numbers[i]);
        }
    }
    
    return array1;
}

module.exports.removeSmallest = removeSmallest;
