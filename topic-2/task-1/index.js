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
    //Теперь точно не пустит массив состоящий не из чисел!
    for (let obj of numbers){
        if (typeof obj != "number"){
            throw Error("Массив должен состоять из чисел!")
        }
    }
    if (numbers != []){
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


