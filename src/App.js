import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBarExampleComposition} from './components/Nav'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider> 
      <div className="App">
        <AppBarExampleComposition></AppBarExampleComposition>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Francisco, Welcome to React</h2>
        </div>
        <p className="App-intro">
          Its time to create an Awesome App.
        </p>
        <div id="tutorial"></div>
      </div>
      </MuiThemeProvider> 
      
    );
  }
}

export default App;
