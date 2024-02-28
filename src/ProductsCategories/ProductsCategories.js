import { useEffect } from 'react';
import React from 'react';
import './ProductsCategories.css';
import categoryJson from '../json/categoryData.json';
import productsJson from '../json/productsData.json';
import ProductCategory from './ProductCategory/ProductCategory';

function ProductsCategories() {
  const categoryData = categoryJson.data;
  const productsData = productsJson.data;
  const products = React.createRef();
  useEffect(() => {
    if (categoryData.length === 0 || productsData.length === 0) {
      products.current.style.display = 'none'
    }
  }, [])
  return (
   <section className='section products-categories' ref={products}> 
    <div className="container products-categories__container">
      <ul className="products-categories__list">
        {categoryData.map((item) => 
          <li key={item.id} className='products-categories__item'>
            <h2 className="section-title products-categories__title">{item.name} Products</h2>
            <ProductCategory category={item.name} data={productsData}/>
            <div className="container-btn">
              <a href='#' className='products-categories__btn btn'>Show More</a>
            </div>
          </li>    
        )}
      </ul>
    </div>
   </section>
  );
}

export default ProductsCategories;
