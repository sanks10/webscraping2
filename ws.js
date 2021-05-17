const request = require('request');

request("https://www.google.com", callback);


function callback(error, response, body) {
    console.log("body: ", body);
    console.log(error);
}
