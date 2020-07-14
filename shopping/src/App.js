import React, { Component } from 'react';
import './App.css';
import { Items } from './data/mainPageItem'
import Routs from './router/routs'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Routs />
      </div>
    );
  }
}

export default App;
