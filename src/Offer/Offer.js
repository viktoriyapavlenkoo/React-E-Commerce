import { useEffect } from 'react';
import React from 'react';
import './Offer.css';
import json from '../json/offerData.json'

function Offer() {
  const offerData = json.data;
  const offer = React.createRef();
  useEffect(() => {
    if (offerData.length == 0) {
      offer.current.style.display = 'none'
    }
  }, [])
  // console.log(offerData)
  // useEffect(()=> {
  //   fetch('./json/offerData.json',  {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }})
  //   .then(response => console.log(response))
  //   .then(response => console.log(response))
  //   // console.log('Hello')
  // }, [])
  return (
   <section className='section offer' ref={offer}> 
    <div className="container offer__container">
      <ul className="offer__list">
        {offerData.map((item) => 
        <li key={item.id} className='offer__item'>
          <div className="offer-item__text-block">
            <h3 className='section-title offer-item__title'>{item.name}</h3>
            <p className="text offer-item__text">{item.discription}</p>
          </div>
          <div className="offer-item__img-block">
            <img src={item.image} alt="" width={372} height={486}/>
          </div>
        </li>
        )}
      </ul>
    </div>
   </section>
  );
}

export default Offer;