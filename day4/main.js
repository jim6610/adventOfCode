const helper = require("../helper.js");


function main() {
    let data = helper.getData("./day4/info/input.txt");
    let sum = 0;
    let cards = [];

    /* Test data part 1 and part 2 */
    // data = [
    //     "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    //     "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    //     "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    //     "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    //     "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    //     "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    // ];

    cards = processCardData(data);
    sum = calculatePoints(cards);

    console.log(sum);
}

function processCardData(data) {
    let cards = [];

    data.forEach(card => {
        let cardObj = { WinningNumbers: [], SelectedNumbers: [] };
        let rawData = card.split(': ');
        rawData = rawData[1].split(' | ');

        cardObj.WinningNumbers = rawData[0].split(/\s+/);
        cardObj.SelectedNumbers = rawData[1].split(/\s+/);

        cards.push(cardObj);
    });

    return cards;
}

function calculatePoints(cards) {
    let sum = 0;
    let i = 1;
    cards.forEach(card => {
        let commonNumbers = card.WinningNumbers.filter(value => card.SelectedNumbers.includes(value));
        if (commonNumbers.length !== 0) {
            console.log("Card " + i + ": 2 ^ " + (commonNumbers.length - 1) + ": " + Math.pow(2, commonNumbers.length - 1));
            sum += Math.pow(2, commonNumbers.length - 1);
        }
        else {
            console.log("Card " + i);
        }
        i++;
    });

    return sum;
}


/* Execute code */
main();