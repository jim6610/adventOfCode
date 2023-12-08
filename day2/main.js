const helper = require("../helper.js");

const Colors = {
	Red: 0,
	Green: 1,
	Blue: 2
}


function main() {
    let data = helper.getData("./day2/info/input.txt");

    // Test data part 1 and 2
    // data = [
    //     "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    //     "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    //     "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    //     "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    //     "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
    // ];
    
    let gameObjArray = []
    let sum = 0;

    data.forEach(game => {
        let gameObj = new Object; 
        let rawGameData = game.split(':'); // splitting rawGameData into its index and roundData
        gameObj.Index = getGameIndex(rawGameData[0]);
        let rawRoundDataArr = rawGameData[1].split(';');

        console.log("gameObj.Index: " + gameObj.Index);
        console.log("rawRoundDataArr: " + rawRoundDataArr);

        let processedRoundData = processRawRoundData(rawRoundDataArr);
        gameObj.Rounds = processedRoundData;
        
        gameObjArray.push(gameObj);
    });

    sum = processGameResults(gameObjArray);

    console.log(sum);
}

function getGameIndex(index) {
    return Number(index.match(/\d+/)[0]);
}

function processRawRoundData(rawRoundDataArr) {
    let cubeDataArr = [];

    rawRoundDataArr.forEach(r => {
        let rawCubeSetArr = r.split(','); 
        console.log("rawCubeSetArr: " + rawCubeSetArr);

        let cube = processRawCubeSet(rawCubeSetArr);

        cubeDataArr.push(cube);
    });

    return cubeDataArr;
}

function processRawCubeSet(rawCubeSetArr) {
    let cube = { Red: 0, Green: 0, Blue: 0};

    //cubeDataArr = [...rawCubeDataArr].map((cubeData) => buildCubeDataObj(cubeData));

    rawCubeSetArr.forEach(c => {

        console.log("cube: " + c);

        if (c.includes("red")) {
            cube.Red = getNumber(c);
        }
        else if (c.includes("green")) {
            cube.Green = getNumber(c);
        }
        else if (c.includes("blue")) {
            cube.Blue = getNumber(c);
        }

    });

    console.log("cubeSet: " + cube.Red + " " + cube.Green + " " + cube.Blue);

    return cube;
}

function getNumber(str) { 
    let num = str.replace(/[^0-9]/g, ''); 
    return Number(num); 
}

function processGameResults(gameObjArray) {
    let sum = 0;

    gameObjArray.forEach(game => {
        if (possible(game)) {
            sum += game.Index;
        }
    });

    return sum;
}

function possible(game) {
    for (let i = 0; i < game.Rounds.length; i++) {
        if (game.Rounds[i].Red > 12 || game.Rounds[i].Green > 13 || game.Rounds[i].Blue > 14) {
            return false;
        }
    }

    return true;
}


// Execute code
main();