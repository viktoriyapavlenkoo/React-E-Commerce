import './ShopProducts.css';
import ProductsNav from '../ProductsNav/ProductsNav';
import ProductsBtnsList from '../ProductsBtnsList/ProductsBtnsList';
import ProductsCart from '../ProductsCategories/ProductsCart/ProductsCart';
import productsJson from '../json/productsData.json';

function ShopProducts() {
  const productsData = productsJson.data;
  return (
    <div className='shop-products'> 
      <ProductsNav/>
      <ProductsCart products={productsData}/>
      <ProductsBtnsList/>
   </div>
  );
}

export default ShopProducts;
