import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './components/Landing/Landing';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Landing />
      </div>
    );
  }
}

export default App;
