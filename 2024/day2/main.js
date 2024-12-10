const helper = require("../../helper.js");

function main() {
    let data = helper.getData("./2024/day1/info/input.txt");
    let totalDistance = 0; 
    let similarityScore = 0;

    /* Test data */
    //data = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"]; 

    let list1 = [], list2 = [];

    /* Iterating through each string to create 2 lists of numbers  */
    data.forEach(str => {
        col = str.split('   ');

        list1.push(Number(col[0]));
        list2.push(Number(col[1]));
    });

    /* Solution Part 1 */
    // list1.sort(function(a, b) {return a - b});
    // list2.sort(function(a, b) {return a - b});

    // totalDistance = calculateTotalDistance(list1, list2);

    // console.log(totalDistance);


    
    /* Solution Part 2 */
    similarityScore = calculateSimilarityScore(list1, list2);

    console.log(similarityScore);
}

function calculateTotalDistance(list1, list2) {
    let total = 0;

    for (let i = 0; i < list1.length; i++) {
        total += Math.abs(list1[i] - list2[i]);
    }

    return total;
}

function calculateSimilarityScore(list1, list2) {
    let total = 0;

    list1.forEach((val) => {
        total += val * countOccurrences(list2, val);
    })

    return total;
}

function countOccurrences(arr, element) {
    return arr.reduce((count, current) => (current === element ? count + 1 : count), 0);
}

/* Execute code */
main();
