const helper = require("../helper.js");
const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~]/;

function main() {
    let data = helper.getData("./day3/info/input.txt");
    let sum = 0;

    /* Test data part 1 */
    data = [
        "467..114..",
        "...*......",
        "..35..633.",
        "......#...",
        "617*......",
        ".....+.58.",
        "..592.....",
        "......755.",
        "...$.*....",
        ".664.598.."
    ];

    data = createCharArray(data);


    console.log(data);
}

function createCharArray(data) {
    let charArr = [data.length];

    for (let i = 0; i < data.length; i++) {
        charArr[i] = data[i].split("");
    }

    return charArr;
}


/* Execute code */
main();