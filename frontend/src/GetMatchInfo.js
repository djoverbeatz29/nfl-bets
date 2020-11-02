function getVegasTable() {
    const info = [];

    fetch("https://www.vegasinsider.com/nfl/odds/las-vegas/")
    .then(r=>r.json())
    .then(data=>{
        // document.querySelectorAll("tr td[class='viCellBg1 cellTextNorm cellBorderL1 gameCell']");
        const games = document.querySelectorAll("tr");
        games.forEach(game => {
            const homeTeam = game.querySelector('home-team-info').innerHTML;
            const awayTeam = game.querySelector('away-team-info').innerHTML;
            const gameTime = new Date(game.querySelector('game-time'));
            const spread = parseFloat(game.querySelector('game-spread'));
            info.push({
                homeTeam,
                awayTeam,
                gameTime,
                spread
            });
        })
    })

    return info;
}