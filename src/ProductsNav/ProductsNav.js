import './ProductsNav.css';

function ProductsNav() {
  return (
    <section className="section products-nav">
      <div className="container products-nav__container">
        <ul className="products-nav__filter-show-list">
          <li className="filter-show-list__item filter-item">
            <button className="filter-item__btn">
              <img
                src="../images/filter-icon.svg"
                alt="Filter icon"
                className="filter-item__img"
              />
              Filter
            </button>
            
          </li>
          <li className="filter-show-list__item show-item">
            <p className="show-item__text filter-show-list__text">
              Showing 1–16 of 32 results
            </p>
          </li>
        </ul>
        <form action="" method="get" className="products-nav__form form">
          <label htmlFor="search" className="products-nav__label">
            Search
          </label>
          <input
            type="text"
            placeholder="By name"
            id="search"
            className="products-nav__input"
          />
        </form>
      </div>
    </section>
  );
}

export default ProductsNav;