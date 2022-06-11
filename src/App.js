import React from 'react';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Blogs />} />
        <Route path="/projects" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
