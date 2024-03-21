import React from 'react';
import Image from './Image';
import menu from '../icons/coffee-cup.svg';
import { Link } from 'react-router-dom';

function Burger({onClickBurger}) {
  
    return (
      <div className='burger-wrapper'>
        <div className='burger'>
          <ul className='burger-list'>
            <a className='burger-list-item-link' href='./coffee-shop-react/#favorite' onClick={onClickBurger}><li className='burger-list-item'>Favorite coffee</li></a>
            <a className='burger-list-item-link' href='./coffee-shop-react/#cozy' onClick={onClickBurger}><li className='burger-list-item'>About</li></a>
            <a className='burger-list-item-link' href='./coffee-shop-react/#download' onClick={onClickBurger}><li className='burger-list-item'>Mobile app</li></a>
            <a className='burger-list-item-link' href='./coffee-shop-react/#footer' onClick={onClickBurger}><li className='burger-list-item'>Contact us</li></a>
          </ul>
          <Link className='nav-menu-inner' to="/menu" onClick={onClickBurger}>
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
          </Link>
        </div>
      </div>
    )
}

export default Burger