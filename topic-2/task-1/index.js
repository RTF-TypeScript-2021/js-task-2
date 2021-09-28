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
    if (!Array.isArray(numbers) || numbers.forEach(item => item !== "number")){
        throw new Error();
    }

    if (numbers.length === 0){
        return numbers;
    }

    let indexMinItem = numbers.indexOf(Math.min(...numbers));

    return  numbers.slice(0, indexMinItem).concat(numbers.slice(indexMinItem + 1, numbers.length));
}

module.exports.removeSmallest = removeSmallest;


