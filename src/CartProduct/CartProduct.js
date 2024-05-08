import { useState } from "react";
import "./CartProduct.css";

function CartProduct(props) {
  const product = props.product;

  // State
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="item-product__product-block item-product__item">
        <div className="item-product__img-block">
          <img src={product.images[0]} alt="" />
        </div>
        <p className="item-product__name">{product.name}</p>
      </div>
      <p className="item-product__price item-product__item">
        {product.price} {product.currency}
      </p>
      <div className="item-product__quantity item-product__item">
        <button
          type="button"
          className="quantity__btn decrease-btn"
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <p className="quantity__text">{count}</p>
        <button
          type="button"
          className="quantity__btn increase-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <p className="item-product__subtotal item-product__item">
        {product.price * count} {product.currency}
      </p>
      <button
        type="button"
        className="item-product__delete-btn item-product__item"
      >
        <img src="../images/delete-icon.svg" alt="Delete icon" />
      </button>
    </>
  );
}

export default CartProduct;
