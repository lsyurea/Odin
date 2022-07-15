const findTheOldest = function(arr) {
    return arr.reduce( (x, y) => {return (getAge(x.yearOfDeath, x.yearOfBirth) > getAge(y.yearOfDeath, y.yearOfBirth)) ? x: y});
};

const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
