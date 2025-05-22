import React from 'react';

function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-8 py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-500">
            Todo App - Created by leokungYT
          </p>
          <p className="text-xs text-gray-400">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;