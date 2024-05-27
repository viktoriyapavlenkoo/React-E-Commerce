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
import Login from "./Login/Login";

// import AdminHeader from "./AdminHeader/AdminHeader";
import AdminCategory from "./AdminCategory/AdminCategory";
import AdminProduct from "./AdminProduct/AdminProduct";
import AdminUpload from "./AdminUpload/AdminUpload";
import AdminSettings from "./AdminSettings/AdminSettings";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header pathname={window.location.pathname} />
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
          {/*cart*/}
          <Route path="/cart" element={<Cart />} />
          {/*login*/}
          <Route path="/login" element={<Login />} />

          {/*admin panel*/}

         

          <Route path="/admin-category" element={<AdminCategory />} />
          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
          <Route path="/admin-settings" element={<AdminSettings />} />
        </Routes>
      </div>
      <Footer pathname={window.location.pathname} />
    </div>
  );
}

export default App;
