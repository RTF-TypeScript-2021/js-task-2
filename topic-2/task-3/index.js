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
    if (typeof(group) != 'string'){
        throw new Error('Неправильно передана группа');
    }
    if (group.length == 0){
        return true;
    }
    if (group[0] == ')' || group[0] == '}' || group[0] == ']' || group.length % 2 != 0){
        return false;
    }

    const brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }
    let currentGroup = [];

    for (let i = 0; i < group.length; i++){
        if (group[i] in brackets){
            currentGroup.push(group[i]);
        } else if(brackets[currentGroup.pop()] !== group[i]){
            return false;
        }
    }

    return true;

    // ( = 40 ; ) = 41 ; [ = 91 ; ] = 93 ; { = 123 ; } = 125 || charCodeAt() 
}

module.exports.isGroup = isGroup;