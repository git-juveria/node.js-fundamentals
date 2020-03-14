/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 14:23:32
 * @modify date 2020-02-22 14:23:32
 * @desc Core Module: net
 */
const net=require('net');

const client=net.createConnection({
    port:8080
})

client.on('data',(data)=>{
    console.log(`Message recieved from sever: ${data}`)
})