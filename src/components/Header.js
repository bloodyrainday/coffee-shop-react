import React from 'react';
import Image from './Image';
import logo from '../icons/logo.svg';
import menu from '../icons/coffee-cup.svg';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function Header() {
    const [burgerActive, setBurgerActive] = React.useState(false);
    const [menuButtonClicked, setMenuButtonClicked] = React.useState(false);
    const onClickMenuButton = () => {
      setMenuButtonClicked(true);
    }
    const onClickBurger = () => {
      setBurgerActive(!burgerActive);
      document.body.classList.toggle('lock')
    }
  
    return (
      <>
        <header className='header'>
          <div className='container'>
            <nav>

            <div className='nav-logo'>
              <Link className='nav-logo-link' to="/coffee-shop-react" onClick={() => {setBurgerActive(false); setMenuButtonClicked(false)}}>
                <Image image={logo}/>
              </Link>
            </div>

            <div className='nav-links'>
              <ul className='nav-links-list'>
                <LinkScroll className='nav-links-list-link' to='favorite' smooth={true}  duration={500}><li className='nav-links-list-link-item'>Favorite coffee</li></LinkScroll>
                <LinkScroll className='nav-links-list-link' to='cozy' smooth={true}  duration={500}><li className='nav-links-list-link-item'>About</li></LinkScroll>
                <LinkScroll className='nav-links-list-link' to='download' smooth={true}  duration={500}><li className='nav-links-list-link-item'>Mobile app</li></LinkScroll>
                <LinkScroll className='nav-links-list-link' to='footer' smooth={true}  duration={500}><li className='nav-links-list-link-item'>Contact us</li></LinkScroll>
              </ul>
            </div>

            <div className={`nav-menu ${menuButtonClicked === true ? 'click' : ""}`} onClick={() => onClickMenuButton()}>
              <Link className='nav-menu-inner' to="/menu">
                <p className='nav-menu-inner-text'>Menu</p>
                <Image image={menu}/>
              </Link>
            </div>

            <div className={`nav-menu-burger ${burgerActive === true ? "active" : ""}`} onClick={() => onClickBurger()}>
            </div>
            
          </nav>
          </div>
        </header>
        {burgerActive === true && <Burger onClickBurger={onClickBurger}/> }
      </>
  )
}

export default Header