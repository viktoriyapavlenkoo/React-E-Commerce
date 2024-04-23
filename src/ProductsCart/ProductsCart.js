import './ProductsCart.css';
import { Link } from 'react-router-dom';

function ProductsCart(props) {
  const products = props.products;
  return (
    <div className="container products-cart__container">
      <ul className="product__list">
        {products.map((item) => {
          return (
            <li key={item.id} className="product__item">
              <div className="product__img-block">
                <img src={item.images[0]} alt={item.name} />
              </div>
              <div className="product__text-block">
                {/* product link */}
                <Link to="/product" className="item-title product__title">
                  {item.name}
                </Link>
                {/* <h3 className="item-title product__title">{item.name}</h3> */}
                <p className="product__text">{item.shortDiscription}</p>
                <p className="product__price">
                  {item.price} {item.currency}
                </p>

                <ul className="product__btns-list">
                  <li className="btns-list__item">
                    <button className="btns-list__btn">
                      <img
                        src="../images/header/favorites-icon.svg"
                        alt="Favorites icon"
                      />
                    </button>
                  </li>
                  <li className="btns-list__item">
                    <button className="btns-list__btn">
                      <img
                        src="../images/header/cart-icon.svg"
                        alt="Cart icon"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsCart;
