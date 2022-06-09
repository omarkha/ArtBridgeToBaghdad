import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Paintings from './pages/Paintings';
import Antiques from './pages/Antiques';
import Cart from './pages/Cart';
import Account from './pages/Account';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/paintings" element={<Paintings/>} />
      <Route path="/antiques" element={<Antiques/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
