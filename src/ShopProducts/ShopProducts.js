import './ShopProducts.css';
import FilterProducts from '../FilterProducts/FilterProducts';
import ProductsBtnsList from '../ProductsBtnsList/ProductsBtnsList';
import ProductsCart from '../ProductsCategories/ProductsCart/ProductsCart';
import productsJson from '../json/productsData.json';

function ShopProducts() {
  const productsData = productsJson.data;
  return (
    <div className='shop-products'> 
      <FilterProducts/>
      <ProductsCart products={productsData}/>
      <ProductsBtnsList/>
   </div>
  );
}

export default ShopProducts;
