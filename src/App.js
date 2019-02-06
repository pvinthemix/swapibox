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
      selectedCategory: '',
      openingFilmCrawl: '',
      title: '',
      year: '',
      characters: [],
      species: [],
      vehicles: [],
      planets: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.round(Math.random() * (data.count - 1));
        const { opening_crawl, title, release_date } = data.results[randomIndex];
        this.setState({
          openingFilmCrawl: opening_crawl,
          title: title,
          year: release_date.split('-')[0]
        });
      })
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({
          characters: data.results
        });
      })
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/species/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({
          species: data.results
        });
      })
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({
          vehicles: data.results
        });
      })
      .catch(error => console.log(error));
    
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({
          planets: data.results
        });
      })
      .catch(error => console.log(error));
  }

  userSelectedCategory = (selectedCategory) => {
    this.setState({
      selectedCategory
    })
  }

  renderSelectedCategory = () => {
    const { selectedCategory, characters, planets, vehicles, species } = this.state;
    switch (selectedCategory) {
      case 'People':
        return <People characters={characters}
                        planets={planets}
                        vehicles={vehicles}
                        species={species}/>
      case 'Planets':
        return <Planets />
      case 'Vehicles':
        return <Vehicles />
      default:
        return <Landing openingFilmCrawl={this.state.openingFilmCrawl}
                        title={this.state.title}
                        year={this.state.year}/>
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
