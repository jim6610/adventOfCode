const helper = require("../helper.js");

function main() {
    let data = helper.getData("./day1/info/input.txt");
    let hasNumber = /\d/; 
    let sum = 0; 

    //data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]; // Test data

    // Iterating through each string to parse out the left-most and right-most integers to build a number and adding it to the sum
    data.forEach(str => {
        if (hasNumber.test(str)) {
            sum += Number(getLeftMostInteger(str) + getRightMostInteger(str));
        }
    });

    console.log(sum);
}

function getLeftMostInteger(str) {
    let charArr = str.split('');

    for (let i = 0; i < charArr.length; i++) {
        if (!isNaN(charArr[i]) ) {
            return charArr[i];
        }
    }

    return null;
};

function getRightMostInteger(str) {
    let charArr = str.split('');

    for (let i = charArr.length - 1; i >= 0; i--) {
        if (!isNaN(charArr[i]) ) {
            return charArr[i];
        }
    }

    return null;
}

// Execute code
main();
