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
    let resultArray = [];
    if (!Array.isArray(numbers)) {
        throw new Error('Invalid array');
    }
    let minIndex = 0;
    let minElement = numbers[minIndex];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (typeof numbers[i] === 'number') {
            if (numbers[i] < minElement) {
                minElement = numbers[i];
                minIndex = i;
            }
        }
        else {
            throw new Error ('Array is not an array of numbers')
        }
    };
    if (numbers.length === 0) {
        return resultArray;
    }
    return numbers.filter((arr, index) => index !== minIndex);
    }

module.exports.removeSmallest = removeSmallest;


