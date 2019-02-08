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
    this.fetchPeople();
    // this.fetchPlanets();
    // this.fetchVehicles();



    // fetch('https://swapi.co/api/films')
    //   .then(response => response.json())
    //   .then(data => {
    //     const randomIndex = Math.round(Math.random() * (data.count - 1));
    //     const { opening_crawl, title, release_date } = data.results[randomIndex];
    //     this.setState({
    //       openingFilmCrawl: opening_crawl,
    //       title: title,
    //       year: release_date.split('-')[0]
    //     });
    //   })
    //   .catch(error => console.log(error));


    // fetch('https://swapi.co/api/species/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results)
    //     this.setState({
    //       species: data.results
    //     });
    //   })
    //   .catch(error => console.log(error));

    // fetch('https://swapi.co/api/vehicles/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results)
    //     this.setState({
    //       vehicles: data.results
    //     });
    //   })
    //   .catch(error => console.log(error));
    
    // fetch('https://swapi.co/api/planets/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results)
    //     this.setState({
    //       planets: data.results
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  fetchFilmCrawl = () => {
    
  }

  fetchPeople = () => {
    const charactersObject = {}
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        const characters = data.results
        characters.forEach(async character => {
          // populate characters object
          charactersObject[character.name] = character;
          // fetch homeworld
          const responseHomeworld = await fetch(character.homeworld);//url
          const homeworld = await responseHomeworld.json();
          charactersObject[character.name].homeworld = homeworld.name;
          charactersObject[character.name].population = homeworld.population;
          // fetch species
          const responseSpecies = await fetch(character.species);
          const species = await responseSpecies.json();
          charactersObject[character.name].species = species.name;
        })
        this.setState({
          characters: Object.values(charactersObject)
        })
      })
      .catch(error => console.log(error));
  }

  userSelectedCategory = (selectedCategory) => {
    this.setState({
      selectedCategory
    })
  }

  renderSelectedCategory = () => {
    const { selectedCategory, characters } = this.state;
    switch (selectedCategory) {
      case 'People':
        return <People characters={characters}/>
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
