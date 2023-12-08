const helper = require("../helper.js");

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


function main() {
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

    // Iterating through each string to parse out the left-most and right-most integers to build a number and add it to the sum
    data.forEach(str => {
        // part 1 solution
        // sum += Number(getFirstInteger(str) + getLastInteger(str));

        // part 2 solution
        let numberArr = [...str.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi)]
            .map((x) => textToNumber(x[1]));

        sum += Number(numberArr[0] + numberArr[numberArr.length - 1]);
    });

    console.log(sum);
}

function textToNumber(str) {
    str = str.replace(/one|two|three|four|five|six|seven|eight|nine/g, (matched) => {
        return textToNumberMap[matched];
    });

    return str;
}


// Execute code
main();
