import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = () => {

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
    <div>
        <nav className={`w-full flex justify-between items-center px-10 py-5 fixed top-0 z-50 transition-colors duration-300 ${scrolling ? 'bg-black opacity-85 text-white' : 'bg-transparent text-white'}`}>
          <div className="text-2xl">
            <Link to="/">Enter-Stream</Link>
          </div>
          <div className={`hidden md:flex space-x-10 text-lg ${menuOpen ? 'flex' : 'hidden'}`}>
            <Link to="/Movies">Movies</Link>
            <Link to="/Series">Series</Link>
          </div>
          <button className="w-32 h-10 bg-transparent text-white border border-white hover:bg-black hover:text-white">
            Subscribe
          </button>
          <div className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer" onClick={toggleMenu}>
            <span className={`block h-1 bg-white rounded transform transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-1 bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 bg-white rounded transform transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
          <div className={`absolute top-16 right-5 w-40 bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
            <Link to="/Movies" className="text-black">Movies</Link>
            <Link to="/Series" className="text-black">Series</Link>
          </div>
        </nav>

      
    </div>
  )
}

export default Navbar
