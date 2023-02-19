const fs= require('fs');
const path=require('path');
const dirPath= path.join(__dirname,'files');
console.log(dirPath)
for(i=0;i<5;i++)

/* Comando abaixo para escrever os arquivos */
// {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")

// }

/* Comando abaixo para ler os arquivos */

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn("file name is : ",item)
    });
}
)