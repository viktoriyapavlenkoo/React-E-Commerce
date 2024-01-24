import './Header.css';
import Menu from '../Menu/Menu';
import ButtonsList from '../ButtonsList/ButtonsList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import React from 'react';


function Header() {
  return (
  <header className='header'> 
    <div className="container header__container">
     <nav className='nav'>
      <a href="/" className='logo'><img src="../images/header/logo.svg" alt="" />Furniro</a>
      <Menu props={'header__menu'}/>
     </nav>
     <ButtonsList props={'header__btns-list'}/>
     <BurgerMenu/>
    </div>
  </header>
  );
}

export default Header;
