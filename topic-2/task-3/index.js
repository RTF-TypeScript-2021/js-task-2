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
    let bracketFlag = -1;
    let squareBracketFlag = -1;
    let curlyBracketFlag = -1;

    for (let i = 0; i < group.length; i++) {
        if (group[i] === "(") {
            bracketFlag = i;
        } else if (group[i] === "[") {
            squareBracketFlag = i;
        } else if (group[i] === "{") {
            curlyBracketFlag = i;
        } else if (group[i] === ")") {
            if (bracketFlag > squareBracketFlag && bracketFlag > curlyBracketFlag) {
                bracketFlag = -1;
            } else {
                return false;
            }
        } else if (group[i] === "]") {
            if (squareBracketFlag > bracketFlag && squareBracketFlag > curlyBracketFlag) {
                squareBracketFlag = -1;
            } else {
                return false;
            }
        } else if (group[i] === "}") {
            if (curlyBracketFlag > squareBracketFlag && curlyBracketFlag > bracketFlag) {
                curlyBracketFlag = -1;
            } else {
                return false;
            }
        }
    }

    return true;
}

module.exports.isGroup = isGroup;