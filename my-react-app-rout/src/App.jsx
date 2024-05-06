import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Overview from './pages/overview/overview';
import Other from './pages/other/other';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overviwew" element={<Overview />} />
        <Route path="*" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;