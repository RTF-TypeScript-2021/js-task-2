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

    const result = [...numbers];
    const lowest = Math.min(...numbers);
    const first = numbers.indexOf(lowest);
    
    if (numbers.length === 0) {
    
        return [];
    } 

    result.splice(first, 1);

    return result;
    
}



//     const lowest = Math.min(...numbers);
//     if (numbers.length > 0) {
//         for (let i = 0; i < numbers.length; i++) {
//             if (numbers[i] == lowest) {
//                 numbers.splice(i,1);

//                 return numbers;
//             }
//         }
//     } else {
//         return numbers;
//     }
// }
module.exports.removeSmallest = removeSmallest;