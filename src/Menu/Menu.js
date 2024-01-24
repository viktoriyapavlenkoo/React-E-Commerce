import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu(className) {
  return (
  <ul className={`menu ${className.props}`}>
    <li className='menu__item'>
      <Link to="/" className='menu__link'>Home</Link>
    </li>
    <li className='menu__item'>
      <Link to="/shop" className='menu__link'>Shop</Link>
    </li>
    <li className='menu__item'>
      <Link to="/about" className='menu__link'>About</Link>
    </li>
    <li className='menu__item'>
      <Link to="/contact" className='menu__link'>Contact</Link>
    </li>
  </ul>
  );
}

export default Menu;
