/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    if (typeof group === 'string') {
        if (group == '') {
            return true
        }
        let arr = group.split('')
        let a = arr.toString()
        let b = arr.length
        let d = Array.from(new Set(arr)).toString()
        if (arr.every(elem => elem === '(' || ')' || '[' || ']' || '{' || '}') && b % 2 == 0 && d === a && arr[0] != ')' && arr[0] != ']' && arr[0] != '}') {
            for (i = 0; i < b; i++) {
                if (group[i] === '(') {
                    if (group[b - 1 - i] !== ')' && group[i + 1] !== ')') {
                        return false
                    }
                }
                else if (group[i] === '[') {
                    if (group[b - 1 - i] !== ']' && group[i + 1] !== ']') {
                        return false
                    }
                }
                else if (group[i] === '{') {
                    if (group[b - 1 - i] !== '}' && group[i + 1] !== '}') {
                        return false
                    }
                }
            }
            return true
        }
        else return false
    }
    else throw new Error('Ожидалась строка')
}
module.exports.isGroup = isGroup;