const fs = require('fs');
const { Transform } = require('stream');

const transFormData = new Transform({
   transform(chunk, encoding, callback){
    this.push(chunk.toString().toUpperCase())
    callback();

   }
});
const inputStream = fs.createReadStream(__dirname+'/input.txt');
const outputStream = fs.createWriteStream(__dirname+'/output.txt');


inputStream.pipe(transFormData).pipe(outputStream);

outputStream.on('finish',()=>{
    console.log('Data has been transformed and written to output.txt');

});
outputStream.on('error',(err)=>{
console.error('Error:',err);
});