import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Rules from './pages/Rules';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();


function App() {
    const [theme, setTheme] = useState("dark");
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

    // Set data-theme attribute on body for global CSS
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`app-container ${theme}-theme`}>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
