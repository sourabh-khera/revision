/**
 * Created by sourabh on 31/3/17.
 */
var fs = require('fs');
var report={};

module.exports=function(inputFile, outputFile){
    var readStream= fs.createReadStream(__dirname+'/'+inputFile,'UTF8');
    var writerStream = fs.createWriteStream(__dirname+'/'+outputFile);

    readStream.on('data',function read(line){

        var dataDev = line.substring(line.indexOf('devDependencies'),line.length);
        var devdependecies = dataDev.substring(0,dataDev.indexOf('}')+1);
        var dep = devdependecies.split('\n');
        report.DevDependencyCount = dep.length-2;

        var datadep = line.substring(line.indexOf('dependencies'),line.length);
        var dependecies = datadep.substring(0,datadep.indexOf('}')+1);
        var devDep = dependecies.split('\n');
        report.DependencyCount = devDep.length-2;


        var count =0;
        var commonDepen=[];
        for(var i=0;i<devDep.length-1;i++){
            dep.filter(function ( dependency ){
                if(dependency==devDep[i]){
                    count++;
                    commonDepen.push('{ depen : '+dependency +'     dev dep : '+devDep[i]+'}')
                }

            })
        }
        report.sameDependencyCountMatch=count;
        report.sameDependency=commonDepen;
        writerStream.write(  JSON.stringify(report)  +'\n');

    })


}