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
    if (numbers.length === 0) {
        return new Array();
    }
    let minNumber = Infinity;
    let minIndex = -1;
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]<minNumber){
            minIndex=i;
            minNumber=numbers[i];
        }
    }
    numbers.splice(minIndex, 1);

    return numbers;
}

module.exports.removeSmallest = removeSmallest;


