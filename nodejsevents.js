const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Turn off motor');
  setTimeout(() =>{
      console.log("Please turn off motor")
  },3000)
});


// node event are called by emit call 

 myEmitter.emit('WaterFull')