// Задача 1
// Напишите функцию, удаляющую наименьший элемент в массиве. Не изменяйте исходный массив
// Если есть несколько элементов с одинаковым значением, удалите один с меньшим индексом.
// Если вы получили пустой массив, верните пустой массив.
function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return numbers;
    }
    let minIndex = numbers.indexOf(Math.min.apply(null, numbers));
    let result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1, numbers.length))

    return result;
}

module.exports.removeSmallest = removeSmallest;


