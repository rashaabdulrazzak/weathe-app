const path = require('path')
const express = require('express')
// we require hbsto be able to use parials 
const hbs = require('hbs')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath =  path.join(__dirname,'../templates/partials')
/*set up handle bar engine and views location and partials  */
app.set('view engine', 'hbs'); 
app.set('views',viewPath)
hbs.registerPartials(partialPath)

// set up static location 
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'rasha'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Abou me',
        name:"Mark "
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'weather app',
        name:'rasha',
        message:'that is ahelp'
    })
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
    console.log(publicDirectoryPath)
})
