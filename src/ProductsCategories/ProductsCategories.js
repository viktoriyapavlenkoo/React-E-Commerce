import './ProductsCategories.css';
import categoryJson from '../json/categoryData.json';
import productsJson from '../json/productsData.json';
import ProductCategory from './ProductCategory/ProductCategory';
import { Link } from 'react-router-dom';

function ProductsCategories() {
  const categoryData = categoryJson.data;
  const productsData = productsJson.data;
  if(productsData.length === 0) {
    return null;
  }
  return (
   <section className='section products-categories'> 
    <div className="container products-categories__container">
      <ul className="products-categories__list">
        {categoryData.map((item) => 
          <li key={item.id} className='products-categories__item'>
            <h2 className="section-title products-categories__title">{item.name} Products</h2>


            <ProductCategory category={item.name} data={productsData}/>
            <div className="container-btn">
              <Link to='/shop'  className='products-categories__btn btn'>Show More</Link>
            </div>
          </li>    
        )}
      </ul>
    </div>
   </section>
  );
}

export default ProductsCategories;
