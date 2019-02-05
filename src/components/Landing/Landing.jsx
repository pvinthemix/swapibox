import React, { Component } from 'react';
import './Landing.scss';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      openingFilmCrawls: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.round(Math.random() * (data.count - 1));
        const openingFilmCrawl = data.results[randomIndex].opening_crawl;
        this.setState({
          openingFilmCrawls: openingFilmCrawl
        });
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className='Landing'>
        <p className="opening-crawl">{this.state.openingFilmCrawls}</p>
      </div>
    );
  }
}

export default Landing;