const palindromes = function (string) {
    const parsed = string.replace(/[^a-z]/gi, "").toLowerCase();
    console.log(parsed);
    let l = 0, r = parsed.length - 1;
    while (l < r) {
        if (parsed.charAt(l) != parsed.charAt(r)) return false;
        l ++;
        r --;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
