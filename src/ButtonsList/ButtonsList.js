import { Link } from 'react-router-dom';
import './ButtonsList.css';

function ButtonsList(className) {
  return (
    <ul className={`btns-list ${className.props}`}>
      <li className="btns-list__item">
        <Link to="#"  className="btns-list__btn">
          <img
            src="../images/header/user-account-icon.svg"
            alt="User account icon"
          />
        </Link>
      </li>

      <li className="btns-list__item">
        <Link to="#" className="btns-list__btn">
          <img src="../images/header/favorites-icon.svg" alt="Favorites icon" />
        </Link>
      </li>
      <li className="btns-list__item">
        <Link to="/cart" className="btns-list__btn">
          <img src="../images/header/cart-icon.svg" alt="Cart icon" />
        </Link>
      </li>
    </ul>
  );
}

export default ButtonsList;
