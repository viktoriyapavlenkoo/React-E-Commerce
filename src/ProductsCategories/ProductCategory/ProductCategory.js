import './ProductCategory.css';
import ProductsCart from '../../ProductsCart/ProductsCart';

function ProductCategory(props) {
  const category = props.category;
  const productsAll = props.data;
  const products= [];
    for(let i = 0; i < productsAll.length; i++) {
      if(products.length < 4 && productsAll[i].category === category) {
          products.push(productsAll[i])
      }
    } 
  return (
    <ProductsCart products={products}/>
  )
}



export default ProductCategory;
