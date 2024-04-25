import './Product.css';

import HeaderProduct from '../HeaderProduct/HeaderProduct';
import InfoProduct from '../InfoProduct/InfoProduct';
import FullInfo from '../FullInfo/FullInfo';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

import productsJson from '../json/productsData.json';

function Product() {
  const productsData = productsJson.data;
  const product = productsData[0];
  return (
    <div className="product page-content">
      <HeaderProduct name={product.name} />
      <InfoProduct product={product} />
      <FullInfo description={product.fullDescription} />
      <RelatedProducts product={product} data={productsData} />
    </div>
  );
}

export default Product;
