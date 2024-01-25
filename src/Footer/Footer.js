import './Footer.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Footer() {
  const [isOpenLinks, setIsOpenLinks] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  function toggleMenuLinks() {
    setIsOpenLinks(!isOpenLinks);
  }
  function toggleMenuHelp() {
    setIsOpenHelp(!isOpenHelp);
  }
  return (
   <footer className='footer page-content'>
    <div className="container footer__container">
      <div className="footer__blocks">
        <div className="footer__first-block footer__block">
            <a href="" className="logo footer__logo">Funiro.</a>
            <address className='address footer__address'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</address>
        </div>   
        <div className="footer__second-block footer__block">
          <h4 className={`footer__title second-block__title ${isOpenLinks ? 'open' : ''}`} onClick={toggleMenuLinks}>Links
            <button type='button' className='dropdown-btn'>
              <img src="./images/dropdown-icon.svg" alt="" />  
            </button>
          </h4> 
          <Menu props={`footer__menu ${isOpenLinks ? 'open' : ''}`}/>
        </div>   
        <div className="footer__third-block footer__block">
          <h4 className={`footer__title third-block__title ${isOpenHelp ? 'open' : ''}`} onClick={toggleMenuHelp}>Help
            <button type='button' className='dropdown-btn'>
              <img src="./images/dropdown-icon.svg" alt="" />  
            </button>
          </h4> 
          <ul className={`menu help__menu ${isOpenHelp ? 'open' : ''}`}>
            <li className='menu__item'>
              <Link to="/payment-options" className='menu__link'>Payment Options</Link>
            </li>
            <li className='menu__item'>
              <Link to="/returns" className='menu__link'>Returns</Link>
            </li>
            <li className='menu__item'>
              <Link to="/privacy-policies" className='menu__link'>Privacy Policies</Link>
            </li>
          </ul>   
        </div>   
        <div className="footer__fourth-block footer__block">
          <h4 className="footer__title fourth-block__title">Newsletter</h4>    
          <form action="#" method="post" className='form subscribe-form footer__form'>
            <input type="email" name="email" id="subscribe-email" placeholder='Enter Your Email Address'/>
            <button type="submit" className='form__btn subscribe-form__btn'>Subscribe</button>    
          </form>        
        </div>  
      </div>
      <div className="footer__copyright">
        <p className='text copyright__text'>2023 furino. All rights reverved</p>
      </div>          
    </div>
   </footer>
  );
}

export default Footer;
