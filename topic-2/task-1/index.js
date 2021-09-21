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

    const firstItemType = typeof(numbers[0]);
    const isCompared = item => {
        return !isNaN(item) && item !== undefined && item !== null && typeof(item) === firstItemType;
    };
    if (numbers.some(item => !isCompared(item))){
        throw new Error('Compare error. Impossible correctly find smallest element in the array.');
    }

    let [index, minValue] = [0, numbers[0]];
    numbers.forEach((item, i) => {
        if (minValue > item){
            [minValue, index] = [item, i];
        }
    })

    return numbers.slice(0, index).concat(numbers.slice(index + 1, numbers.length));
}

module.exports.removeSmallest = removeSmallest;


