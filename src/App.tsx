import React from 'react';
import logo from './logo.svg';
import { Game } from './game';
import './App.css';

function App() {
  const handleClick = () => {
    const game = new Game();
    game.printGame();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
