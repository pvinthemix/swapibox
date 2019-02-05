import React, { Component, Fragment } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './components/Landing/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <Landing />
      </Fragment>
    );
  }
}

export default App;
