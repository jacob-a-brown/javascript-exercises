const repeatString = function(str, n) {
    if (n < 0) {
        return "ERROR";
    }
    let arr = [];
    for (i = 0; i < n; i++) {
        arr.push(str);
    }
    const repeatedStr = arr.join("");
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
