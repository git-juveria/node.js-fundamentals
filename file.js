/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 00:14:58
 * @modify date 2020-02-22 00:14:58
 * @desc Core Module: FS(fileSystem)
 */

const fs=require('fs')


//READING A FILE
// const data=fs.readFileSync('app.js')
// //console.log(data);//returning buffered value
// console.log(data.toString())

//WRITING IN A FILE
// fs.writeFileSync('data.txt','hello world');

//appending into a file
// fs.appendFileSync('data.txt','Another message')

//copying file
// fs.copyFileSync('data.txt','data.bak.txt')

//renaming file
// fs.renameSync('data.bak.txt','data-new.txt')

//unlinking-removing renamed file
// fs.unlinkSync('data.bak.txt')

//Reading a directory
// const dirname=fs.readdirSync(__dirname)
// console.log(dirname)

// Creating a directory
// fs.mkdirSync('File-System')

//noting chnges in a file
// fs.watchFile('data.txt',()=>{
//     console.log('Data has been modified')
// })