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
    if (!Array.isArray(numbers)) {
        throw new Error('Argument "numbers" is not an Array');
    }
    if (numbers.length == 0) {
        return new Array();
    }
    let minIndex = 0;
    let minValue = numbers[minIndex];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (typeof numbers[i] !== 'number') {
            throw new Error('Array has element with incorrect type: ' + typeof numbers[i]);
        }
        if (numbers[i] < minValue) {
            minValue = numbers[i];
            minIndex = i;
        }
    }
    let result = numbers.slice(0);
    result.splice(minIndex, 1);

    return result;
}

module.exports.removeSmallest = removeSmallest;