/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-21 23:37:14
 * @modify date 2020-02-21 23:37:14
 * @desc CORE_MODULE:OS
 */


const os =require('os')

console.log(os.userInfo())
console.log(os.platform())
console.log(os.release())
console.log(os.cpus())

//ENVIRONMENT VARIABLES
console.log(__dirname)
console.log(__filename)

//adding environment variables using command line
//export DATABASE_PASSWORD=123;

//acessing environment variable
//process.env.DATABASE_PASSWORD