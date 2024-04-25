import './HeaderProduct.css';

import { Link } from 'react-router-dom';

function HeaderProduct(props) {
  const name = props.name;
  return (
    <section className="section header-product">
      <div className="container header-product__container">
        <ul className="prev-pages header-product__list">
          <li className="prev-page header-product__item">
            <Link to="/" className="text prev-page__link header-product__link">Home</Link>
          </li>
          <li className="prev-page header-product__item">
            <Link to="/shop" className="text prev-page__link header-product__link">Shop</Link>
          </li>
        </ul>
        <p className="text current-page header-product__text">{name}</p>
      </div>
    </section>
  );
}

export default HeaderProduct;