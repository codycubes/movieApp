import { useState, useEffect } from 'react';
import './App.css';
// import { Navbar } from './Components/Navbar/Navbar';
import MainSec from './Components/MainSection/MainSec';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import DisplayMovie from './Components/Display/DisplayMovie';
import DisplaySeries from './Components/Display/DisplaySeries';


function App() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <MainSec /> */}

      <Router>
        <nav className={`navbar ${scrolling ? 'navbar-scroll' : ''}`}>
          <div className="logoContainer">
            <div className="Logo1">
              <Link to="/">Enter-Stream</Link>
            </div>
          </div>
          <div className={`links ${menuOpen ? 'open' : ''}`}>
            <Link to="/Movies">Movies</Link>
            <Link to="/Series">Series</Link>
          </div>
          <button className="Subscribe">Subscribe</button>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MainSec />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/movie/:id" element={<DisplayMovie />} />
          <Route path="/serie/:id" element={<DisplaySeries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
