import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
           <Main />
        </div>
      </div>
    );
  }
}

export default App;
