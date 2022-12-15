var fs = require('fs');
var length = 0;
var fileName = "sample.txt";
var readStream = fs.createReadStream(fileName);
readStream.on("data", function(blob) {
    // length += blob.length;
    var str = blob.toString();
    var inStarWord = false;
    for (let i=0; i<str.length; i++) {
        if (str[i] === "*") inStarWord = true;
        if (inStarWord && str[i] === " ") {
            length++;
            inStarWord = false;
        }
    }
});
readStream.on("end", function() {
    console.log("Total number of chars read = " + length);
});
readStream.on("error", function() {
    console.log("Error occurred when reading from file" + fileName);
});