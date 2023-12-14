const helper = require("../helper.js");


function main() {
    let data = helper.getData("./day4/info/input.txt");
    let sum = 0;
    let cards = [];

    /* Test data part 1 */
    // data = [
    //     "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    //     "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    //     "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    //     "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    //     "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    //     "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    // ];

    /* Test data part 2 */
    data = [
        "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
        "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
        "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
        "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
        "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
        "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ]


    data.forEach(card => {
        let rawData = card.split(/\: \s*/);
        rawData = rawData[1].split(' | ');

        let cardObj = { 
            winningNumbers: new Set(rawData[0].split(/\s+/)), 
            selectedNumbers: new Set(rawData[1].split(/\s+/)) 
        };
        
        cards.push(cardObj);
    });

    cards.forEach(({ winningNumbers, selectedNumbers}) => {
        let combinedNumbers = new Set([...winningNumbers, ...selectedNumbers]); 
        let numberOfmatches = (selectedNumbers.size - (combinedNumbers.size - winningNumbers.size));

        /* Solution Part 1 */
        // if (numberOfmatches > 0) {
        //     sum += Math.pow(2, numberOfmatches - 1);
        // }

        /* Solution Part 2 */
        
    });

    console.log(sum);
}



/* Execute code */
main();