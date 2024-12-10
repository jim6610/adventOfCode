const helper = require("../../helper.js");
const specialChars =/[^\.\w]/;


function main() {
    let data = helper.getData("./2023/day3/info/input.txt");
    let sum = 0;

    /* Test data part 1 and part 2 */
    // data = [
    //     "467..114..",
    //     "...*......",
    //     "..35..633.",
    //     "......#...",
    //     "617*......",
    //     ".....+.58.",
    //     "..592.....",
    //     "......755.",
    //     "...$.*....",
    //     ".664.598.."
    // ];

    data = createCharArray(data);

    for (let i = 0; i < data.length; i++) {
        let num = { value: "", firstIndex: null, lastIndex: null }

        for (let j = 0; j < data[i].length; j++) {
            let currentChar = data[i][j];

            if (!isNaN(currentChar)) {
                num.value += currentChar;

                if (num.value.length === 1) {
                    num.firstIndex = j;
                }
                num.lastIndex = j;
            }

            if (currentChar === "." || specialChars.test(currentChar) || j === data[i].length - 1) {
                if (num.value !== "") {
                    sum += isAdjacent(num, data, i);
                    num.value = "";
                }
            }
        }
    }


    console.log(sum);
}

function createCharArray(data) {
    let charArr = [data.length];

    for (let i = 0; i < data.length; i++) {
        charArr[i] = data[i].split("");
    }

    return charArr;
}

function isAdjacent(num, data, currentRowIndex) {

    // check for adjacent symbol in row above
    let rowIndex = currentRowIndex - 1;
    let start = num.firstIndex - 1;
    let end = num.lastIndex + 1;

    if (typeof data[rowIndex] !== "undefined") { // To avoid checking row above when we are on first row.
        if (typeof data[rowIndex][start] === "undefined") { // To avoid checking index outside of scope
            start = num.firstIndex;
        }

        if (typeof data[rowIndex][end] === "undefined") { // To avoid checking index outside of scope
            end = num.lastIndex;
        }

        for (let i = start; i <= end; i++) {
            let currentChar = data[rowIndex][i];
            if (specialChars.test(currentChar)) {
                return Number(num.value);
            }
        }
    }

    
    // check for adjacent symbol in current row
    rowIndex = currentRowIndex;
    start = num.firstIndex - 1;
    end = num.lastIndex + 1;

    if (typeof data[rowIndex][start] !== "undefined") { // To avoid checking index outside of scope
        if (specialChars.test(data[rowIndex][start])) {
            return Number(num.value);
        }
    }

    if (typeof data[rowIndex][end] !== "undefined") { // To avoid checking index outside of scope
        if (specialChars.test(data[rowIndex][end])) {
            return Number(num.value);
        }
    }


    // check for adjacent symbol in row below
    rowIndex = currentRowIndex + 1;
    start = num.firstIndex - 1;
    end = num.lastIndex + 1;

    if (typeof data[rowIndex] !== "undefined") { // To avoid checking row below when we are on last row.
        if (typeof data[rowIndex][start] === "undefined") { // To avoid checking index outside of scope
            start = num.firstIndex;
        }

        if (typeof data[rowIndex][end] === "undefined") { // To avoid checking index outside of scope
            end = num.lastIndex;
        }

        for (let i = start; i <= end; i++) {
            let currentChar = data[rowIndex][i];
            if (specialChars.test(currentChar)) {
                return Number(num.value);
            }
        }
    }

    return 0;
}


/* Execute code */
main();