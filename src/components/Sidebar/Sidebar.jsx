import React, { Component } from 'react';
import './Sidebar.scss'


class Sidebar extends Component {
 
handleClick = (event) => {
  this.props.userSelectedCategory(event.target.innerText)
}

  render() {
    const categories = ['People', 'Planets', 'Vehicles', 'Favorites'];
    return (
      <div className='Sidebar'>
        {
          categories.map((category) => {
            return <button onClick={this.handleClick}>{category}</button>
          })
        }
      </div>
    );
  }
}

export default Sidebar;