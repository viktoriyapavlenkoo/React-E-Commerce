import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import Menu from '../Menu/Menu';
import ButtonsList from '../ButtonsList/ButtonsList';
import { useState } from 'react';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
   <div className={`burger-menu ${isOpen ? 'open' : ''}`}> 
    <div className="burger-menu__icon" onClick={toggleMenu}>
      <span></span>
    </div>
    <nav className="burger-menu__nav">
      <Menu props={'burger-menu__menu'}/>
      <ButtonsList props={'burger-menu__btns-list'}/>
    </nav>
   </div>
  );
}

export default BurgerMenu;
