
module.exports=function singleComment(readFile,writeFile){

 var fs=require('fs');
 var readStream=fs.createReadStream(__dirname+"/"+readFile,"UTF8");
 var writeStream=fs.createWriteStream(__dirname+"/"+writeFile,"UTF8");

 readStream.on('data',function(chunk){
     var str=chunk.split('\n');
     for(var i=0;i<str.length;i++){
            if(str[i].includes("//")){
               if(!str[i].startsWith("//")){
                   var index=str[i].indexOf("//");
                   var substring=str[i].substring(index);
                   writeStream.write(substring)
                   writeStream.write('\n');
               }
               else
              {
              writeStream.write(str[i]);
              writeStream.write('\n');
              }
            }
      }
    })
}


