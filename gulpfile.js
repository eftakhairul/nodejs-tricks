// Include gulp
var gulp = require('gulp');
var fs   = require('fs');
var util = require('util');


var fileNames  =  [];
var targetFile =  __dirname + '/' + 'README.md';

gulp.task('header', function() {
    var header = "#NodeJS Tricks \
	##Bringing all the helpful tricks from the different websites, talks, tweets etc in one place. Just fork and \
    ##contribute this one." ;

    fs.writeFileSync(targetFile, '');
    fs.appendFileSync(targetFile, header);
});

gulp.task('content', function() {
    var files = fs.readdirSync(__dirname);

    //filter .js files except the gulpfile.js
    files.filter(function(file) { return file.substr(-3) === '.js' && file.toString() !== 'gulpfile.js'})
         .forEach(function(file) {
              fileNames.push(file.toString());
              var fileName = __dirname + '/' + file;
              var contents = fs.readFileSync(fileName).toString();
              contents = util.format(['```javascript',
                                      '%s',
                                      '```'].join('\n'), contents);

              fs.appendFileSync(targetFile, contents);
         });
});

gulp.task('contributors', function() {
});

gulp.task('header', function() {
});

// Default Task
gulp.task('build', ['content']);