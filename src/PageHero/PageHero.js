import './PageHero.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PageHero(props) {
  const page = props.page;
  return (
    <section className='section page-hero'> 
    <div className="container page-hero__container">
      <h2 className="page-hero__title">{page}</h2>
      <div className="page-hero__pages">
        <Link to="/" className='page-hero__link page'>Home</Link>
        <p className='page-hero__page page'>{page}</p>

      </div>
    </div>
   </section>
  );
}

export default PageHero;
