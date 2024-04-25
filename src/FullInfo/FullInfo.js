import './FullInfo.css';

function FullInfo(props) {
  const description = props.description;
  return (
    <section className="section full-info">
      <div className="container full-info__container">
        <h3 className="full-info__title item-title">Description</h3>
        {description.map((text, index) => {
          return (
            <p className='text full-info__text' key={index}>{text}</p>
          )
        })}
      </div>
    </section>
  );
}

export default FullInfo;