import './Hero.css';

function Hero() {
  return (
   <section className='hero'> 
    <div className="container hero__container">
      <div className="hero__content">
        <h3 className="hero__subtitle">New Arrival</h3>
        <h1 className="title hero__title">Discover Our New Collection</h1>
        <p className="text hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button type='button' className='btn hero__btn'>Buy now</button>
      </div>
    </div>
   </section>
  );
}

export default Hero;