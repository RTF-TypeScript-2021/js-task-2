// Задача 1
// Напишите функцию, удаляющую наименьший элемент в массиве. Не изменяйте исходный массив
// Если есть несколько элементов с одинаковым значением, удалите один с меньшим индексом.
// Если вы получили пустой массив, верните пустой массив.

/**
 * 
 * @param {*} numbers массив
 * @returns массив с удаленным элементом
 */
function removeSmallest (numbers) {
    const newArray = [];

    let minElIndex = numbers.indexOf(Math.min(...numbers));
    for (let i = 0; i < numbers.length; i++) {
        if (i !== minElIndex) {
            newArray.push(numbers[i]);
        }
    }

    return newArray;
}

module.exports.removeSmallest = removeSmallest;


