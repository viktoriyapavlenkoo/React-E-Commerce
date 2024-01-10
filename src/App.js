import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Error from './Error/Error';
import Footer from './Footer/Footer';

function App() {
  return (
   <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
    </Router>
    <Footer/>
   </>
  );
}

export default App;
