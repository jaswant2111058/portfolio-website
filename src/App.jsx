import React, { useState } from 'react';


import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;