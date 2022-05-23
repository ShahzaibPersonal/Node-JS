
// first of all we made an object of our own name that has some variables and values 
//  after that we exported the module with --> export.module = obj_name  then we used common JS module method as below
// common js module 
const shahzaib = require("./second")

//  there is another way to import module which is ES6 or ECMAScript modules


// now we can access our module here with const name 
console.log("Hello world", shahzaib)

// we can destructure our module here as well 
console.log("Hello world", shahzaib.name)
console.log("Hello world", shahzaib.favNumber)
console.log("Hello world", shahzaib.developer)



/**
 * *Module wrapper function
 */

// function (exports, require, module, __filename, __dirname){

// }

console.log(exports, require, module, __filename, __dirname)


//  there is another way to import module which is ES6 or ECMAScript modules