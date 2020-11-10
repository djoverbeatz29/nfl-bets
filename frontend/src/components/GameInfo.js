import React from 'react';

export default function GameInfo(props) {
    const {homeTeam, awayTeam, spreadAmount, gameTime} = this.props;
    let matchup;
    if (spreadAmount === 0) {
        matchup = `${awayTeam} @ ${homeTeam} (Pick)`;
    }
    else if (spreadAmount > 0) {
        matchup = `${awayTeam} (${-spreadAmount}) @ ${homeTeam}`;
    }
    else {
        matchup = `${awayTeam} @ ${homeTeam} (${spreadAmount})`;
    }

    return (
        <div>
            <h2>{matchup}</h2>
            <h2>{gameTime}</h2>
        </div>
    )
}