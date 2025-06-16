import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Nomination from './pages/Registration';
import Rules from './pages/Rules';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container light-theme">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/nomination" element={<Nomination />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
