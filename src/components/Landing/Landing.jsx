import React, { Component } from 'react';
import './Landing.scss';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      openingCrawl: ""
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/1/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          openingCrawl: data.opening_crawl
        });
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className='Landing'>
        <p className="opening-crawl">{this.state.openingCrawl}</p>
      </div>
    );
  }
}

export default Landing;