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
    if (typeof(group) != 'string') {
        throw new Error("Неверная строка");
    }
    
    let dict = new Map();
    createDictionary(dict);
    if (!countSymbolsInDict(dict, group)) {
        return false;
    }

    if (typeof(group) != 'string') {
        throw new Error("Неверная строка");
    }   
    let stack = [];

    for(let char of group) {
        switch(char) {
        case '{': 
            stack.push(char);
            break;
        case '[': 
            stack.push(char);
            break;
        case '(': 
            stack.push(char);
            break;
        case '}': 
            if (stack.pop() != '{') {
                return false;
            }
            break;
        case ']': 
            if (stack.pop() != '[') {
                return false;
            }
            break;
        case ')': 
            if (stack.pop() != '(') {
                return false;
            }
            break;
        default:
            break;
        }
    }

    return true;
}

function createDictionary(dict) {
    dict.set('{', '}');
    dict.set('(', ')');
    dict.set('[', ']');
}

function countSymbolsInDict(dict, string) {
    for (let element of dict.keys()) {
        if(countSymbols(element, string) != countSymbols(dict.get(element), string)) {
            return false;
        }
    };
    
    return true;
}

function countSymbols(symbol, string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            counter++;
        }       
    }

    return counter;
}

module.exports.isGroup = isGroup;