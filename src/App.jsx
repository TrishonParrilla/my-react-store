import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
      <div>

        <Navbar />
          <Catalog />

      </div>
    </>
  )
}

export default App
