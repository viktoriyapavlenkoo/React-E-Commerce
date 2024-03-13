import './Shop.css';
import PageHero from '../PageHero/PageHero';
import ShopProducts from '../ShopProducts/ShopProducts'

function Shop() {
  return (
   <div className='shop page-content'> 
    <PageHero/>
    <ShopProducts/>
   </div>
  );
}

export default Shop;
