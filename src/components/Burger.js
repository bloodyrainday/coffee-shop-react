import React from 'react';
import Image from './Image';
import menu from '../icons/coffee-cup.svg';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


function Burger({onClickBurger}) {
  
    return (
      <div className='burger-wrapper'>
        <div className='burger'>
          <ul className='burger-list'>
            
              <LinkScroll className='burger-list-item-link' to='favorite' smooth={true} duration={500} onClick={onClickBurger}><li className='burger-list-item'>Favorite coffee</li></LinkScroll>
              <LinkScroll className='burger-list-item-link' to='cozy' smooth={true} duration={500} onClick={onClickBurger}><li className='burger-list-item'>About</li></LinkScroll>
              <LinkScroll className='burger-list-item-link' to='download' smooth={true} duration={500} onClick={onClickBurger}><li className='burger-list-item'>Mobile app</li></LinkScroll>
              <LinkScroll className='burger-list-item-link' to='footer' smooth={true} duration={500} onClick={onClickBurger}><li className='burger-list-item'>Contact us</li></LinkScroll>
            
            
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