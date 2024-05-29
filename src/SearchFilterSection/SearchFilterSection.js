import "./SearchFilterSection.css";

function SearchFilterSection() {
  return (
    <section className="section search-filter-section">
      <div className="container search-filter-section__container">
        <input
          type="text"
          placeholder="Search"
          className="form__input search-filter-section__input"
        />
        <button className="filter-item__btn search-filter-section__btn">
          <img
            src="../images/filter-icon.svg"
            alt="Filter icon"
            className="filter-item__img"
          />
          Filter
        </button>
      </div>
    </section>
  );
}

export default SearchFilterSection;
