import React, { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ResQ</div>

        {/* Botão hamburguer */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`md:flex md:items-center md:static absolute bg-blue-700 w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ease-in ${
            open ? 'top-full opacity-100' : 'top-[-490px] opacity-0'
          }`}
        >
          <li className="md:ml-6 p-3 border-b border-blue-600 md:border-none">
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li className="md:ml-6 p-3 border-b border-blue-600 md:border-none">
            <a href="/solucao" className="hover:text-gray-300">Solução</a>
          </li>
          <li className="md:ml-6 p-3 border-b border-blue-600 md:border-none">
            <a href="/sobre" className="hover:text-gray-300">Sobre</a>
          </li>
          <li className="md:ml-6 p-3 border-b border-blue-600 md:border-none">
            <a href="/login" className="hover:text-gray-300">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
