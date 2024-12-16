import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Banner = () => {
  return (
    <section className="bg-gris text-black py-20">
      <div className="custom-width space-y-10 md:space-y-20 px-4 md:px-6 pt-10 pb-20">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-6xl font-black text-center">
            Generador de códigos QR potente pero simple
          </h1>
          <p className="text-base md:text-xl text-center font-light">
            Cree, rastree y administre fácilmente sus códigos QR
          </p>
        </div>
        <div className="w-fit mx-auto">
          <a href="#selector-qr">
          <button
            className="bg-black text-white py-3 px-9 rounded-lg shadow-md hover:bg-hover-button hover:text-white flex gap-2 items-center font-normal transition-all"
          >
            Crear código QR
            <IoIosArrowRoundForward size={30}/>
          </button>
          </a>
        </div>
        <div>
          <img src="https://www.qrcode-koala.com/_next/image?url=%2Fimages%2Fdashboard-1.webp&w=3840&q=75" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
