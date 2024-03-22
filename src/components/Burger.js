import React from 'react';
import Image from './Image';
import menu from '../icons/coffee-cup.svg';
import { Link } from 'react-router-dom';

function Burger({onClickBurger}) {
  
    return (
      <div className='burger-wrapper'>
        <div className='burger'>
          <ul className='burger-list'>
            <Link className='burger-list-item-link' to='./#favorite' onClick={onClickBurger}><li className='burger-list-item'>Favorite coffee</li></Link>
            <Link className='burger-list-item-link' to='./#cozy' onClick={onClickBurger}><li className='burger-list-item'>About</li></Link>
            <Link className='burger-list-item-link' to='./#download' onClick={onClickBurger}><li className='burger-list-item'>Mobile app</li></Link>
            <Link className='burger-list-item-link' to='./#footer' onClick={onClickBurger}><li className='burger-list-item'>Contact us</li></Link>
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