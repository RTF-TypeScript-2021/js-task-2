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
    if (!numbers.length || !Array.isArray(numbers)) { //поправил код-стайл и исправил проверку длины массива на 0.
        return [];
    }

    let obj = {
        smallest : Infinity,
        index : 0
    }

    for (let i = 0; i < numbers.length; i++) {
        if (obj.smallest > numbers[i]) {
            obj.smallest = numbers[i]
            obj.index = i;
        }
    }

    const changedNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i !== obj.index) {
            changedNumbers.push(numbers[i]);
        }
    }

    return changedNumbers;
}

module.exports.removeSmallest = removeSmallest;


