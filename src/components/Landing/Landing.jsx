import React, { Component } from 'react';
import './Landing.scss';


class Landing extends Component {

  render() {
    const { openingFilmCrawl, title, year } = this.props;
    return (
      <div className='Landing'>
        <p className="film-title">{title}</p>
        <p className="film-year">{year}</p>
        <p className="film-opening-crawl">{openingFilmCrawl}</p>
      </div>
    );
  }
}

export default Landing;