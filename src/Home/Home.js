import './Home.css';
import Hero from '../Hero/Hero';
import Offer from '../Offer/Offer';
import Category from '../Category/Category';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

function Home() {
  return (
   <div className='home page-content'> 
    <Hero/>
    <Offer/>
    <Category/>
    <ProductsCategories/>
   </div>
  );
}

export default Home;
