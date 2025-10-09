import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;