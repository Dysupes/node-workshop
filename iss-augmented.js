var prompt = require('prompt');
var request = require('request');
var issURL = 'http://api.open-notify.org/iss-now.json';
var promptURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

 Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }

function calcDistance(lat1,lat2,lon1,lon2){
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    console.log("The distance from you to the ISS is : " + Math.floor(d) + " m.");
}

request(issURL, function(err, response, body){
    if(err){
        console.log('You have encountered an error.');
    }
    else {
        var parsedBody1 = JSON.parse(body);
        var issLatitude = parsedBody1.iss_position.latitude;
        console.log('The ISS latitude is: ' + issLatitude);
        var issLongitude = parsedBody1.iss_position.longitude;
        console.log('The ISS longitude is: ' + issLongitude);
    
        prompt.get('userLocation', function(err, content){
            if(err){
                console.log('You have encountered an error.');
            }
            else {
                var locationURL = promptURL + content.userLocation;
            
            request(locationURL, function(err2, response2, body2){
                if(err){
                   console.log('You have encountered an error.'); 
                }
                else {
                    var parsedUserLocation = JSON.parse(body2);
                    var userLatitude = parsedUserLocation.results[0].geometry.location.lat;
                    console.log('The user\'s latitude is: ' + userLatitude);
                    var userLongitude = parsedUserLocation.results[0].geometry.location.lng;
                    console.log('The user\'s longitude is: ' + userLongitude);
                    calcDistance(userLatitude,issLatitude,userLongitude,issLongitude);    
                }
            });
            }
        });
    }
});

