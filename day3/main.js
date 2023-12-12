const helper = require("../helper.js");
const specialChars =/[^\.\w]/;


function main() {
    let data = helper.getData("./day3/info/input.txt");
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
        let num = { Value: "", FirstIndex: null, LastIndex: null }

        for (let j = 0; j < data[i].length; j++) {
            let currentChar = data[i][j];

            if (!isNaN(currentChar)) {
                num.Value += currentChar;

                if (num.Value.length === 1) {
                    num.FirstIndex = j;
                }
                num.LastIndex = j;
            }

            if (currentChar === "." || specialChars.test(currentChar) || j === data[i].length - 1) {
                if (num.Value !== "") {
                    sum += isAdjacent(num, data, i);
                    num.Value = "";
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
    let start = num.FirstIndex - 1;
    let end = num.LastIndex + 1;

    if (typeof data[rowIndex] !== "undefined") { // To avoid checking row above when we are on first row.
        if (typeof data[rowIndex][start] === "undefined") { // To avoid checking index outside of scope
            start = num.FirstIndex;
        }

        if (typeof data[rowIndex][end] === "undefined") { // To avoid checking index outside of scope
            end = num.LastIndex;
        }

        for (let i = start; i <= end; i++) {
            let currentChar = data[rowIndex][i];
            if (specialChars.test(currentChar)) {
                console.log(Number(num.Value));
                return Number(num.Value);
            }
        }
    }

    
    // check for adjacent symbol in current row
    rowIndex = currentRowIndex;
    start = num.FirstIndex - 1;
    end = num.LastIndex + 1;

    if (typeof data[rowIndex][start] !== "undefined") { // To avoid checking index outside of scope
        if (specialChars.test(data[rowIndex][start])) {
            console.log(Number(num.Value));
            return Number(num.Value);
        }
    }

    if (typeof data[rowIndex][end] !== "undefined") { // To avoid checking index outside of scope
        if (specialChars.test(data[rowIndex][end])) {
            console.log(Number(num.Value));
            return Number(num.Value);
        }
    }


    // check for adjacent symbol in row below
    rowIndex = currentRowIndex + 1;
    start = num.FirstIndex - 1;
    end = num.LastIndex + 1;

    if (typeof data[rowIndex] !== "undefined") { // To avoid checking row below when we are on last row.
        if (typeof data[rowIndex][start] === "undefined") { // To avoid checking index outside of scope
            start = num.FirstIndex;
        }

        if (typeof data[rowIndex][end] === "undefined") { // To avoid checking index outside of scope
            end = num.LastIndex;
        }

        for (let i = start; i <= end; i++) {
            let currentChar = data[rowIndex][i];
            if (specialChars.test(currentChar)) {
                console.log(Number(num.Value));
                return Number(num.Value);
            }
        }
    }

    return 0;
}


/* Execute code */
main();