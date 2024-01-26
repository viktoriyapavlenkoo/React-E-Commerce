import { useEffect } from 'react';
import './Offer.css';
import json from '../json/offerData.json'

function Offer() {
  const offerData = json.data;
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
   <section className='offer'> 
    <div className="container offer__container">
      <ul className="offer__list">
        {offerData.map((item) => 
        <li key={item.id} className='offer__item'>
          <div className="item__text-block">
            <h3 className='item__title'>{item.name}</h3>
            <p className="item__text">{item.discription}</p>
          </div>
          <div className="item__img-block">
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