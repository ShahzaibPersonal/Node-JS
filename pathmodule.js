const path  = require ('path')

// what ever is the given path it will help us extract base name
const a1 = path.basename('C:\\temp\\myfile.html');


// what ever is the given path it will help us extract directory name 
const a2 = path.dirname('C:\\temp\\myfile.html');

console.log(a1)
console.log(a2)