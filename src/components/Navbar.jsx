import React, { useState } from 'react';
import Icons from '../assets/Icons';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ page, label }) => (
    <button 
      onClick={() => {
        setCurrentPage(page);
        setIsOpen(false);
      }}
      className={`hover:text-blue-400 ${currentPage === page ? 'text-blue-400' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="text-xl font-bold">
              Jaswant Kushwaha
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink page="home" label="Home" />
            <NavLink page="experience" label="Experience" />
            <NavLink page="projects" label="Projects" />
            <NavLink page="skills" label="Skills" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <NavLink page="home" label="Home" />
              <NavLink page="experience" label="Experience" />
              <NavLink page="projects" label="Projects" />
              <NavLink page="skills" label="Skills" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;