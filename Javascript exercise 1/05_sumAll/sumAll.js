const sumAll = function(num1, num2) {
    if (! Number.isInteger(num1) || ! Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';
    let higher = num1 > num2? num1 : num2, lower = num1 < num2 ? num1 : num2, res = 0;
    for (let i = lower; i < higher + 1; i ++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
