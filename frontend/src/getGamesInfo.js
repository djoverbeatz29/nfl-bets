function getGamesInfo() {
    const info = [];

    fetch("https://www.vegasinsider.com/nfl/odds/las-vegas/")
    .then(r=>r.json())
    .then(data=>{
        const myRows =  [...document.querySelectorAll("table[class='frodds-data-tbl'] tr")];
        myRows.forEach(row=>{
            const rowData = {};

            let rowText = row.querySelector("td[class='viCellBg1 cellTextNorm cellBorderL1 gameCell']").innerText;
            rowText = rowText.split('\n');

            let rowDate = rowText[0];
            rowDate = rowDate.split(' ');
            rowDate[0] += "/2020";
            rowDate = rowDate.join(' ');
            rowDate = new Date(rowDate);
            rowData['gameTime'] = rowDate;
            
            let awayTeam = rowText[1];
            awayTeam = awayTeam.match(/[A-Za-z]+/)[0];
            rowData['awayTeam'] = awayTeam;

            let homeTeam = rowText[1];
            homeTeam = homeTeam.match(/[A-Za-z]+/)[0];
            rowData['homeTeam'] = homeTeam;

            const cells = row.querySelectorAll("td[class='viCellBg1 cellTextNorm cellBorderL1 center_text nowrap oddsCell']");
            let spread = cells[1];
            let spreadText = spread.querySelector('a').innerText.trim().split('\n');
            let spreadAmount;
            if (spreadText[0].match(/PK/) || spreadText[1].match(/PK/)) {
              spreadAmount = 0;
            }
            else if (spreadText[0].match(/^-[0-9]+/)) {
              spreadAmount = -parseInt(spreadText[0].match(/^-[0-9]+/));
            }
            else if (spreadText[1].match(/^-[0-9]+/)) {
              spreadAmount = parseInt(spreadText[1].match(/^-[0-9]+/));
            }
            rowData['spread'] = spreadAmount;

            info.push(rowData);
        })
    })

    return info;
}