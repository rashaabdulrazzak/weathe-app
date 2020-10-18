const request = require('request')

/*const geocode=(address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFzaGEyMyIsImEiOiJja2c5ajI2cnkwNzN6MnlrNjFjdXdqd3I1In0.ylHflDyYPxekAANX8vjmLQ&limit=1'
    request({url:url,json:true},(error,response)=>{
       if(error){
           callback('un able to connect to location service',undefined)
           }else if(response.body.features.length===0){
              callback(' there is not match, unable to find location',undefined)
           }else{
               callback(undefined,{
                   latitude : response.body.features[0].center[1],
                   longitude : response.body.features[0].center[0],
                   location : response.body.features[0].place_name
               })           
              
           }
       
   })
   }*/
   // geocode short hand and destruction 
   const geocode=(address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFzaGEyMyIsImEiOiJja2c5ajI2cnkwNzN6MnlrNjFjdXdqd3I1In0.ylHflDyYPxekAANX8vjmLQ&limit=1'
    request({url,json:true},(error,{body})=>{
       if(error){
           callback('un able to connect to location service',undefined)
           }else if(body.features.length===0){
              callback(' there is not match, unable to find location',undefined)
           }else{
               callback(undefined,{
                   latitude : body.features[0].center[1],
                   longitude : body.features[0].center[0],
                   location : body.features[0].place_name
               })           
              
           }
       
   })
   }
   module.exports = geocode;