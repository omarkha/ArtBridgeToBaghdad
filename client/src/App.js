import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
import PaymentAccepted from "./pages/PaymentAccepted";
import Product from "./pages/Product";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
function App() {
  const stripePromise = loadStripe(
    "pk_test_51LpwKaItBHTQUADWH08XmDkJCem08nkWM2stMm9yG9cEjPqCU2wBnkAP6mQt9HXgdAAMYdigiaQjiq6rZziLs4DS00qfYCnAIw"
  );

  return (
    <Router>
      <div className="App">
        <CartProvider
          mode="payment"
          cartMode="checkout-session"
          stripe={stripePromise}
          currency="USD"
        >
          <CartContextProvider>
            <Toaster position="bottom-center" />
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/paintings" element={<Paintings />} />
              <Route path="/paintings/:pagenumber" element={<Paintings />} />
              <Route path="/antiques" element={<Antiques />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/purchase" element={<Purchase />} />
              <Route path="/account" element={<Account />} />
              <Route path="/control-panel" element={<ControlPanel />} />
              <Route path="/control-panel/inventory" element={<Inventory />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/paymentsuccess" element={<PaymentAccepted />} />
            </Routes>

            <Footer />
          </CartContextProvider>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
