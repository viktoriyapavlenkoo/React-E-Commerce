import './Shop.css';
import PageHero from '../PageHero/PageHero';
import ShopProducts from '../ShopProducts/ShopProducts'
import Benefits from '../Benefits/Benefits';

function Shop(props) {
  const category = props.category;
  return (
   <div className='shop page-content'> 
    <PageHero page="shop"/>
    <ShopProducts/>
    <Benefits/>
   </div>
  );
}

export default Shop;
