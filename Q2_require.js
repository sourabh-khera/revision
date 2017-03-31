/*var requireDependencies=require("./dependencies.js")

var commonDependencies = require('./commonDependencies');


commonDependencies.countnumberofDependencies("/package.txt","/dependenciesWriteFile.txt","dependencies");*/

var test = require('./packageJsonDataRead');
test('package.txt','Q2_dependenciesWriteFile.txt')