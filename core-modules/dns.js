/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 14:36:59
 * @modify date 2020-02-22 14:36:59
 * @desc dns module
 */
const dns=require('dns')

//doesnt request the network
dns.lookup('github.com',(err,value)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(value)
})

//requests the netwrok. returns list of ip addresses related to that domain 
//extra parameters can be passed in reolve function to colect information for specific category like MX: to know the mail exchange records for that domain
dns.resolve('github.com',(err,value)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(value)
})

dns.reverse('8.8.8.8',(err,val)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(val)
})
