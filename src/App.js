import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './intro';
import Banana from './Banana';
import axios from 'axios';

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

axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fatlanta.craigslist.org%2Fsearch%2Fvga%3Fformat%3Drss')
.then(function(response) {
  console.log("Working");
  console.log(response);
  console.log(response.request.responseText)
  var newResponse = JSON.parse(response.request.responseText);
  // console.log(newResponse);
  var singleItem = newResponse.items[1];
  console.log(singleItem);
  console.log(singleItem.title);
  console.log(singleItem.link);
}).catch((err) => {
  console.log(`Not working ${err}`)
});



window.onload = function() {
  console.log("This is working")
};

export default App;