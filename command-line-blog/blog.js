/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-24 02:22:20
 * @modify date 2020-02-24 02:22:20
 * @desc a command line blog application. stores text typed on the cl
 * modules used: fs & readline
 * methods used: question()
 * 
 */
const fs = require('fs')
const readline = require('readline')
    //Readline is a module that is used for creating an interface on the cl

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const file = 'myblog.txt'
const author = process.argv[2] || 'unknown'
const blogTitle = process.argv[3] || 'New Blog Post'


//question() is a method that prints the statement on cl and the result 
//is stored in the variable passed as the parameter 

//the repeat(integer) called on a string repeatedly prints
rl.question('Enter your blog post: ', (postContent) => {
    const blogEntry = `
    ${'-'.repeat(blogTitle.length)}
    ${blogTitle}
    ${'-'.repeat(blogTitle.length)}
    By ${author} on ${new Date()}
    ${postContent}
    `

    fs.appendFile(file, blogEntry, (err) => {
        if (err) {
            console.log('There was a problem saving your blog post')
            throw err;
        }
        console.log('The Blog post was stored succesfully')
    })
    rl.close()
})
