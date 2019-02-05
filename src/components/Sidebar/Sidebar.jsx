import React, { Component } from 'react';
import './Sidebar.scss'


class Sidebar extends Component {
  render() {
    const categories = ['people', 'planets', 'vehicles']
    return (
      <div className='Sidebar'>
        {
          categories.map((category) => {
            return <button>{category}</button>
          })
        }
      </div>
    );
  }
}

export default Sidebar;