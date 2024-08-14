import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainSec from './Components/MainSection/MainSec';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import DisplayMovie from './Components/Display/DisplayMovie';
// import DisplaySeries from './Components/Display/DisplaySeries';
import AddPage from './Pages/AddPage/AddPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {


  return (
    <>
      <Router>
        <Navbar />
       
        
        <Routes>
          <Route path="/" element={<MainSec />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/movie/:id" element={<DisplayMovie />} />
          <Route path="/serie/:id" element={<DisplayMovie />} />
          <Route path='/AddPage' element={<AddPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
