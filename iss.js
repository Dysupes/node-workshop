var request = require('request');
var issURL = 'http://api.open-notify.org/iss-now.json';

request(issURL, function(err, response, body){
    if(err){
        console.log('You encountered an error!');
    }
    else{
        var parsedBody = JSON.parse(body);
        console.log("ISS Latitude: " + parsedBody.iss_position.latitude.toFixed(2));
        console.log("ISS Longitude: " + parsedBody.iss_position.longitude.toFixed(2));
    }
});

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })