import React, { Component } from 'react';
import './Landing.scss';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      openingFilmCrawl: '',
      title: '',
      year: ''
    };
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
    }

  render() {
    const { openingFilmCrawl, title, year } = this.state;
    return (
      <div className='Landing'>
        <p className="film-title">{title}</p>
        <p className="film-year">({year})</p>
        <p className="film-opening-crawl">{openingFilmCrawl}</p>
      </div>
    );
  }
}

export default Landing;