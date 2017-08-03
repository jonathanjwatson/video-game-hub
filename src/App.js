import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './intro';
import Banana from './Banana';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {data.map((banana, i) => {
            return <Banana key={i} banana={banana}/>
          })}        </p>
      </div>
    );
  }
}



window.onload = function() {
  console.log("This is working")
};

export default App;