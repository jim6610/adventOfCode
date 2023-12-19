const helper = require("../helper.js");


function main() {
    let data = helper.getData("./day5/info/input.txt");
    let lowestLocation = null;

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

    let [seeds, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation] = processAlmanacData(data);

    /* Solution Part 1 */
    // seeds.forEach(seed => {
    //     let location = determineLocation(seed, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation);

    //     if (lowestLocation === null || location < lowestLocation) {
    //         lowestLocation = location;
    //     }
    // });

    /* Solution Part 2 */
    seeds = processSeedData(seeds);

    console.log(lowestLocation);
}

function processAlmanacData(data) {
    let seeds = [], seedToSoil = [], soilToFertilizer = [], fertilizerToWater = [], waterToLight = [], lightToTemperature = [], temperatureToHumidity = [], humidityToLocation = [];

    data.forEach((line, i) => {
        if (line.includes("seeds:")) {
            line = line.split("seeds: ");
            seeds = line[1].split(" ");
        }
        else if (line.includes("seed-to-soil map:")) {
            seedToSoil = buildMappingArr(data, i);
        }
        else if (line.includes("soil-to-fertilizer map:")) {
            soilToFertilizer = buildMappingArr(data, i);
        }
        else if (line.includes("fertilizer-to-water map:")) {
            fertilizerToWater = buildMappingArr(data, i);
        }
        else if (line.includes("water-to-light map:")) {
            waterToLight = buildMappingArr(data, i);
        }
        else if (line.includes("light-to-temperature map:")) {
            lightToTemperature = buildMappingArr(data, i);
        }
        else if (line.includes("temperature-to-humidity map:")) {
            temperatureToHumidity = buildMappingArr(data, i);
        }
        else if (line.includes("humidity-to-location map:")) {
            humidityToLocation = buildMappingArr(data, i);
        }
    });

    return [seeds, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation];
}

function buildMappingArr(data, index) {
    let arr = [];

    for (let i = index + 1; i < data.length; i++) {
        if (data[i] !== "") {
            const dataSet = data[i].split(" ");
            arr.push({ source: Number(dataSet[1]), destination: Number(dataSet[0]), range: Number(dataSet[2]) })
        }
        else {
            return arr;
        }
    }

    return arr;
}

function determineLocation(seed, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation) {
    let currentNumber = Number(seed);

    currentNumber = getDestination(currentNumber, seedToSoil);
    currentNumber = getDestination(currentNumber, soilToFertilizer);
    currentNumber = getDestination(currentNumber, fertilizerToWater);
    currentNumber = getDestination(currentNumber, waterToLight);
    currentNumber = getDestination(currentNumber, lightToTemperature);
    currentNumber = getDestination(currentNumber, temperatureToHumidity);
    currentNumber = getDestination(currentNumber, humidityToLocation);

    return currentNumber;
}

function getDestination(currentSource, mappingArr) {
    for (let i = 0; i < mappingArr.length; i++) {
        let lowerBound = mappingArr[i].source;
        let upperBound = (mappingArr[i].source + mappingArr[i].range) - 1;

        if (lowerBound <= currentSource && currentSource <= upperBound) {
            let destination = mappingArr[i].destination - mappingArr[i].source + currentSource;

            return destination;
        }
    };

    return currentSource;
}

function processSeedData(seeds) {
    let processedSeeds = [];

    for (let i = 0; i < seeds.length; i += 2) {
        processedSeeds.push({ origin: seeds[i], range: seeds[i + 1] });
    }

    return processedSeeds;
}


/* Execute code */
main();