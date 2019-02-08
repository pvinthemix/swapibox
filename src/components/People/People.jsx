import React, { Component } from 'react';
import './People.scss'


class People extends Component {
  render() {
    const { characters } = this.props
    return (
      <div className='character-card-container'>
      {
        characters.map((character) => {
          return <div className="character-card">
            <p className="character-name">{character.name}</p>
            <p className="character-homeworld">Homeworld: {character.homeworld}</p>
            <p className="character-species">Species: {character.species}</p>
            <p className="character-population">Population: {character.population}</p>
          </div>
        })
      }  
      </div>
    );
  }
}

export default People;


