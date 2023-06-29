//Modules = Only share minimum (only whats relevant to us)

//Common JS , Every file is module 


/* const secret = "I AM BATMAN"
const bruce = "bruce"
const matt = "matt"

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
} */


const name = require ('./4name')
const sayHi = require ('./5-util')
const chadLad = require ('./6alternativeFlavour')
console.log(chadLad)
console.log(name)

require('./  ')


/*
sayHi("Tori")
sayHi(name.bruce)
sayHi(name.matt)
*/
