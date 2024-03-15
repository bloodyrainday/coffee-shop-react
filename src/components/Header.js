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
              <a className='nav-logo-link' href="/coffee-shop-react">
                <Image image={logo}/>
              </a>
            </div>

            <div className='nav-links'>
              <ul className='nav-links-list'>
                <a className='nav-links-list-link' href='./#favorite'><li className='nav-links-list-link-item'>Favorite coffee</li></a>
                <a className='nav-links-list-link' href='./#cozy'><li className='nav-links-list-link-item'>About</li></a>
                <a className='nav-links-list-link' href='./#download'><li className='nav-links-list-link-item'>Mobile app</li></a>
                <a className='nav-links-list-link' href='./#footer'><li className='nav-links-list-link-item'>Contact us</li></a>
              </ul>
            </div>

            <div className='nav-menu'>
              <a className='nav-menu-inner' href="/coffee-shop-react/menu">
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
              </a>
            </div>

          </nav>
          </div>
          
        </header>
    )
  }
}

export default Header