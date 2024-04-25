import './RelatedProducts.css';

import ProductCategory from '../ProductsCategories/ProductCategory/ProductCategory';
import { Link } from 'react-router-dom';

function RelatedProducts(props) {
  const productsData = props.data;
  const product = props.product;
  return (
    <section className="section related-products">
      <div className="container related-products__container">
        <h2 className="section-title related-product__title">
          Related products
        </h2>

        <ProductCategory category={product.category} data={productsData} />
        <div className="container-btn">
          <Link to="/shop" className="products-categories__btn btn btn--light">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;