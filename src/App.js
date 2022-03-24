import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home' 
import Destino from './pages/destino';
import Promo from './pages/promo';
import Contato from './pages/contato';
import Footer from './pages/components/footer';

function App() {
  return (
    <BrowserRouter> 
    
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/destino" element={<Destino/>}></Route>
      <Route path="/promo" element={<Promo/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
