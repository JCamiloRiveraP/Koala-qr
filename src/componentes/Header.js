import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-white/70 border-b border-gris-oscuro">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.qrcode-koala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr_koala_logo.3b47abc9.png&w=32&q=75"
            alt="QR Koala"
            className="w-8 h-8"
          />
          <a href="/" className="text-lg font-extrabold">
            QR KOALA
          </a>
        </div>

        {/* Botón de hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="font-light">
            Inicia sesión
          </a>
          <a href="/generate">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-hover-button hover:text-white font-light transition-all">
              Únete
            </button>
          </a>
        </nav>

        {/* Overlay al abrir el menú en pantallas pequeñas */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Navegación para pantallas pequeñas */}
        <div
          id="mobile-menu"
          className={`${
            menuOpen ? "block opacity-100" : "hidden opacity-0"
          } absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-40 transition-opacity duration-300`}
        >
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a
              href="/"
              className="font-light text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Inicia sesión
            </a>
            <a
              href="/generate"
              onClick={() => setMenuOpen(false)}
            >
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-hover-button hover:text-white font-light transition-all">
                Únete
              </button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
