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
    if (!Array.isArray(numbers)){
        throw new Error('Argument error. Argument numbers must be an array.');
    }

    let [index, minValue] = [0, numbers[0]];
    numbers.forEach((number, i) => {
        if (typeof(number) !== 'number' && !(number instanceof Number)){
            throw new Error('Type error. All array elements must be numbers.');
        }
        if (minValue > number){
            [minValue, index] = [number, i];
        }
    })

    return numbers.filter((_, i) => i !== index);
}

module.exports.removeSmallest = removeSmallest;


