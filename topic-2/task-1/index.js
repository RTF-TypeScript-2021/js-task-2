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
    if (numbers.length === 0){
        return numbers;
    }
    let minEl = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < minEl){
            minEl = numbers[i];
            minIndex = i;
        }
    }
    let resultArray = numbers.slice();
    resultArray.splice(minIndex, 1);
    
    return resultArray;
}

module.exports.removeSmallest = removeSmallest;


