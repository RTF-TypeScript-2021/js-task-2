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
    const res = [];
    let flag = true;
    const min = Math.min(...numbers);
    numbers.forEach((value) => {
        if (value === min && flag) {
            flag = false;

            return;
        }
        res.push(value);
    })

    return res;
}

module.exports.removeSmallest = removeSmallest;


