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
    let resultArray = numbers;
    let min = resultArray[0];
    for(let number of resultArray){
        if(number < min) {
            min = number;
        }
    }
    resultArray.splice( resultArray.indexOf(min),1);

    return resultArray;
}

module.exports.removeSmallest = removeSmallest;


