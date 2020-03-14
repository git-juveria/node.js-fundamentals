/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 14:46:14
 * @modify date 2020-02-22 14:46:14
 * @desc it's recommended to handle errors for 'error first callback functions': using try catch, return statements
 */

const fs=require('fs')

fs.readFile('/non/existent/file/here',(err,data)=>{
    if(err){
        console.log(err)
        console.log('Function exiting....')
        return;
    }

    console.log(data)
})