/**
 * Задача 2
 * Допишите функцию, разбивающую массив на группы по размеру
 * Если массив не может быть разделен равномерно, последней частью
 * будут оставшиеся элементы. Порядок элементов внутри группы важен.
 * 
 * arrayStripped(['a', 'b', 'c', 'd'], 2)) => [['a', 'b'], ['c', 'd']]
 * arrayStripped([1, 'b', 5, 0, 'c'], 2)) => [[1, 'b'], [5, 0], ['c']]
 * 
 * Если разбивать на группы нечего, выведите пустой массив.
 * 
 * @param {*} array массив на вход
 * @param {*} size из скольких элементов состоит группа
 * @returns массив разбитый на группы
*/
const arrayStripped = (array, size) => {
//       expect(arrayStripped([1, 2, 3, 4], 1)).toEqual([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ])
//     expect(arrayStripped(['a', 'b', 'c', 'd'], 3)).toEqual([ [ 'a', 'b', 'c' ], [ 'd' ] ]);
//     expect(arrayStripped([], 2)).toEqual([ ]);
//     expect(arrayStripped(undefined, 5)).toEqual([]);
//     expect(() => {arrayStripped(null, null)}).toThrow();
//     expect(() => {arrayStripped([1, 5, 7], null)}).toThrow();
//     expect(arrayStripped('text', 5)).toEqual([]);
//     expect(() => {arrayStripped(5, 'text')}).toThrow();

    if (typeof(size) != 'number' || size < 1 || typeof(array) === null){
        throw new Error();
    }
    if (!Array.isArray(array) || array.length == 0){
        return [];
    }
    let resultArray = [];

    for (let i = 0; i < array.length; i += size){
        resultArray.push(array.slice(i, i + size));
    }

    return resultArray;
}


module.exports.arrayStripped = arrayStripped;
