import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scroll/ScrollToTop';
import Home from './pages/home/Home';
import About from './pages/about/About';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Book from './pages/book/Book';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
             <Route path="/news" element={<News />} />
          </Routes>
        </main>
           <Footer />
           <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
