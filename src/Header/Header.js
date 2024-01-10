import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
   <> 
    <h1>Header</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
   </>
  );
}

export default Header;
