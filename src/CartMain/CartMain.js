import "./CartMain.css";
import CartProduct from "../CartProduct/CartProduct";

import productsJson from "../json/productsData.json";

function CartMain() {
  const productsData = productsJson.data;
  let cart = [];
  cart.push(productsData[0]);
  cart.push(productsData[1]);
  console.log(cart)
  return (
    <section className="section cart-main">
      <div className="container cart-main__container">
        <table className="cart__table cart-table table">
          <thead className="cart-table__thead">
            <tr className="cart-table__header">
              <th className="cart-table__column-title column-title__item-product">Product</th>
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
          <tfoot>
            <tr className="cart-table__tfoot">
              <th colSpan="2" className="cart-table__tfoot-item item-total">
                Total
              </th>
              <td className="cart-table__tfoot-item item-total-quantity">10</td>
              <td className="cart-table__tfoot-item item-total-subtotal">
                20000 {cart[0].currency}
              </td>
              <td className="cart-table__tfoot-item item-checkout">
                <button type="button" className="item-checkout__btn ">
                  Check out
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default CartMain;
