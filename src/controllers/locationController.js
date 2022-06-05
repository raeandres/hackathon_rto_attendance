const request = require('request');


export const getLocation = (req, res) => {

    //  Get the reverse geolocation from the request body
    let lat = req.body.lat;
    let lng = req.body.lng;

    console.log(lat, lng);

     let _EXTERNAL_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

     request(_EXTERNAL_URL, {
        json: true
     }, (err, apiResponse, body) => {

        console.log(apiResponse);

        if (err) {
            res.send(err);
        }
        else {
            // evaluate the response if the client's location is within Bel-Air Makati City
            let response = {
                "status": "success",
                "message": "Login Successful",
                "data": {
                    location: body
                }
            }
            res.json(response);
        }
     })
    
}

