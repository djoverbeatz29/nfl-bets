import React from 'react'; 
import Matchup from './Matchup';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: this.props.games,
            player: this.props.player
        }
    }

    render() {
        return (
            <div className="App">
                <h1>NFL Schedule - Week 3</h1>
                {this.state.games.map((game, i) => <Matchup player={this.state.player} info={game} key={i}/> )}
            </div>
        )
    }
}