const reverseString = function(data) {
    let res = '';
    for (let i = data.length - 1; i > - 1; i --){
        res += data[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
