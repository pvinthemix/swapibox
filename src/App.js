import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './components/Landing/Landing';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Vehicles from './components/Vehicles/Vehicles';
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
    const { selectedCategory } = this.state;
    switch (selectedCategory) {
      case 'Landing':
        return <Landing />
      case 'People':
        return <People />
      case 'Planets':
        return <Planets />
      case 'Vehicles':
        return <Vehicles />
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
