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

    let dict = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    if (group.length % 2 !=0){
        return false;
    }
    let res = [];
    let resReverse=[];
    for(let i = 0; i < group.length/2;i++){
        res.push(group[i]);
    }
    for(let i = group.length/2; i < group.length;i++){
        resReverse.push(dict[group[i]]);
    }

    if(resReverse.reverse().join()==res.join()){
        return true;
    }

    return false;
}

module.exports.isGroup = isGroup;