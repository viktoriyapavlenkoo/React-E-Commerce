import { useState } from "react";
import "./CartProduct.css";

function CartProduct(props) {
  const product = props.product;

  // State
  const [count, setCount] = useState(1);
  return (
    <>
      <td className="cart-table__row-item item-product">
        <div className="item-product__img-block">
          <img src={product.images[0]} alt="" />
        </div>
        <p className="item-product__name">{product.name}</p>
      </td>
      <td className="cart-table__row-item item-price">
        {product.price} {product.currency}
      </td>
      <td className="cart-table__row-item item-quantity">
        <div className="item-quantity__block">
          <button
            type="button"
            className="item-quantity__btn decrease-btn"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <p className="count-text">{count}</p>
          <button
            type="button"
            className="item-quantity__btn increase-btn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="cart-table__row-item item-subtotal">
        {product.price * count} {product.currency}
      </td>
      <td className="cart-table__row-item item-delete">
        <button type="button" className="item-delete__btn">
          <img src="../images/delete-icon.svg" alt="Delete icon" />
        </button>
      </td>
    </>
  );
}

export default CartProduct;
