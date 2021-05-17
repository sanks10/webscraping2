const request = require('request');
//const fs=require('fs');
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/series/county-championship-2021-1244186/essex-vs-derbyshire-group-1-1244259/full-scorecard", callback);


function callback(error, response, html) {
    //console.log("body: ", body);
    //console.log(error);
    //if(!error) fs.writeFileSync("index.html", html)

    if(!error){


        const manipulationtool = cheerio.load(html);
        let comment = manipulationtool(".table.bowler");

        let player="";
        let maxWickets=0;

        for(let i=0;i<comment.length;i++){
            let tr=manipulationtool(comment[i]).find("tbody tr");
            for(let j=0;j<tr.length;j++){
                let columns=manipulationtool(tr[j]).find("td");
                let plWickets=manipulationtool(columns[4]).text();
                let plName=manipulationtool(columns[0]).text();
                if(plWickets>maxWickets){
                    player=plName;
                    maxWickets=plWickets;
                }
            }


        }
        console.log(player);


        //let c = manipulationtool(comment[0]).find("<td>9</td>");
        //console.log(c);        
}
}