import React from 'react';
import Image from './Image';
import menu from '../icons/coffee-cup.svg';

function Burger({onClickBurger}) {
  
    return (
      <div className='burger-wrapper'>
        <div className='burger'>
          <ul className='burger-list'>
            <a className='burger-list-item-link' href='./#favorite' onClick={onClickBurger}><li className='burger-list-item'>Favorite coffee</li></a>
            <a className='burger-list-item-link' href='./#cozy' onClick={onClickBurger}><li className='burger-list-item'>About</li></a>
            <a className='burger-list-item-link' href='./#download' onClick={onClickBurger}><li className='burger-list-item'>Mobile app</li></a>
            <a className='burger-list-item-link' href='./#footer' onClick={onClickBurger}><li className='burger-list-item'>Contact us</li></a>
          </ul>
          <a className='nav-menu-inner' href="/coffee-shop-react/menu" onClick={onClickBurger}>
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
          </a>
        </div>
      </div>
    )
}

export default Burger