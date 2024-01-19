import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Galeria from './pages/galeria/Galeria';
import Error from './pages/error/Error';

function App() {
  return (
    <>    
    <Header/>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/galeria' element={<Galeria/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>    
    <Footer/>
      
    </>
  );
}

export default App;
