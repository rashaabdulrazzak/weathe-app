const express = require('express')

const app = express()

app.get('',(req,res)=>{
     res.send('hello express')
})
app.get('/weather',(req,res)=>{
   res.send('Weather page ')
})
app.get('/help',(req,res)=>{
    res.send('hello help')
})
app.get('/about',(req,res)=>{
    res.send('about page ')
 })
// start the server 
app.listen(3000,()=>{
    console.log('server is set up to port 3000')
})