const reverseString = function(str) {
    const strArray = str.split("");
    strArray.reverse();
    const reversedStr = strArray.join("")
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
