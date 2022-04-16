const {readFileSync,readFile, writeFileSync,writeFile}= require('fs');

const path = require('path');

const filePath = path.join(__dirname,'content','txtfiles','test.txt');
const newfilePath = path.join(__dirname,'content','txtfiles','test-new-async.txt');
const fileContent = readFileSync(filePath,'utf-8');
console.log(fileContent);
writeFileSync(newfilePath,`This is content for the new fle`);

readFile(filePath,'utf-8',(err,result)=>{
    if(err){
        console.log('Unable to read file');
    }else{
        console.log(result);
    }
});
writeFile(newfilePath,`this is file content written by writefile method`,'utf-8',(err,result)=>{
    if(err){
        console.log('unable to write file');
    }
    console.log(result);
})