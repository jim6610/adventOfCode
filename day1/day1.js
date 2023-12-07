const helper = require("../helper.js");

function main() {
    const textToNumberMap = {
        one:"1",
        two:"2",
        three:"3",
        four:"4",
        five:"5",
        six:"6",
        seven:"7",
        eight:"8",
        nine:"9"
    };

    let data = helper.getData("./day1/info/input.txt");
    let sum = 0; 

    // Test data part 1
    //data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet", "five8b"]; 

    // Test data part 2
    // data = ["two1nine",
    //         "eightwothree",
    //         "abcone2threexyz",
    //         "xtwone3four",
    //         "4nineeightseven2",
    //         "zoneight234",
    //         "7pqrstsixteen"
    //         ]

    // Iterating through each string to parse out the left-most and right-most integers to build a number and adding it to the sum
    data.forEach(str => {
        str = textToNumber(textToNumberMap, str);
        sum += Number(getLeftMostInteger(str) + getRightMostInteger(str));
    });

    console.log(sum);
}

function getLeftMostInteger(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) ) {
            return str[i];
        }
    }

    return null;
};

function getRightMostInteger(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(str[i]) ) {
            return str[i];
        }
    }

    return null;
}

function textToNumber(textToNumberMap, str) {
    str = str.replace(/one|two|three|four|five|six|seven|eight|nine/gi, (matched) => {
        return textToNumberMap[matched];
    });

    return str;
}


// Execute code
main();
