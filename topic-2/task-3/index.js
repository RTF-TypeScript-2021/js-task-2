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
        throw Error;
    }

    let gates = [];
    for (let gate of group) {
        if (gate === '(' || gate === '[' || gate === '{') {
            gates.push(gate);
        } else if (gate === ')' || gate === ']' || gate === '}')  {
            if (gates.length === 0 || GetOpenGate(gate) !== gates.pop()) {
                return false;
            }
        } else {
            return false;
        }
    }

    return gates.length === 0;
}

function GetOpenGate(gate) {
    switch (gate) {
    case '}':
        return '{';
    case ']':
        return '[';
    case ')':
        return '(';
    default:
        return NaN;
    }
}

module.exports.isGroup = isGroup;