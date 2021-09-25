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
    if (numbers.length == 0)
    {
        return [];
    }
    let minIndex = 0;
    let minNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] < minNumber)
        {
            minNumber = numbers[i];
            minIndex = i;
        }
    }
    return numbers.filter((x, i) => i !== minIndex);
}

module.exports.removeSmallest = removeSmallest;


