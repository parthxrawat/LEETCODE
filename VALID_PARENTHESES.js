/**
 @param {string} s
@return {boolean}
**/
const openBrackets = '({[';
const closedBrackets = ')}]';

const returnParan = (str) => {
    switch (str) {
        case ']': return '['
        case '}': return '{'
        case ')': return '('
        default: ' '
    }
}

var isValid = function (s) {
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        if (openBrackets.indexOf(s[i]) !== -1) {
            stack.push(s[i])
        } else {
            if (stack.length === 0 ) return false
            let tmp = stack.pop();
            if(returnParan(s[i]) !== tmp) return false;
        } 
    }
    return stack.length === 0
};
