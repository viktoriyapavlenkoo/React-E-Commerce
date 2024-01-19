import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
  <header className='header'> 
    <div className="container header__container">
     <nav className='nav'>
      <a href="/" className='logo'><img src="../images/header/logo.svg" alt="" />Furniro</a>
      <ul className='menu header__menu'>
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
     </nav>
     <ul className='btns-list'>
      <li className='btns-list__item'>
        <button className='btn btns-list__btn'>
          <img src="../images/header/user-account-icon.svg" alt="User account icon" />
        </button>
      </li>
      <li className='btns-list__item'>
        <button className='btn btns-list__btn'>
          <img src="../images/header/search-icon.svg" alt="Search icon" />
        </button>
      </li>
      <li className='btns-list__item'>
        <button className='btn btns-list__btn'>
          <img src="../images/header/favorites-icon.svg" alt="Favorites icon" />
        </button>
      </li>
      <li className='btns-list__item'>
        <button className='btn btns-list__btn'>
          <img src="../images/header/cart-icon.svg" alt="Cart icon" />
        </button>
      </li>
     </ul>
    </div>
  </header>
  );
}

export default Header;
