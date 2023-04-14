const NodeCache = require("node-cache");

const myCache = new NodeCache({ stdTTL: 1800 }); // Time To Live: 30 minutes

// save key, value to memory 
exports.saveToMemory = function (key, value) {
    let obj = {
        url: value,
        shortUrl: 'http://short.est/' + key,
        date_encoded: new Date().toLocaleString()
    };
    myCache.set(key, obj);
}

// Get value from memory using key
exports.getFromMemory = function (key) {
    return myCache.get(key);
}

// Checks if key exists in order not to override existing keys
exports.keyExists = function (key) {
    return myCache.has(key);
}
