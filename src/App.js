import React, { Component } from 'react';
import './App.css';
import FrontpageMovies from './components/Frontpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontpageMovies></FrontpageMovies>
      </div>
    );
  }
}

export default App;
