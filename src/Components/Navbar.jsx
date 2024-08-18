import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// The Navbar component handles navigation and responsive menu behavior
const Navbar = () => {
    // State to track whether the user is scrolling
    const [scrolling, setScrolling] = useState(false);
    // State to control the visibility of the mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    // useEffect hook to monitor scrolling behavior
    useEffect(() => {
        const handleScroll = () => {
            // If the user scrolls down more than 20px, activate scrolling styles
            if (window.scrollY > 20) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures this runs only on mount/unmount

    // Function to toggle the mobile menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* Navbar container with dynamic styling based on scroll state */}
            <nav className={`w-full flex justify-between items-center px-10 py-5 fixed top-0 z-50 transition-colors duration-300 ${scrolling ? 'bg-black opacity-85 text-white' : 'bg-transparent text-white'}`}>
                {/* Logo with link to the home page */}
                <Link to="/">
                    <div className='flex flex-row'>
                        <h1 className='text-2xl font-medium'>ENTER-</h1>
                        <h1 className='text-2xl text-blue-400 font-medium'>STREAM</h1>
                    </div>
                </Link>
                {/* Desktop menu (hidden on small screens) */}
                <div className={`hidden md:flex space-x-10 text-lg ${menuOpen ? 'flex' : 'hidden'}`}>
                    <Link to="/Movies">MOVIES</Link>
                    <Link to="/Series">SERIES</Link>
                </div>
                {/* Subscribe button */}
                <button className="w-32 h-10 bg-blue-500 text-white hover:bg-blue-700 transition duration-300 rounded-3xl">
                    SUBSCRIBE
                </button>
                {/* Mobile menu toggle button */}
                <div className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer" onClick={toggleMenu}>
                    {/* Animated hamburger icon */}
                    <span className={`block h-1 bg-white rounded transform transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-1 bg-white rounded transform transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
                {/* Mobile dropdown menu */}
                <div className={`absolute top-16 right-5 w-40 bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <Link to="/Movies" className="text-black">MOVIES</Link>
                    <Link to="/Series" className="text-black">SERIES</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
