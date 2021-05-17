const request = require('request');
//const fs=require('fs');
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/series/county-championship-2021-1244186/essex-vs-derbyshire-group-1-1244259/live-cricket-score", callback);


function callback(error, response, html) {
    //console.log("body: ", body);
    //console.log(error);
    //if(!error) fs.writeFileSync("index.html", html)

    if(!error){


        const manipulationtool = cheerio.load(html);
        let comment = manipulationtool(".match-comment-wrapper .match-comment-long-text p");
        let c = manipulationtool(comment[0]).text();
        console.log(c);
}
}