/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0;
    const checkSymbol = (symbol) => {
        if(symbol == "I") return 1
        else if (symbol == "V") return 5
        else if (symbol == "X") return 10
        else if (symbol == "L") return 50
        else if (symbol == "C") return 100
        else if (symbol == "D") return 500
        else if (symbol == 'M') return 1000
    };

    for(let i=0; i < s.length; i++) {
        let currentElement = checkSymbol(s[i]);
        let nextElement = checkSymbol(s[i+1]);
        if(currentElement < nextElement) ans = ans - currentElement
        else ans = ans + currentElement
    }
    return ans;
};
