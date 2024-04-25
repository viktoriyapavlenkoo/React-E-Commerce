import { useState } from 'react';
import './InfoProduct.css';

function InfoProduct(props) {
  const product = props.product;

  // State
  const [mainImg, setMainImg] = useState(product.images[0]);
  const [count, setCount] = useState(1);

  return (
    <section className="section info-product">
      <div className="container info-product__container">
        <div className="info-product__img-block">
          <ul className="info-product__images-list">
            {product.images.map((image, index) => {
              return (
                <li
                  className="info-product__images-item"
                  key={index}
                  onClick={() => {
                    setMainImg(image);
                  }}
                >
                  <img src={image} alt="Product image" />
                </li>
              );
            })}
          </ul>
          <div className="info-product__main-img">
            <img src={mainImg} alt="Main product image" />
          </div>
        </div>
        <div className="info-product__text-block">
          <h2 className="info-product__title title">{product.name}</h2>
          <p className="info-product__price">
            {product.price} {product.currency}
          </p>
          <p className="text info-product__category">{product.category}</p>
          <p className="text info-product__text">{product.description}</p>
          <div className="info-product__size-block">
            <p className="size-block__title text">Size</p>
            <ul className="info-product__size-list">
              {product.sizes.map((size, index) => {
                return (
                  <li className="size-block__item" key={index}>
                    <button type="button" className="size-block__btn">
                      {size.size}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="info-product__color-block">
            <p className="color-block__title text">Color</p>
            <ul className="info-product__color-list">
              {product.colors.map((color, index) => {
                const hex = color.hex;
                return (
                  <li className="color-block__item" key={index}>
                    <button
                      type="button"
                      className="color-block__btn"
                      style={{
                        backgroundColor: hex,
                      }}
                    ></button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="info-product__btns-block">
            <div className="info-product__count-block">
              <button
                type="button"
                className="count-btn decrease-btn"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p className="count-text">{count}</p>
              <button
                type="button"
                className="count-btn decrease-btn"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button type="button" className="add-cart-btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoProduct;
