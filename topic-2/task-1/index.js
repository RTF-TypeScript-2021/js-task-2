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
    if (!numbers.isArray()){
        throw "В функцию передан не массив"
    }

    let smallest = Infinity;
    let smallestIndex = -1
    for (let el = 0; el < numbers.length; el++){
        if (smallest > Number(numbers[el])){
            smallest = Number(numbers[el]);
            smallestIndex = el;
        }
    }
    console.log(numbers.slice(0, smallestIndex))
    console.log(numbers.slice(smallestIndex + 1, numbers.length))

    return numbers.slice(0, smallestIndex).concat(numbers.slice(smallestIndex + 1, numbers.length));
}

module.exports.removeSmallest = removeSmallest;


