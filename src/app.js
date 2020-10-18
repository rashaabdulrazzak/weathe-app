const path = require('path')
const express = require('express')
// we require hbsto be able to use parials 
const hbs = require('hbs')
 const geocode = require('./util.js/geocode')
 const forcast = require('./util.js/forcast')

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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
// { latitude, longitude, location }={} if we provide non meaning address like sign to prevent app from crash 
    geocode(req.query.address, (error, { latitude, longitude, location }={}) => {
        if (error) {
            return res.send({ error })
        }

        forcast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error : 'you must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
})
// get('*' call any link nt calling before )
app.get('/help/*',(req,res)=>{
    res.render('notfound',{
        title:'weather app',
        name:'rasha',
        errorMsg: 'help article not found'
    })
})
app.get('*',(req,res)=>{
    res.render('notfound',{
        title:'weather app',
        name:'rasha',
        errorMsg: 'Page not found'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
    console.log(publicDirectoryPath)
})