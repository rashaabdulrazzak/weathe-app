const request = require('request')
// forcasting 
/*const forcast=(lat,long,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=08b514da3d949c1448df5a0128eecdde&query=New%20York&units=f';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('un able to connect to weather service',undefined)
        }else if (response.body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback('undefined',{
                current : response.body.current.temperature,
                feel : response.body.current.feelslike,
                over :response.body.current.weather_descriptions[0]
            })
        }
    
    })
}*/
// forcasting using short hand and destruction
const forcast=(lat,long,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=08b514da3d949c1448df5a0128eecdde&query=New%20York&units=f';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('un able to connect to weather service',undefined)
        }else if (body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    
    })
}
module.exports = forcast