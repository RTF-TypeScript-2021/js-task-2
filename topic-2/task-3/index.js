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
function isGroup (group) {
    if (group === null) {
        throw new Error("Group can't be null");
    }

    const bracketPairs = {'[': ']', '{': '}', '(': ')'};
    const brackets = [];

    for (let i of group) {
        if (i in bracketPairs) {
            brackets.push(i);
        } else if (bracketPairs[brackets.pop()] !== i) {
            return false;
        }
    }

    return !brackets.length;
}

module.exports.isGroup = isGroup;