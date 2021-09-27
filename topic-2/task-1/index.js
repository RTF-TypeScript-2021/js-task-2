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
    if (typeof(numbers) !== 'object'){
        throw new Error("numbers не массив")
    }
    
    for (let i = 0; i < numbers.length; i++) {
        if(typeof(numbers[i]) !== 'number') {
            throw new Error("Массив некорректен");
        }        
    }
    
    const num = new Array();
    numbers.forEach(element => {
        num.push(element);
    });
    
    if (num.length === 0) {
        return [];
    }

    let min = Math.min(...num);
    num.splice(num.indexOf(min), 1)

    return num;
}

module.exports.removeSmallest = removeSmallest;


