/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-02-22 00:29:57
 * @modify date 2020-02-22 00:29:57
 * @desc Core Module:Events
 */

const events = require('events');

let usersLoggedIn = 0;

//creates an object of the event module which enables us to send event messages.
const eventEmitter = new events.EventEmitter();

//event listener
eventEmitter.on('userLoggedIn', () => {
    usersLoggedIn += 1;
    console.log(`There are ${usersLoggedIn} users logged in`)
})

//generating event
eventEmitter.emit('userLoggedIn');