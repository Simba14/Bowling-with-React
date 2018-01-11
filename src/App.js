import React, { Component } from 'react';
import './App.css';

import Scorecard from './components/Scorecard'
import Controls from './components/Controls'

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
        <Controls />
      </div>
    );
  }
}

export default App;
