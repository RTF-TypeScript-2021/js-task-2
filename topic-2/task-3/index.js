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
    // expect(isGroup("([{}])")).toBe(true);
    // expect(isGroup("[(])")).toBe(false);
    // expect(isGroup("[({})](]")).toBe(false);
    // expect(isGroup("([{}])")).toBe(true);
    // expect(isGroup("(}")).toBe(false);

    // if (typeof(group) != 'string'){
    //     throw new Error('Неправильно передана группа');
    // }
    // if (group.length == 0){
    //     return true;
    // }
    // if (group[0] == ')' || group[0] == '}' || group[0] == ']'){
    //     return false;
    // }

    // let index = 0;

    // for (let i = 0; i < group.length; i++){
    //     if (group[i] == '('){
    //         index = group.indexOf(')');
    //     }
    // }
}

module.exports.isGroup = isGroup;