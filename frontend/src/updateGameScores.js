import React from 'react';

const updateGames = () => {

    const NFL_URL;
    const [url, setUrl] = React.useState('');
    const [count, setCount] = React.useState(0);
    const someRef = React.useRef(0);

    const updateGame = id => {
        fetch(`${NFL_URL}/${id}`, {method: 'POST'})
        .then(r=>r.json())
        .then(data=>{})
    }
    
    const lookForGames = () => {
        fetch(NFL_URL)
        .then(r=>r.json())
        .then(games.forEach(game => {
            if (game.finished) {
                fetch(NFL)
            }
        }))
    }
    
    React.useEffect(() => {
        const timer = setInterval(() => tick(), 3600*100);
        return () => clearInterval(timer);
    });    

}

ReactDOM.render(<updateGames/>, document.getElementById('root'));