import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import Menu from '../Menu/Menu';
import ButtonsList from '../ButtonsList/ButtonsList';

function BurgerMenu() {
  return (
   <div className='burger-menu'> 
    <div className="burger-menu__icon">
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
