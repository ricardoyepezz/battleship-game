import React, { useState } from "react";
import { Game } from "./js/Game";
import { Home } from "./js/Home";
import './styles/style.css'


function App() {
  const [appState, setAppState] = useState('Home')
  const startGame = () => { setAppState('Game') }
  return (
    <div className="App">
      {appState === 'Game' ? <Game /> : <Home startGame={startGame} />}
    </div>
  );
}

export default App;
