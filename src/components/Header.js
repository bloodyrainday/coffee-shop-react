import React from 'react';
import Image from './Image';
import logo from '../icons/logo.svg';
import menu from '../icons/coffee-cup.svg';
import Burger from './Burger';
import { Link } from 'react-router-dom';

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
              <Link className='nav-logo-link' to="/coffee-shop-react">
                <Image image={logo}/>
              </Link>
            </div>

            <div className='nav-links'>
              <ul className='nav-links-list'>
                <a className='nav-links-list-link' href='./#favorite'><li className='nav-links-list-link-item'>Favorite coffee</li></a>
                <a className='nav-links-list-link' href='./#cozy'><li className='nav-links-list-link-item'>About</li></a>
                <a className='nav-links-list-link' href='./#download'><li className='nav-links-list-link-item'>Mobile app</li></a>
                <a className='nav-links-list-link' href='./#footer'><li className='nav-links-list-link-item'>Contact us</li></a>
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