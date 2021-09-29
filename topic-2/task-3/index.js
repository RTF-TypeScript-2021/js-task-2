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
    const endings = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    if (group.length == 0) {
        return true;
    } else if (typeof(group) !== "string") {
        throw new Error ("Input must be a string");
    } else if (group[0] == ")" || group[0] == "}" || group[0] == "]" || group.length % 2 != 0) {
        return false
    } else if (group[group.length - 1] == group [0]) {
    
        return false
    }
    const tempGroup = [];
    for (let i = 0; i < group.length; i++) {
        if (group[i] in endings) {
            tempGroup.push(group[i]);
        } else if (endings[tempGroup.pop()] !== group[i]) {
            return false;
        }
    }

    return true;
}

module.exports.isGroup = isGroup;