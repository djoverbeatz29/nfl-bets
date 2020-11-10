import React from 'react';
import GetGamesInfo from './GetGamesInfo';
import GameInfo from './components/GameInfo';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const games = GetGamesInfo();
  
  return (
    <BrowserRouter>
      <div className="App">
        {games.map(game => <GameInfo game={game} />)}
      </div>
    </BrowserRouter>
  );
}

export default App;