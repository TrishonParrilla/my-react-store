import './App.css';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
        <Navbar />
          <Catalog />
        <Footer />
      
    </>
  )
}

export default App
