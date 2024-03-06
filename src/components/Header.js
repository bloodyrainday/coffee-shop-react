import React from 'react';
import Image from './Image';
import logo from '../icons/logo.svg';
import menu from '../icons/coffee-cup.svg';

class Header extends React.Component {
  render() {
    return (
        <header className='header'>
          <div className='container'>
            <nav>

            <div className='nav-logo'>
              <a className='nav-logo-link' href="##">
                <Image image={logo}/>
              </a>
            </div>

            <div className='nav-links'>
              <ul className='nav-links-list'>
                <li className='nav-links-list-item'>Favorite coffee</li>
                <li className='nav-links-list-item'>About</li>
                <li className='nav-links-list-item'>Mobile app</li>
                <li className='nav-links-list-item'>Contact us</li>
              </ul>
            </div>

            <div className='nav-menu'>
              <div className='nav-menu-inner'>
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
              </div>
            </div>

          </nav>
          </div>
          
        </header>
    )
  }
}

export default Header