import './CartProduct.css';

function CartProduct(props) {
  const product = props.product;
  
  return (
    <>
      <th className="cart-table__row-item item-product"></th>
      <th className="cart-table__row-item item-price">
        {product.price} {product.currency}
      </th>
      <th className="cart-table__row-item item-quantity"></th>
      <th className="cart-table__row-item item-subtotal"></th>
      <th className="cart-table__row-item item-delete"></th>
    </>
  );
}

export default CartProduct;
