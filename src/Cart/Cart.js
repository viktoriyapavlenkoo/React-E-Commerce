import './Cart.css';

import PageHero from '../PageHero/PageHero';
import CartMain from '../CartMain/CartMain';
import Benefits from '../Benefits/Benefits';

function Cart() {
  return (
    <div className="cart page-content">
      <PageHero page="cart" />
      <CartMain />
      <Benefits />
    </div>
  );
}

export default Cart;
