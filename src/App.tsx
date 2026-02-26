import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/common/ScrollToTop';
import { CartProvider } from './context/CartContext';
import Onboarding from './pages/Onboarding/Onboarding';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Placeholder from './pages/Placeholder';
import DishDetails from './pages/DishDetails/DishDetails';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <Toaster position="bottom-center" />
      <Router>
        <ScrollToTop />
        <div className="app">
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/dish/:id" element={<DishDetails />} />
            <Route path="/orders" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<Placeholder title="Forgot Password" />} />
            <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
            <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
