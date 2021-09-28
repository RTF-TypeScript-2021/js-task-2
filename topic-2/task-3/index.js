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
    if (group.length===0) {
        return true;
    }
    let stack = []
    let pair = ["[","]","{","}","(",")"]
    for (let i=0; i<group.length/2; i++) {
        stack.push(group[i]);
    }
    for (let i=group.length / 2; i < group.length; i++) {
        if (stack.pop()!==pair[pair.indexOf(group[i])-1] || pair.indexOf(group[i]) === 0) {
            return false;
        }
    }

    return true;
}

module.exports.isGroup = isGroup;