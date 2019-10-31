import React from 'react';
import logo from './logo.svg';
import './App.css';

import StateHookComponent from './components/state-hook';
import EffectHookComponent from './components/effect-hook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateHookComponent />
        <EffectHookComponent />
      </header>
    </div>
  );
}

export default App;
