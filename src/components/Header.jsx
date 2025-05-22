import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <nav className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link 
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-green-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                หน้าแรก
              </Link>
              <Link 
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/about') 
                    ? 'border-green-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                เกี่ยวกับเรา
              </Link>
              <Link 
                to="/api"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/api') 
                    ? 'border-green-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                api ภายนอก
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;