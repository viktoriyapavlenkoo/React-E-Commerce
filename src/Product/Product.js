import './Product.css';

import HeaderProduct from '../HeaderProduct/HeaderProduct';
import InfoProduct from '../InfoProduct/InfoProduct';
import FullInfo from '../FullInfo/FullInfo';

import productsJson from '../json/productsData.json';


function Product() {
  const productsData = productsJson.data;
  return (
    <div className="product page-content">
      <HeaderProduct />
      <InfoProduct />
      <FullInfo />
    </div>
  );
}

export default Product;
