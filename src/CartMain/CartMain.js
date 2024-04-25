import './CartMain.css';
import CartProduct from '../CartProduct/CartProduct';

import productsJson from '../json/productsData.json';

function CartMain() {
  const productsData = productsJson.data;
  let cart = [];
  cart.push(productsData[0]);
  cart.push(productsData[1]);
  return (
    <section className="section cart-main">
      <div className="container cart-main__container">
        <table className="cart__table cart-table table">
          <thead className="cart-table__thead">
            <tr className="cart-table__header">
              <th className="cart-table__column-title">Product</th>
              <th className="cart-table__column-title">Price</th>
              <th className="cart-table__column-title">Quantity</th>
              <th className="cart-table__column-title">Subtotal</th>
              <th className="cart-table__column-title">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              console.log(product);
              return (
                <tr key={product.id} className="cart-table__row">
                  <CartProduct product={product} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CartMain;
