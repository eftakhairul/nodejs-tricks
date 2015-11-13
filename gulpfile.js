// Include gulp
var gulp = require('gulp');
var fs   = require('fs');
var util = require('util');
var path = require("path");

var fileNames  =  [];
var targetFile =  __dirname + '/' + 'README.md';

//helper function
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
};

gulp.task('header', function() {
    var header = "Bringing all the helpful tricks from the different websites, talks, tweets etc \
                  in one place. Just fork and contribute this one.\n" ;

    fs.writeFileSync(targetFile, '');
    fs.appendFileSync(targetFile, '#NodeJS Tricks\n');
    fs.appendFileSync(targetFile, header);
});

gulp.task('content', function() {
    var files = fs.readdirSync(__dirname);
    var body  = '';

    //filter .js files except the gulpfile.js
    files.filter(function(file) { return file.substr(-3) === '.js' && file.toString() !== 'gulpfile.js'})
         .forEach(function(file) {
              var fileName = file.toString();
              fileNames.push(fileName);

              var heading  = path.basename(fileName, '.js').replace('_', ' ').capitalize();
              var filePath = __dirname + '/' + fileName;
              var contents = fs.readFileSync(filePath).toString();
              body         = body + util.format(['###%s',
                                                '```javascript',
                                                '%s',
                                                '```',
                                                '[View Source](%s)'].join('\n'), heading, contents, fileName) + '\n';
         });


    fs.appendFileSync(targetFile, '\n');
    fs.appendFileSync(targetFile, '\n');
    fs.appendFileSync(targetFile, '##Table of Contents\n');

    fileNames.forEach(function(fileName) {
        var heading  = path.basename(fileName, '.js').replace('_', ' ').capitalize();
        var link     = path.basename(fileName, '.js').replace('_', '-').toLowerCase();
        var item     = util.format('- [%s](#%s)\n', heading, link);

        fs.appendFileSync(targetFile,item);
    });

    fs.appendFileSync(targetFile, '\n');
    fs.appendFileSync(targetFile, '\n');
    fs.appendFileSync(targetFile, '##Tricks\n');
    fs.appendFileSync(targetFile, body);

});

gulp.task('contributors', function() {
});

gulp.task('footer', function() {
});

// Default Task
gulp.task('build', ['header', 'content', 'contributors', 'footer']);