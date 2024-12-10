const helper = require("../../helper.js");

function main() {
    let data = helper.getData("./2024/day2/info/input.txt");
    let total = 0; 

    /* Test data */
    // data = ["7 6 4 2 1", 
    //         "1 2 7 8 9",
    //         "9 7 6 2 1",
    //         "1 3 2 4 5",
    //         "8 6 4 4 1",
    //         "1 3 6 7 9"]; 

    /* Solution Part 1 */        
    /* Iterating through each input string to determine if sequence is ascending or descending */
    data.forEach((str) => {
        let sequence = str.split(" ").map(Number);
        let firstIndex = sequence[0];
        let lastIndex = sequence[sequence.length - 1];

        if (firstIndex < lastIndex && checkAscending(sequence))
            total++;
        else if (firstIndex > lastIndex && checkDescending(sequence))
            total++;
    });

    console.log(total);



    /* Solution Part 2 */

}

function checkAscending(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        let difference = Math.abs(sequence[i] - sequence[i + 1]);

        if (sequence[i] >= sequence[i + 1] || difference > 3 || difference < 1) 
            return false;
    }

    return true;
}

function checkDescending(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        let difference = Math.abs(sequence[i] - sequence[i + 1]);

        if (sequence[i] < sequence[i + 1] || difference > 3 || difference < 1)
            return false;
    }

    return true;
}

/* Execute code */
main();
