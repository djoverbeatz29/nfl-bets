import React from 'react';
import getGamesInfo from './getGamesInfo';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const games = getGamesInfo();
  
  return (
    <BrowserRouter>
      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;