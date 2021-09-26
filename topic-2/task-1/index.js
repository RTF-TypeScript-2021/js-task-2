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
        throw Error;
    }

    if (numbers.length === 0){
        return numbers;
    }

    let minValue = Infinity;
    let minIndex = -1;

    let newNumbers = numbers.slice(0);

    for (let i = 0; i < newNumbers.length; i++){
        if (typeof (newNumbers[i]) !== "number"){
            throw Error;
        }else{
            if (newNumbers[i] < minValue){
                minValue = newNumbers[i];
                minIndex = i;
            }
        }
    }

    newNumbers.splice(minIndex, 1)

    return  newNumbers;  
}

module.exports.removeSmallest = removeSmallest;


