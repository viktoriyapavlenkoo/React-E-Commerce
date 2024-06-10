import "./AdminPageHero.css";


function AdminPageHero(props) {
  const pageName = props.pageName;
  const btnText = props.btnText;
  const getDisplay = props.getDisplay;
  
  
  return (
    <section className="section admin-page-hero">
      <div className="container admin-page-hero__container">
        <h2 className="item-title admin-page-hero__title">{pageName}</h2>
        <button
          type="button"
          className="btn btn--dark admin-page-hero__btn"
          onClick={getDisplay}
        >
          {btnText}
        </button>
      </div>
     
    </section>
  );
}

export default AdminPageHero;
