import React, { Component } from 'react';
import './App.css';

import Scorecard from './components/Scorecard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Blundell's Bowling</h1>
        </header>
        <p className="Intro">
          Enter your score in after each bowl
        </p>
        <Scorecard />
      </div>
    );
  }
}

export default App;
