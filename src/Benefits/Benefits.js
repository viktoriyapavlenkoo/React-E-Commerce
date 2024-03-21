import './Benefits.css';

function Benefits() {
  return (
    <section className='section benefits'> 
      <div className="container benefits__container">
        <ul className="benefits__list">
          <li className="benefits__item">
            <div className="benefits__img-block">
              <img src="../images/benefits/benefits-img-1.svg" alt="" className="benefits__img" />
            </div>
            <div className="benefits__text-block">
              <h3 className="benefits__title item-title">High Quality</h3>
              <p className="benefits__text text">crafted from top materials</p>
            </div>
          </li>
          <li className="benefits__item">
            <div className="benefits__img-block">
              <img src="../images/benefits/benefits-img-2.svg" alt="" className="benefits__img" />
            </div>
            <div className="benefits__text-block">
              <h3 className="benefits__title item-title">Warranty Protection</h3>
              <p className="benefits__text text">Over 2 years</p>
            </div>
          </li> 
          <li className="benefits__item">
            <div className="benefits__img-block">
              <img src="../images/benefits/benefits-img-3.svg" alt="" className="benefits__img" />
            </div>
            <div className="benefits__text-block">
              <h3 className="benefits__title item-title">Free Shipping</h3>
              <p className="benefits__text text">Order over 150 $</p>
            </div>
          </li>
          <li className="benefits__item">
            <div className="benefits__img-block">
              <img src="../images/benefits/benefits-img-4.svg" alt="" className="benefits__img" />
            </div>
            <div className="benefits__text-block">
              <h3 className="benefits__title item-title">24 / 7 Support</h3>
              <p className="benefits__text text">Dedicated support</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
