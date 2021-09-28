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
    if (typeof group !== "string"){
        throw new Error();
    }

    let stack = [];
    for (let e of group) {
        switch (e) {

        case '{':
        case '[':
        case '(':
            stack.push(e);
            break;

        case ']':
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== '[') {
                return false;
            }
            break;

        case ')':
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== '(') {
                return false;
            }
            break;
        case '}':
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== '{') {
                return false;
            }
            break;
        default:
            return false;
        }
    }

    return stack.length === 0;
}

module.exports.isGroup = isGroup;