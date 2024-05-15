import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Error from "./Error/Error";
import Footer from "./Footer/Footer";
import PaymentOptions from "./PaymentOptions/PaymentOptions";
import Returns from "./Returns/Returns";
import PrivacyPolicies from "./PrivacyPolicies/PrivacyPolicies";

import Product from "./Product/Product";
import Cart from "./Cart/Cart";
//import categoryJson from './json/categoryData.json';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route exact path='/shop/:category' element={<Shop category={category}/>}/> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/privacy-policies" element={<PrivacyPolicies />} />
          <Route path="/*" element={<Error />} />

          {/*product*/}

          <Route path="/product" element={<Product />} />

          {/*product*/}

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
