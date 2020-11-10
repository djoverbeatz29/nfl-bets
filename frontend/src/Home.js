import React from 'react'; 
import Matchup from './Matchup';

export default class Home extends React.Component {
    constructor(props) {
        this.state = {
            games: this.props.games,
            player: this.props.player
        }
    }

    render() {
        return (
            <div className="App">
                // Ridiculous looking code that actually yields the correct week, more or less!
                <h1>NFL Schedule - Week {Math.ceil((new Date().getTime() - (new Date(2020, 8, 10)).getTime())/(86400*1000*7))}</h1>
                {this.state.games.map((game, i) => <Matchup player={this.state.player} info={game} key={i}/> )}
            </div>
        )
    }
}