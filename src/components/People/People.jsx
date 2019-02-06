import React, { Component } from 'react';
import './People.scss'


class People extends Component {
  render() {
    const { characters, planets, species, vehicles } = this.props
    return (
      <div className='character-card-container'>
      {
        characters.map((character) => {
          return <div className="character-card">
            <p className="character-name">{character.name}</p>
            <p className="character-homeworld">Homeworld:</p>
            <p className="character-species">Species:</p>
            <p className="character-population">Population:</p>
          </div>
        })
      }  
      </div>
    );
  }
}

export default People;


