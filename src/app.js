const express = require('express')

const app = express()
// send html
app.get('',(req,res)=>{
     res.send('<h1>hello express</h1>')
})
// send json
app.get('/weather',(req,res)=>{
   res.send({
       location : 'Boston',
       teprature:'25'
   })
})
// send array 
app.get('/help',(req,res)=>{
    res.send([{name : 'rasha'},{name : 'rasha'}])
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page </h1>')
 })
// start the server 
app.listen(3000,()=>{
    console.log('server is set up to port 3000')
})