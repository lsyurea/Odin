const getTheTitles = function(arr) {
    let res = [];
    arr.forEach(x => {res.push(x['title'])});
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
