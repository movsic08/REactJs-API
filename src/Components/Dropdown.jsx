import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Dropdown
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
