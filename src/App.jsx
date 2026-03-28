import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';  
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>

          
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
