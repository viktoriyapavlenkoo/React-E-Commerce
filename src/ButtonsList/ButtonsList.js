import './ButtonsList.css';

function ButtonsList(className) {
  return (
    <ul className={`btns-list ${className.props}`}>
      <li className='btns-list__item'>
        <button className='btns-list__btn'>
          <img src="../images/header/user-account-icon.svg" alt="User account icon" />
        </button>
      </li>
  
      <li className='btns-list__item'>
        <button className='btns-list__btn'>
          <img src="../images/header/favorites-icon.svg" alt="Favorites icon" />
        </button>
      </li>
      <li className='btns-list__item'>
        <button className='btns-list__btn'>
          <img src="../images/header/cart-icon.svg" alt="Cart icon" />
        </button>
      </li>
    </ul>
  );
}

export default ButtonsList;
