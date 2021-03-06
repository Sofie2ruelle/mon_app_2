import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/mon_app_2/" element={<Home/>}/>
      <Route path="/mon_app_2/gallery" element={<Gallery/>}/>
      <Route path="/mon_app_2/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
