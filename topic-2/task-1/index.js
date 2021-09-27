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

    let tmp = Array.from(numbers);
    let min=Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    //let max=Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < tmp.length;i++){
        if (typeof tmp[i] !== "number"){
            throw Error("БрАт НеТъ чИсЛа в МасСиВе")
        }
        if (min > numbers[i]){
            min=numbers[i]
            minIndex=i;
        }
    }
    tmp.splice(minIndex,1);

    return tmp;
}
console.log(removeSmallest([2, 3, 1, 4, 8]))
module.exports.removeSmallest = removeSmallest;


