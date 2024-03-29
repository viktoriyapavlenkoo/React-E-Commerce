import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Error from './Error/Error';
import Footer from './Footer/Footer';
import PaymentOptions from './PaymentOptions/PaymentOptions';
import Returns from './Returns/Returns';
import PrivacyPolicies from './PrivacyPolicies/PrivacyPolicies';

function App() {
  return (
   <div className='App'>
    <div className="main">
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/payment-options' element={<PaymentOptions/>}/>
            <Route path='/returns' element={<Returns/>}/>
            <Route path='/privacy-policies' element={<PrivacyPolicies/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
    </div>
    <Footer/>
   </div>
  );
}

export default App;
