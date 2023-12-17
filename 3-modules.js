//global--
// console.log(__dirname)
 
// setInterval(()=>{
//     console.log('hello world')
// },1000)

//Modules--

const name = require('./4-names')

const sayHi = require('./5-utlis')
const data = require('./6-alternative-fkavor')

const addvalue = require('./7-mind-grebade')
console.log(addvalue(100,200));
console.log(data)
console.log(name)
sayHi(name.john)
sayHi(name.peter)
