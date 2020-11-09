export default function getGamesInfo() {
    // Array that will eventually hold game info objects
    const info = [];

    fetch("https://www.vegasinsider.com/nfl/odds/las-vegas/")
    .then(r=>r.text())
    .then(data=>{
        // All the rows containing the individual game data
        const myRows =  [...document.querySelectorAll("table[class='frodds-data-tbl'] tr")];
        // Loop through each row and extract needed game data
        myRows.forEach(row=>{
            // Declare object that will eventually hold the relevant pieces of data
            const rowData = {};
            // Variable storing inner text from cell with game time & team names
            let rowText = row.querySelector("td[class$=gameCell]").innerText;
            rowText = rowText.split('\n');
            console.log(rowText);

            // Add year 2020 to the datetime string, then turn into Date object and add to rowData object
            let rowDate = rowText[0];
            rowDate = rowDate.split(' ');
            rowDate[0] += `/${(new Date()).getFullYear()}`;
            rowDate = rowDate.join(' ');
            rowDate = new Date(rowDate);
            rowData['gameTime'] = rowDate;
            console.log(rowDate);

            // Remove number from away team string, then add to rowData
            let awayTeam = rowText[1];
            awayTeam = awayTeam.match(/[A-Za-z\. ]+/)[0];
            rowData['awayTeam'] = awayTeam;
            console.log(awayTeam);

            // Remove number from home team string, then add to rowData
            let homeTeam = rowText[2];
            homeTeam = homeTeam.match(/[A-Za-z\. ]+/)[0];
            rowData['homeTeam'] = homeTeam;
            console.log(homeTeam);

            // Selects 2nd cell, which contains consensus line
            const cells = row.querySelectorAll("td[class$=oddsCell]");
            let spread = cells[1];
            let spreadText = spread.querySelector('a').innerText.trim().split('\n');
            let spreadAmount;
            // Logic that determines whether home or away team is favored, based on whether line is found in top or bottom row of cell text
            // In NFL, away team is always listed top, home on bottom, so position of line on top/bottom determines whether home/away team is favored
            // Checks for -number or for PK, which indicates 'pick em' (i.e. 0 spread, 50/50)
            if (spreadText[0].match(/PK/) || spreadText[1].match(/PK/)) {
              spreadAmount = 0;
            }
            else if (spreadText[0].match(/^-[0-9½\.]+/)) {
              spreadAmount = spreadText[0].match(/^-[0-9½\.]+/)[0];
              spreadAmount = spreadAmount.replace('½', '.5');
              spreadAmount = -parseFloat(spreadAmount);
            }
            else if (spreadText[1].match(/^-[0-9½]+/)) {
              spreadAmount = spreadText[1].match(/^-[0-9½\.]+/)[0];
              spreadAmount = spreadAmount.replace('½', '.5');
              spreadAmount = parseFloat(spreadAmount);
            }
            rowData['spread'] = spreadAmount;
            console.log(spreadAmount);

            // After all data has been added to object, push object to info array
            info.push(rowData);
        })
    })
    // Return array containing game info objects
    return info;
}