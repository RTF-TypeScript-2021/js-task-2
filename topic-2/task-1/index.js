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
    for (let i = 0; i < numbers.length; i++){
        if (typeof(numbers[i]) != 'number'){
            throw new Error('Неверный ввод данных в массив');
        }
    }
    if (numbers.length == 0){
        return [];
    }
    let currenyArray = [];

    currenyArray = [...numbers].sort();
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] == currenyArray[0]){
            numbers.splice(i, 1);
            break;
        }
    }

    return numbers;
}

module.exports.removeSmallest = removeSmallest;


