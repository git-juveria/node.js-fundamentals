/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-21 23:29:52
 * @modify date 2020-02-21 23:29:52
 * @desc accessing command line arguments. 
 *      data from another program can be recieved
 */

//accessing command line arguments
//by default the argv property consists of two argumnets 
//1. the path where nodejs is installed and 
//2. where the file is stored.

//The reduce function reduces the array into a single value.
//two parameters are required a callback function and an initial value(optional)
const arguments=process.argv.slice(2)
const sum=arguments.reduce((acc,val) =>acc+parseInt(val),0)
console.log(sum)