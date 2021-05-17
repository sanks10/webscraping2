const request = require('request');
const fs=require('fs');

request("https://www.google.com", callback);


function callback(error, response, html) {
    //console.log("body: ", body);
    //console.log(error);
    if(!error) fs.writeFileSync("index.html", html)
}
