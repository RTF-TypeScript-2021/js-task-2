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
    if(numbers.length === 0) return [];
    const minIdx = numbers.indexOf(numbers.reduce((min, el)=> {
        if(el<min){
            return el;
        }
        return min;
    }));
    return numbers.filter((_,idx)=>idx !== minIdx); 
}

module.exports.removeSmallest = removeSmallest;


