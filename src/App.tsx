import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Onboarding from './pages/Onboarding/Onboarding';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Placeholder from './pages/Placeholder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Placeholder title="Forgot Password" />} />
          <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
