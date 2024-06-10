import "./AddProduct.css";
import json from "../json/categoryData.json";


function AddProduct(props) {
  console.log(props.display);
  if (props.display === "false") {
    return null;
  }
  const categoryData = json.data;
  console.log(categoryData)

  return (
    <div className="add-product">
      <div className="overlay"></div>
      <form className="add-product__form form add__form ">
        <input
          type="text"
          placeholder="Search category"
          className="form__input add-product-form__input add-form__input"
        />
        <ul className="add-product-form__radio-list">
          {categoryData.map((category, index) => (
            <li key={index} className="radio-list__item">
              <input
                type="radio"
                id={`category ${category.id}`}
                value={category.name}
                name="category"
                className="radio-list__input"
              />
              <label for={`category ${category.id}`} className="radio-list__label">{category.name}</label>
            </li>
          ))}
        </ul>

        <div className="add-product-form__btns-block add-form__btns-block">
          <button
            type="submit"
            className="btn btn--dark add-product-form__btn add-form__btn"
          >
            Save
          </button>
          <button
            type="reset"
            className="btn btn--dark add-product-form__btn add-form__btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
