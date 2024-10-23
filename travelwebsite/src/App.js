import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<><Showcase /><Destinations /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
