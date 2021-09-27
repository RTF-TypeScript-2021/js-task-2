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
    let pairs = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    if (typeof group !== "string") {
        throw new Error('should be string');
    }
    let sequence = [];
    for (let bracket of group) {
        if (bracket in pairs) {
            sequence.push(bracket);
        } 
        else {
            if (pairs[sequence.pop()] !== bracket) {
                return false;
            }
        }
    }
    return true;
}

module.exports.isGroup = isGroup;