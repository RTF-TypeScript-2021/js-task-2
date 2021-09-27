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
    const minValue = Math.min(...numbers);
    const firstMinElement = numbers.indexOf(minValue);
    const resultArray = [...numbers];

    if (numbers.length === 0) {
        return [];
    }

    resultArray.splice(firstMinElement, 1);

    return resultArray;
}

module.exports.removeSmallest = removeSmallest;


