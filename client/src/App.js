import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Paintings from "./pages/Paintings";
import Antiques from "./pages/Antiques";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ControlPanel from "./pages/admin-pages/ControlPanel";
import Inventory from "./pages/admin-pages/Inventory";
import Purchase from "./pages/Purchase";
import CartContextProvider, { CartContext } from "./context/cartContext";
function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/antiques" element={<Antiques />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/purchase" element={<Purchase />} />
            <Route path="/account" element={<Account />} />
            <Route path="/control-panel" element={<ControlPanel />} />
            <Route path="/control-panel/inventory" element={<Inventory />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
