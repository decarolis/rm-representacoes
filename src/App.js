import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

/* components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

/* pages */
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Partners from './components/pages/Partners';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/marcas" element={<Partners />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
