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
    const checkingArray = [];

    for (let i = 0; i < group.length; i++) {

        const checkingArrayLastElement = checkingArray[checkingArray.length - 1];

        if (
            group[i] === '(' ||
            group[i] === '{' ||
            group[i] === '['
        ) {
            checkingArray.push(group[i]);
        } else if (
            (checkingArrayLastElement === '(' && group[i] === ')') ||
            (checkingArrayLastElement === '{' && group[i] === '}') ||
            (checkingArrayLastElement === '[' && group[i] === ']')
        ) {
            checkingArray.pop();
        } else {
            return false;
        }
    }

    return checkingArray.length ? false : true;
}

module.exports.isGroup = isGroup;
