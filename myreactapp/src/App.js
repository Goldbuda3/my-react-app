import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './nameForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameForm/>
      </header>
    </div>
  );
}

export default App;
