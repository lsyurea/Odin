const repeatString = function(data, num) {
    try {return data.repeat(num);}
    catch {RangeError} {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
