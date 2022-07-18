const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 1) return 'OOPS'
    if (n < 2) return n;
    let a = 1, b = 1;
    for (let i = 2; i < n; i ++) {
        let temp = a;
        a += b;
        b = temp;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
