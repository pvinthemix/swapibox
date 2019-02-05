import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './components/Landing/Landing';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: 'Landing'
    }
  }

  userSelectedCategory = (selectedCategory) => {
    this.setState({
      selectedCategory
    })
  }

  renderSelectedCategory = () => {
    switch (this.state.selectedCategory) {
      case 'Landing':
        return <Landing />
      // case 'People':
      //   return <People />

    }
  }

  render() {
    
    return (
      <div className="App">
        <Sidebar userSelectedCategory={this.userSelectedCategory}/>
        {this.renderSelectedCategory()}
      </div>
    );
  }
}

export default App;
