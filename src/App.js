import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>BROOKE VON LOH</h1>
        <h2>PHOTOGRAPHY</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">YAY PHOTOS</a>
        </header>
      </div>
    );
  }
}

export default App;
