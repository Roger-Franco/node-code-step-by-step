const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

/* Escreve */
// fs.writeFileSync(filePath,'this is a simple file');

/* Ler */
// fs.readFile(filePath,'utf8',(err,item)=>{
  // console.log(item);
  // })

  /* atualizar */
  // fs.appendFile(filePath,' for fruits',(err)=>{
  //   if(!err) console.log("file is updated")
  // })

  /* Renomear */
//   fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

/* Renomear */
fs.unlinkSync(`${dirPath}/fruit.txt`);