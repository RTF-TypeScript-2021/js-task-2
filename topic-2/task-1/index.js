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
    let fltrArr = numbers.filter(value => typeof value === 'number');
    let result =[];
    const smallElement = Math.min(...fltrArr);
    const smallIndex = numbers.indexOf(smallElement);
    result = numbers.slice(0, smallIndex).concat(numbers.slice(smallIndex+1));
    return result;

}

module.exports.removeSmallest = removeSmallest;


