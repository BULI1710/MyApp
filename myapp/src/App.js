import './App.css';
import './index.css';
import Home from './Component/Home';
import NavScrollExample from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InternshipListing from './Component/InternshipListings';
import About from './Component/About';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Signup from './Component/Signup';
import PasswordReset from './Component/PasswordReset';

function App() {
  return (
    <div className="App-container">
      <Router>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<InternshipListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
