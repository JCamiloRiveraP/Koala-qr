import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-2xl mx-auto pt-14 pb-6 px-5 md:px-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-14 justify-between">
          {/* Logo y descripción */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://www.qrcode-koala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr_koala_logo.3b47abc9.png&w=32&q=75" // Cambia esta ruta por tu logo
                alt="QR Koala"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-bold">QR KOALA</h2>
            </div>
            <p className="text-white font-light w-full md:w-8/12">
              Generador de códigos QR potente pero simple que se adapta a todas
              sus necesidades de códigos QR como empresa o como individuo.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between w-6/12">
            {/* Recursos */}
            <div>
              <h3 className="text-sm font-semibold text-white pb-2">
                Recursos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/crear-codigo"
                    className="hover:text-gray-400 text-sm"
                  >
                    Crear código QR
                  </a>
                </li>
                <li>
                  <a
                    href="/planes-precios"
                    className="hover:text-gray-400 text-sm"
                  >
                    Planes y precios
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gray-400 text-sm">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-gray-400 text-sm">
                    Contáctenos
                  </a>
                </li>
              </ul>
            </div>

            {/* Letra chica */}
            <div>
              <h3 className="text-sm font-semibold text-white pb-2">
                Letra chica
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terminos-servicio"
                    className="hover:text-gray-400 text-sm"
                  >
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-privacidad"
                    className="hover:text-gray-400 text-sm"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-gray-400 text-sm">
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a href="/reembolso" className="hover:text-gray-400 text-sm">
                    Política de reembolso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contáctenos */}
            <div>
              <h3 className="text-sm font-semibold text-white pb-2">
                Contáctenos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/apoyo" className="hover:text-gray-400 text-sm">
                    Apoyo
                  </a>
                </li>
                <li>
                  <a href="/ventas" className="hover:text-gray-400 text-sm">
                    Ventas
                  </a>
                </li>
                <li>
                  <a
                    href="/relaciones-publicas"
                    className="hover:text-gray-400 text-sm"
                  >
                    Relaciones públicas
                  </a>
                </li>
                <li>
                  <a
                    href="/consultas-generales"
                    className="hover:text-gray-400 text-sm"
                  >
                    Consultas generales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400 copy">
          © 2024 QR Code Koala · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
