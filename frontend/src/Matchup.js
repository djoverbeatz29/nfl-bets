import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Matchup(props) {
    const {away_team_id, home_team_id, spread, start_time, id} = props.info;
    const player = props.player;
    const dateStr = (new Date(start_time)).toLocaleDateString();
    const timeStr = (new Date(start_time)).toLocaleTimeString();
    const [pick, setPick] = useState(null);
    const [home, setHome] = useState({});
    const [away, setAway] = useState({});
    let line;

    useEffect(() => {
        async function fetchData() {
            const away = (await axios(`http://localhost:3001/teams/${away_team_id}`)).data;
            const home = (await axios(`http://localhost:3001/teams/${home_team_id}`)).data;
            setAway(away);
            setHome(home);
        }
        fetchData();
    })

    if (spread > 0) {
        line = `${away.name} (${-spread}) @ ${home.name}`;
    }
    else if (spread < 0) {
        line = `${away.name} @ ${home.name} (${spread})`;
    }
    else {
        line = `${away} @ ${home} (Pick)`;
    }

    const handleChange = e => {
        setPick(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:3001/picks/`)
        .then(r => r.json())
        .then(pickInfo => {
            const pick = pickInfo.find(pick => pick.player_id === player.id && pick.game_id === id);
            if (pick) {
                fetch(`http://localhost:3001/picks/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({team_id: pick.id})
                });
            }
            else {
                setPick(e.target.value);
                fetch(`http://localhost:3001/picks/${id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        game_id: id,
                        player_id: player.id,
                        team_id: pick.id})
                });
            }
            console.log('Pick confirmed!');
        })
    }

    return (
        <div className='game-info'>
            <h2>{dateStr} - {timeStr}</h2>
            <h2>{line}</h2>
            <form className='pick'
                onSubmit={handleSubmit}>
                <label>Your pick: </label>
                <select
                    onChange={handleChange}
                    value={pick}
                >
                    <option value={away.id}>{away.name}</option>
                    <option value={home.id}>{home.name}</option>
                    
                </select>
                <button type='submit'>Set Pick</button>
            </form>
        </div>
    )
}