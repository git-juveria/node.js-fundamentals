/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 14:23:16
 * @modify date 2020-02-22 14:23:16
 * @desc Core Module:http
 */
const http=require('http')

const server=http.createServer(
    (request,response)=>{
        const name=request.url.slice(1)
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end(`<h1>Hello ${name}</h1>`)
    }
).listen(8080,'localhost')
