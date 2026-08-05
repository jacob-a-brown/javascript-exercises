const removeFromArray = function(arr, ...itemsToRemove) {
    // itemsToRemove is an array of the items to remove from the original array
    // if an item is not in itemsToRemove keep it in the original array
    // that is, it should evaluate to "true" for the filter callback function
    const filteredArr = arr.filter(item => !itemsToRemove.includes(item));
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
