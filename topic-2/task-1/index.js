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
    if ((numbers != []) && (typeof numbers[0] == "number")){ // Исправил условие, теперь также мы проверям является ли массив массивом чисел
        return createArray(numbers);
    }
    else {
        return numbers;
    }
}

function createArray(numbers){
    let array = [];
    let count = 0;
    let min = Math.min(...numbers);
    for (let obj of numbers){
        if ((obj != min)){
            array.push(obj);
        }
        else if (count == 1){
            array.push(obj);
        }
        else {
            count += 1;
        }
    }
    return array;
}

module.exports.removeSmallest = removeSmallest;


