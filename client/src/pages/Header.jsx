import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg flex items-center justify-between px-8 py-4 z-50">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/home" className="hover:text-cyan-400 transition duration-200">D'Peñas</Link>
      </h1>

      <nav className="nav font-bold text-lg text-white flex-1">
        <ul className="flex items-center justify-center space-x-8">
          <li className="relative group">
            <Link to="/home" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Home</Link>
          </li>

          <li className="relative group">
            <button
              className="hover:text-cyan-400 transition duration-200 flex items-center space-x-2"
              onClick={() => toggleMenu('carta')}
              aria-haspopup="true"
              aria-expanded={activeMenu === 'carta' ? 'true' : 'false'}
            >
              <span>Carta</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMenu === 'carta' && (
              <ul className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-lg shadow-lg py-2 w-48 space-y-2 transition duration-300">
                <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                  <Link to="/home/carta/ceviches" onClick={closeMenu}>Platos Marinos</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                  <Link to="/home/carta/piqueos" onClick={closeMenu}>Piqueos Típicos</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                  <Link to="/home/carta/platosCarta" onClick={closeMenu}>Platos a la Carta</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
                  <Link to="/home/carta/bebidas" onClick={closeMenu}>Bebidas</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative group">
            <Link to="/home/reservaMesa" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Reservar Mesa</Link>
          </li>

          <li className="relative group">
            <Link to="/home/contactanos" className="hover:text-cyan-400 transition duration-200" onClick={closeMenu}>Contáctanos</Link>

          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center space-x-2">
        <Link to="/login" className="text-white hover:bg-cyan-400 bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-3 lg:px-4 py-2 lg:py-2.5 flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
