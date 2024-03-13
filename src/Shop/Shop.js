import './Shop.css';
import PageHero from '../PageHero/PageHero';
import ShopProducts from '../ShopProducts/ShopProducts'
import Benefits from '../Benefits/Benefits';

function Shop() {
  return (
   <div className='shop page-content'> 
    <PageHero page="shop"/>
    <ShopProducts/>
    <Benefits/>
   </div>
  );
}

export default Shop;
