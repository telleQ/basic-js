// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let numberOfCats = 0;
    for (let i = 0; i < backyard.length; i++) {
        for (let j = 0; j < backyard[i].length; j++) {
            if (backyard[i][j] === '^^') {
                numberOfCats += 1;
            };
        };

    };
    return numberOfCats;
};