import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const opcionesQR = [
  {
    id: "website",
    titulo: "Sitio web",
    descripcion: "Enlace a cualquier URL de sitio web",
    img: "/assets/imagenes/web-cap.jpg", // Ruta de la imagen para el hover
    ruta: "/generar/website", // Ruta de la página específica
  },
  {
    id: "pdf",
    titulo: "PDF",
    descripcion: "Mostrar un PDF",
    img: "/assets/imagenes/pdf-cap.jpg",
    ruta: "/generar/pdf",
  },
  {
    id: "vcard",
    titulo: "vCard",
    descripcion: "Comparte tu tarjeta de visita digital",
    img: "/assets/imagenes/vcard-cap.jpg",
    ruta: "/generar/vcard",
  },
  {
    id: "lista",
    titulo: "Lista de enlaces",
    descripcion: "Compartir varios enlaces",
    img: "/assets/imagenes/lista-cap.jpg",
    ruta: "/generar/lista-links",
  },
  {
    id: "negocio",
    titulo: "Negocio",
    descripcion: "Comparte información sobre tu negocio",
    img: "/assets/imagenes/negocio-cap.jpg",
    ruta: "/generar/negocio",
  },
  {
    id: "imagen",
    titulo: "Imágenes",
    descripcion: "Compartir varias imágenes",
    img: "/assets/imagenes/imagen-cap.jpg",
    ruta: "/generar/imagenes",
  },
  {
    id: "video",
    titulo: "Vídeo",
    descripcion: "Compartir un vídeo",
    img: "/assets/imagenes/video-cap.jpg",
    ruta: "/generar/video",
  },
  {
    id: "aplicacion",
    titulo: "Aplicación",
    descripcion: "Redirigir a una tienda de aplicaciones",
    img: "/assets/imagenes/app-cap.jpg",
    ruta: "/generar/app",
  },
  {
    id: "cupon",
    titulo: "Cupón",
    descripcion: "Compartir un cupón",
    img: "/assets/imagenes/cupon-cap.jpg",
    ruta: "/generar/cupon",
  },
  {
    id: "mp3",
    titulo: "MP3",
    descripcion: "Compartir un archivo de audio",
    img: "/assets/imagenes/mp3-cap.jpg",
    ruta: "/generar/mp3",
  },
  {
    id: "menu",
    titulo: "Menú",
    descripcion: "Crear un menú de restaurante",
    img: "/assets/imagenes/menu-cap.jpg",
    ruta: "/generar/menu",
  },
  {
    id: "wifi",
    titulo: "Wi-Fi",
    descripcion: "Conectarse a una red Wi-Fi",
    img: "/assets/imagenes/wifi-cap.jpg",
    ruta: "/generar/wifi",
  },
];

const SelectorQR = () => {
  const [imagenActual, setImagenActual] = useState(null); // Imagen en el teléfono
  const navigate = useNavigate();

  return (
    <section className="bg-gris py-20" id="selector-qr">
      <div className="custom-width space-y-10 px-4 md:px-6 py-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-black md:text-4xl text-center">
            Códigos QR para todo
          </h2>
          <p className="text-base md:text-xl text-center font-light">
            Sea cual sea el tipo de código QR que necesites, te tenemos
            cubierto.
          </p>
        </div>
        <div className="max-w-[1050px] mx-auto">
          <div className="flex gap-14">
            {/* Opciones de QR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {opcionesQR.map((opcion) => (
                <div
                  key={opcion.id}
                  className="flex flex-row md:flex-col items-center justify-start md:justify-center shadow-lg gap-2 md:gap-3 bg-white rounded-lg hover:bg-black border border-gris-oscuro hover:text-white transition-all py-5 px-2 cursor-pointer"
                  onMouseEnter={() => setImagenActual(opcion.img)} // Cambia la imagen al hacer hover
                  onMouseLeave={() => setImagenActual(null)} // Limpia la imagen al salir del hover
                  onClick={() => navigate(opcion.ruta)} // Redirige al hacer clic
                >
                  <div className="w-14 h-14 p-2 lg:w-20 lg:h-20 lg:p-3 bg-black rounded-full border-2 border-primary group-hover:border-white flex items-center justify-center">
                    <img
                      src={`/assets/iconos/${opcion.id}.svg`}
                      alt={opcion.titulo}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-left md:text-center font-bold xl:whitespace-nowrap truncate w-full group-hover:text-white">
                      {opcion.titulo}
                    </h3>
                    <p className="text-left md:text-center text-xs text-gray-500 group-hover:text-white">
                      {opcion.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Teléfono dinámico con SVG */}
            <div className="hidden lg:flex w-4/12 h-fit justify-end sticky top-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 700"
                className="w-72 h-auto relative"
              >
                {/* Contorno del teléfono */}
                <rect
                  x="10"
                  y="10"
                  width="330"
                  height="680"
                  rx="50"
                  ry="50"
                  fill="#1f1f1f"
                />

                {/* Notch superior */}
                <rect
                  x="135"
                  y="10"
                  width="80"
                  height="20"
                  rx="10"
                  ry="10"
                  fill="#2C2C2C"
                />

                {/* Pantalla interna */}
                <rect
                  x="25"
                  y="40"
                  width="300"
                  height="620"
                  rx="20"
                  ry="20"
                  fill="white"
                />

                {/* Definir ClipPath para bordes redondeados */}
                <defs>
                  <clipPath id="rounded-screen">
                    <rect
                      x="25"
                      y="40"
                      width="300"
                      height="620"
                      rx="20"
                      ry="20"
                    />
                  </clipPath>
                </defs>

                {/* Imagen dinámica con bordes redondeados */}
                {imagenActual ? (
                  <image
                    href={imagenActual}
                    x="25"
                    y="40"
                    width="300"
                    height="620"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#rounded-screen)" // Usar el ClipPath
                  />
                ) : (
                  <foreignObject
                    x="25"
                    y="40"
                    width="300"
                    height="620"
                    clipPath="url(#rounded-screen)" // Usar el ClipPath
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <img
                        src="/assets/imagenes/qr_koala_logo.webp"
                        alt="Koala QR"
                        className="w-20 h-20 mx-auto"
                      />
                      <p className="font-medium text-xl text-center px-2">
                        Seleccione un tipo de código QR para comenzar
                      </p>
                    </div>
                  </foreignObject>
                )}

                {/* Indicador inferior (gesto) */}
                <rect
                  x="150"
                  y="660"
                  width="50"
                  height="5"
                  rx="2.5"
                  fill="#2C2C2C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectorQR;
