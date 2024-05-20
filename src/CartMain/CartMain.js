import "./CartMain.css";
import CartProduct from "../CartProduct/CartProduct";

import productsJson from "../json/productsData.json";

function CartMain() {
  const productsData = productsJson.data;
  let cart = [];
  cart.push(productsData[0]);
  cart.push(productsData[1]);
  cart.push(productsData[18]);
  cart.push(productsData[14]);
  return (
    <section className="section cart-main">
      <div className="container cart-main__container">
        <div className="cart-main__list-block">
          <ul className="cart-main__list">
            {cart.map((product) => {
              return (
                <li key={product.id} className="cart-main__item-product">
                  <CartProduct product={product} cart={cart} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="cart-main__total-block">
          <h3 className="total-block__title section-title">Cart Totals</h3>
          <div className="total-block__total-quantity">
            <h4 className="total-quantity__title">Quantity</h4>
            <p className="total-quantity__text">10</p>
          </div>
          <div className="total-block__total">
            <h4 className="total__title">Total</h4>
            <p className="total__text">10000 {cart[0].currency} </p>
          </div>
          <button type="button" className="item-checkout__btn">
            Check out
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartMain;
