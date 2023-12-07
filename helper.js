module.exports = { getData };

// Extract data from input file
function getData(filePath) {
    let fs = require('fs');
    let data = null;

    data = fs.readFileSync(filePath, "utf-8").split('\n');

    return data;
};