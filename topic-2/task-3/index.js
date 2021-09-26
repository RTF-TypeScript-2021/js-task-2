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
    const brackets = {
        open: [ '(', '[', '{' ],
        close: {
            ')': '(',
            ']': '[',
            '}': '{'
        }
    }
    const stack = [];
    for (let i = 0; i < group.length; i++) {
        let current = group[i];
        if (brackets.open.includes(current)){
            stack.push(current);
        }
        if (current in brackets.close) {
            if (stack.length === 0) {
                return false;
            }
            if (brackets.close[current] === stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}

module.exports.isGroup = isGroup;