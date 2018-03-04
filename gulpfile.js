var gulp = require('gulp');
var argv = require('yargs').argv;
var fs = require('fs');
var config = require("./src/config.json");

var mode = argv.env || "dev";
console.log(mode);

function addAllproperties(src, dest) {
    Object.keys(src).forEach(function(key) {
        dest[key] = src[key];
    });
    return dest;
}

gulp.task("build", function() {
    var json = {};
    addAllproperties(config.common, json);
    addAllproperties(config[mode], json);
    fs.writeFile("./dist/config.json", JSON.stringify(json), (err) => {
        if (err) throw err;
        console.log("file saved");
    });
});