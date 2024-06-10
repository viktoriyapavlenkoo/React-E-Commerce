import "./AddCategory.css";

function AddCategory(props) {
  console.log(props.display)
  if (props.display === "false") {
    return null;
  }

  return (
    <div className="add-category">
      <div className="overlay"></div>
      <form className="add-category__form form add__form">
        <input
          type="text"
          placeholder="Category name"
          className="form__input add-category-form__input add-form__input"
        />
        <div className="add-category-form__btns-block add-form__btns-block">
          <button
            type="submit"
            className="btn btn--dark add-category-form__btn add-form__btn"
          >
            Save
          </button>
          <button
            type="reset"
            className="btn btn--dark add-category-form__btn add-form__btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
