import { useEffect } from 'react';
import React from 'react';
import './Category.css';
import json from '../json/categoryData.json'

function Category() {
  const categoryData = json.data;
  const category = React.createRef();
  useEffect(() => {
    if (categoryData.length === 0) {
      category.current.style.display = 'none'
    }
  }, [])
  return (
   <section className='section category' ref={category}> 
    <div className="container category__container">
      <h2 className="section-title category__title">Browse The Range</h2>
      <p className="text category__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul className="category__list">
        {categoryData.map(item => 
          <li key={item.id}>
            <div className="category-item__img-block">
              <img src={item.image} alt={item.name}/>
            </div>
           <h3 className="category-item__title item-title">{item.name}</h3>
          </li>  
        )}
      </ul>
    </div>
   </section>
  );
}

export default Category;
