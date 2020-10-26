import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch('http://localhost:3001/games')
      .then(r=>r.json())
      .then(rez=>{
        console.log('Games', rez.data);
        setGames(rez.data.filter(game => new Date(game.start_time) > new Date()));
      })
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPlayer() {
      fetch('https://localhost:3001/players/1')
      .then(r=>r.json())
      .then(rez=>setPlayer(rez.data))
    }
    fetchPlayer();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Login} />
        <Route path='/home' render={() => <Home {...games} {...player} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;