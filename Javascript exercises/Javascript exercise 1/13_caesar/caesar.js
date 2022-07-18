const caesar = function(string, shift) {
    
    return string.split("").map(x => valShift(x, shift)).join("");
};

const startcode = x => {return x < 97 ? 65: 97;};
const valShift = (init, shift) => {
    if (init.match(/[^a-z]/gi)) return init;
    let startascii = init.charCodeAt();
    let asciiCode = (startascii + (shift % 26 + 26) % 26 - startcode(startascii)) % 26 + startcode(startascii);
    return String.fromCharCode(asciiCode);
};

// Do not edit below this line
module.exports = caesar;
