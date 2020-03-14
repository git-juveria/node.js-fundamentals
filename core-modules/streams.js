/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 15:20:21
 * @modify date 2020-02-22 15:20:21
 * @desc Understanding Streams: 
 */

//Streams are way to handle reading/writing files, network comm, end-to-end info exchnge.
//Streams doesnt read all data at once. rather reads it in chunks, pieceby peice.
//process contents without keeping it all in memory
//enables to process large amt of data
// provide two major advantages compared to other data handling methods: Time Efficiency, memory efficiency

const fs = require('fs')
const http = require('http')

// const server = http.createServer(
//     (request, response) => {
//         fs.readFile('./hello.html', (err, val) => {
//             if (err) throw err;
//             response.end(val) //response obj is a stream itself
//         })
//     }
// ).listen(8080, 'localhost')

const server = http.createServer(
    (request, response) => {
        const file = fs.createReadStream('./hello.html') //returns a stream
        file.pipe(response) //pipe() combine both the streams 
    }
).listen(8080, 'localhost')