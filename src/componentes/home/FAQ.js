import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const FAQ = () => {
  const Preguntas = [
    {
      pregunta: "¿Sus códigos QR tienen un contador de escaneo?",
      respuesta:
        "Sí, los códigos QR de QR Koala incluyen un contador de escaneo que rastrea la cantidad de veces que se escanea cada código, lo que le brinda análisis útiles.",
    },
    {
      pregunta: "¿Hay un límite en el número de exploraciones?",
      respuesta:
        "No, los códigos QR de QR Koala se pueden escanear un número ilimitado de veces sin ninguna restricción, lo que garantiza una usabilidad continua.",
    },
    {
      pregunta: "¿Se pueden utilizar con fines comerciales?",
      respuesta:
        "Sí, los códigos QR de QR Koala están diseñados tanto para uso personal como comercial, lo que permite a las empresas aprovecharlos para diversas aplicaciones.",
    },
    {
      pregunta: "¿Caducan los códigos QR?",
      respuesta:
        "No, los códigos QR no caducan. Sin embargo, necesitarás seleccionar un plan para continuar utilizando nuestros servicios después de que finalice tu prueba gratuita.",
    },
    {
      pregunta: "¿Puedo editar los códigos QR después de imprimirlos?",
      respuesta:
        "Sí, puedes editar los códigos QR dinámicos de QR Koala incluso después de que se hayan impreso, lo que ofrece flexibilidad para las actualizaciones.",
    },
    {
      pregunta: "¿Hay un límite en la cantidad de códigos QR que puedo crear?",
      respuesta:
        "No, con QR Koala, no hay límite en la cantidad de códigos QR que puede crear, lo que permite una generación ilimitada.",
    },
    {
      pregunta: "¿Puedo añadir el logotipo de mi empresa?",
      respuesta:
        "Sí, QR Koala le permite agregar el logotipo de su empresa a los códigos QR, brindando una apariencia de marca y profesional.",
    },
    {
      pregunta: "¿Puedo personalizar mi código QR?",
      respuesta:
        "Sí, QR Koala ofrece amplias opciones de personalización para sus códigos QR, incluidos colores, patrones y logotipos.",
    },
    {
      pregunta: "¿Los códigos QR son gratuitos?",
      respuesta:
        "QR Koala ofrece una prueba gratuita de 10 días, pero después del período de prueba, se requiere una suscripción para continuar usando el servicio.",
    },
    {
      pregunta: "¿Por qué en otras webs ofrecen códigos QR gratuitos?",
      respuesta:
        "Otros sitios web pueden ofrecer códigos QR estáticos gratuitos, pero a menudo con limitaciones, mientras que QR Koala ofrece códigos QR dinámicos y personalizables con análisis y seguimiento.",
    },
    {
      pregunta: "¿Qué son los códigos QR dinámicos?",
      respuesta:
        "Los códigos QR dinámicos, proporcionados por QR Koala, se pueden editar y rastrear incluso después de la impresión, lo que ofrece flexibilidad y análisis.",
    },
    {
      pregunta: "¿Cuál es la diferencia con otros sitios web?",
      respuesta:
        "QR Koala destaca por ofrecer escaneos ilimitados, amplias opciones de personalización y códigos QR dinámicos que no caducan con todos nuestros planes.",
    },
  ];
  return (
    <section className="bg-gris pt-10">
      <div className="custom-width space-y-10 md:space-y-20 px-4 md:px-6 pt-10 pb-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-black md:text-4xl text-center">
            Preguntas frecuentes
          </h2>
          <p className="text-base md:text-xl text-center font-light">
            Si tienes otra pregunta, comunícate con{" "}
            <a href="mailto:hello@qrcode-koala.com" className="text-azul">
              hello@qrcode-koala.com
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Preguntas.map((pregunta, index) => (
            <div
              key={index}
              className="space-y-5 md:space-y-10 text-left w-full"
            >
              <h3 className="font-black text-base md:text-xl">
                {pregunta.pregunta}
              </h3>
              <p className="text-justify text-base md:text-lg font-light">
                {pregunta.respuesta}
              </p>
            </div>
          ))}
        </div>

        <div className="w-fit mx-auto">
          <a href="#selector-qr">
            <button className="bg-black text-white py-3 px-9 rounded-lg shadow-md hover:bg-hover-button hover:text-white flex gap-2 items-center font-normal transition-all">
              Crear código QR
              <IoIosArrowRoundForward size={30} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
