import React, { Component } from 'react';
import Image from './Image';
import menu from '../icons/coffee-cup.svg';

export default class Burger extends Component {
  render() {
    return (
      <div className='burger-wrapper'>
        <div className='burger'>
          <ul className='burger-list'>
            <a className='burger-list-item-link' href='./#favorite'><li className='burger-list-item'>Favorite coffee</li></a>
            <a className='burger-list-item-link' href='./#cozy'><li className='burger-list-item'>About</li></a>
            <a className='burger-list-item-link' href='./#download'><li className='burger-list-item'>Mobile app</li></a>
            <a className='burger-list-item-link' href='./#footer'><li className='burger-list-item'>Contact us</li></a>
          </ul>
          <a className='nav-menu-inner' href="/coffee-shop-react/menu">
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
          </a>
        </div>
      </div>
    )
  }
}
