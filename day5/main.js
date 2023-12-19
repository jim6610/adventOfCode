const helper = require("../helper.js");


function main() {
    let data = helper.getData("./day5/info/input.txt");
    let lowestLocation = 1000000;

    /* Test data part 1 and part 2 */
    // data = [
    //     "seeds: 79 14 55 13",
    //     "",
    //     "seed-to-soil map:",
    //     "50 98 2",
    //     "52 50 48",
    //     "",
    //     "soil-to-fertilizer map:",
    //     "0 15 37",
    //     "37 52 2",
    //     "39 0 15",
    //     "",
    //     "fertilizer-to-water map:",
    //     "49 53 8",
    //     "0 11 42",
    //     "42 0 7",
    //     "57 7 4",
    //     "",
    //     "water-to-light map:",
    //     "88 18 7",
    //     "18 25 70",
    //     "",
    //     "light-to-temperature map:",
    //     "45 77 23",
    //     "81 45 19",
    //     "68 64 13",
    //     "",
    //     "temperature-to-humidity map:",
    //     "0 69 1",
    //     "1 0 69",
    //     "",
    //     "humidity-to-location map:",
    //     "60 56 37",
    //     "56 93 4"
    // ];

    const [seeds, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation] = processAlmanacData(data);

    seeds.forEach(seed => {
        let location = getLocation(seed, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation);

        if (location < lowestLocation) {
            lowestLocation = location;
        }
    });

    console.log(lowestLocation);
}

function processAlmanacData(data) {
    let seeds = [], seedToSoil = new Map(), soilToFertilizer = new Map(), fertilizerToWater = new Map(), waterToLight = new Map(), lightToTemperature = new Map(), temperatureToHumidity = new Map(), humidityToLocation = new Map();

    data.forEach((line, i) => {
        if (line.includes("seeds:")) {
            line = line.split("seeds: ");
            seeds = line[1].split(" ");
        }
        else if (line.includes("seed-to-soil map:")) {
            seedToSoil = buildMap(data, i);
        }
        else if (line.includes("soil-to-fertilizer map:")) {
            soilToFertilizer = buildMap(data, i);
        }
        else if (line.includes("fertilizer-to-water map:")) {
            fertilizerToWater = buildMap(data, i);
        }
        else if (line.includes("water-to-light map:")) {
            waterToLight = buildMap(data, i);
        }
        else if (line.includes("light-to-temperature map:")) {
            lightToTemperature = buildMap(data, i);
        }
        else if (line.includes("temperature-to-humidity map:")) {
            temperatureToHumidity = buildMap(data, i);
        }
        else if (line.includes("humidity-to-location map:")) {
            humidityToLocation = buildMap(data, i);
        }
    });

    return [seeds, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation];
}

function buildMap(data, index) {
    let map = new Map();

    for (let i = index + 1; i < data.length; i++) {
        if (data[i] !== "") {
            const dataSet = data[i].split(" ");
            let source = Number(dataSet[1]);
            let destination = Number(dataSet[0]);
            let range = Number(dataSet[2]);

            for (let j = 0; j < range; j++) {
                map.set(source + j, destination + j);
            }
        }
        else {
            return map;
        }
    }

    return map;
}

function getLocation(seed, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation) {
    let currentNumber = Number(seed);

    currentNumber = seedToSoil.has(currentNumber) ? seedToSoil.get(currentNumber) : currentNumber;
    currentNumber = soilToFertilizer.has(currentNumber) ? soilToFertilizer.get(currentNumber) : currentNumber;
    currentNumber = fertilizerToWater.has(currentNumber) ? fertilizerToWater.get(currentNumber) : currentNumber;
    currentNumber = waterToLight.has(currentNumber) ? waterToLight.get(currentNumber) : currentNumber;
    currentNumber = lightToTemperature.has(currentNumber) ? lightToTemperature.get(currentNumber) : currentNumber;
    currentNumber = temperatureToHumidity.has(currentNumber) ? temperatureToHumidity.get(currentNumber) : currentNumber;
    currentNumber = humidityToLocation.has(currentNumber) ? humidityToLocation.get(currentNumber) : currentNumber;

    return currentNumber;
}

/* Execute code */
main();