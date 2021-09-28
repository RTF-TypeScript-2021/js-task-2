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
    let newArray = numbers.filter(item => typeof item === 'number');
    let resultArray = [];
    const minElement = Math.min(...newArray);
    const minIndex = numbers.indexOf(minElement);
    resultArray = numbers.slice(0, minIndex).concat(numbers.slice(minIndex+1));
    return resultArray;
 }

module.exports.removeSmallest = removeSmallest;


