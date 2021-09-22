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
    if (typeof(group) !== 'string' && !(group instanceof String)){
        return false;
    }
    const pairs = {'(': ')', '[': ']', '{': '}'};
    const closedBrackets = Object.values(pairs);
    const stack = [];
    for (let char of group){
        if (char in pairs){
            stack.push(char);
        } else if (closedBrackets.indexOf(char) !== -1){
            if (stack.length === 0 || pairs[stack.pop()] !== char){
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

module.exports.isGroup = isGroup;