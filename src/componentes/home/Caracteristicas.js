import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Caracteristicas = () => {
  const caracteristicas = [
    {
      icono:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 1200 1200" class="w-24 h-auto"><path d="M512.4 208.8v-96c0-10.801-8.398-19.199-19.199-19.199s-19.199 8.398-19.199 19.199v96c0 10.801 8.398 19.199 19.199 19.199S512.4 219.601 512.4 208.8zm81.602 50.398L662.4 190.8c7.2-7.2 7.2-20.398 0-27.602-7.2-7.2-20.398-7.2-27.602 0L566.4 231.596c-7.2 7.2-7.2 20.398 0 27.602 3.602 3.602 8.398 6 13.199 6 6.004 0 10.801-2.398 14.402-6zm139.2 73.199c0-10.801-8.398-19.199-19.199-19.199h-96c-10.801 0-19.199 8.398-19.199 19.199 0 10.801 8.398 19.199 19.199 19.199h96c9.602 1.203 19.199-8.398 19.199-19.199zm-313.2-73.199c7.2-7.2 7.2-20.398 0-27.602l-68.398-68.398c-7.2-7.2-20.398-7.2-27.602 0-7.2 7.2-7.2 20.398 0 27.602l68.398 68.398c3.602 3.602 8.398 6 13.199 6 4.8 0 9.602-2.398 14.402-6zm-31.199 73.199c0-10.801-8.398-19.199-19.199-19.199h-96c-10.801 0-19.199 8.398-19.199 19.199 0 10.801 8.398 19.199 19.199 19.199h96c10.797 1.203 19.199-8.398 19.199-19.199zM742.8 1106.4c-19.199-2.398-37.199-15.602-45.602-36l-76.801-195.6-115.2 92.398c-10.801 8.398-25.199 9.602-37.199 3.602s-19.199-18-19.199-31.2l12-580.8c0-13.198 8.398-25.198 21.602-31.198 13.199-4.801 27.602-2.399 37.199 7.199l416.4 420c9.602 9.601 12 24 7.2 36s-16.802 21.602-30 21.602L764.4 820.8l75.601 194.4c6 14.398 6 30 0 43.2-6 14.397-18 25.198-32.398 30l-36 14.397c-9.601 3.602-19.203 4.805-28.8 3.602zM639.6 801.6l99.602 252c2.398 6 10.801 9.602 16.801 7.2l36-14.399c3.602-1.199 6-3.601 7.2-6 1.198-2.398 1.198-4.8 0-8.398l-99.603-253.2 187.2-9.602-380.4-382.8-10.8 531.6z"></path></svg>',
      titulo: "Escoger",
      descripcion: "Elige el tipo de código QR que necesites",
    },
    {
      icono:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 1200 1200" class="w-24 h-auto"><path d="M680.29 176.34H519.65c-35.766 0-64.875-28.875-64.875-64.406l.047-39.281c0-10.359 8.39-18.75 18.75-18.75 10.359 0 18.75 8.39 18.75 18.75v39.328c0 14.812 12.28 26.906 27.375 26.906h160.64c15.094 0 27.375-12.047 27.375-26.906l-.094-39.328c0-10.359 8.39-18.75 18.75-18.75s18.75 8.39 18.75 18.75v39.328c.047 35.484-29.062 64.359-64.828 64.359z"></path><path d="M912.79 1146.1h-625.6c-10.359 0-18.75-8.39-18.75-18.75V72.65c0-10.359 8.39-18.75 18.75-18.75h625.64c10.359 0 18.75 8.39 18.75 18.75v1054.7c-.047 10.359-8.438 18.75-18.797 18.75zm-606.84-37.5h588.14l-.047-1017.2h-588.1z"></path><path d="M912.79 1020.4h-625.6c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h625.64c10.359 0 18.75 8.39 18.75 18.75-.047 10.359-8.438 18.75-18.797 18.75zM673.69 1083.1H526.22c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h147.47c10.359 0 18.75 8.39 18.75 18.75s-8.39 18.75-18.75 18.75zM480.52 508.55H364.88c-10.359 0-18.75-8.39-18.75-18.75V374.16c0-10.359 8.39-18.75 18.75-18.75h115.64c10.359 0 18.75 8.39 18.75 18.75V489.8c-.047 10.359-8.438 18.75-18.75 18.75zm-96.938-37.453h78.188v-78.188h-78.188zM480.52 844.6H364.88c-10.359 0-18.75-8.39-18.75-18.75V710.21c0-10.359 8.39-18.75 18.75-18.75h115.64c10.359 0 18.75 8.39 18.75 18.75v115.64c-.047 10.359-8.438 18.75-18.75 18.75zm-96.938-37.5h78.188v-78.188h-78.188zM851.39 844.6H735.75c-10.359 0-18.75-8.39-18.75-18.75V710.21c0-10.359 8.39-18.75 18.75-18.75h115.64c10.359 0 18.75 8.39 18.75 18.75v115.64c0 10.359-8.39 18.75-18.75 18.75zm-96.891-37.5h78.188v-78.188h-78.188zM833.21 508.55H717.57c-10.359 0-18.75-8.39-18.75-18.75V374.16c0-10.359 8.39-18.75 18.75-18.75h115.64c10.359 0 18.75 8.39 18.75 18.75V489.8c-.047 10.359-8.438 18.75-18.75 18.75zm-96.938-37.453h78.188v-78.188h-78.188zM615.94 394.13h-73.219c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h73.219c10.359 0 18.75 8.39 18.75 18.75s-8.39 18.75-18.75 18.75z"></path><path d="M579.32 507.37c-10.359 0-18.75-8.39-18.75-18.75v-113.3c0-10.359 8.39-18.75 18.75-18.75s18.75 8.39 18.75 18.75v113.3c0 10.359-8.39 18.75-18.75 18.75z"></path><path d="M640.18 457.92h-60.844c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h60.844c10.359 0 18.75 8.39 18.75 18.75s-8.39 18.75-18.75 18.75zM637.03 740.26h-74.156c-10.359 0-18.75-8.39-18.75-18.75v-98.812h-121.4c-10.359 0-18.75-8.39-18.75-18.75 0-10.359 8.39-18.75 18.75-18.75h140.21c10.359 0 18.75 8.39 18.75 18.75v98.812h55.359c10.359 0 18.75 8.39 18.75 18.75 0 10.312-8.39 18.75-18.75 18.75zM775.36 652.87h-96.188c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h77.438v-54.141c0-10.359 8.39-18.75 18.75-18.75s18.75 8.39 18.75 18.75v72.938c-.047 10.312-8.438 18.703-18.75 18.703zM650.21 844.6h-98.062c-10.359 0-18.75-8.39-18.75-18.75s8.39-18.75 18.75-18.75h98.062c10.359 0 18.75 8.39 18.75 18.75s-8.344 18.75-18.75 18.75z"></path></svg>',
      titulo: "Diseño",
      descripcion: "Personaliza y diseña tu código QR",
    },
    {
      icono:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 1200 1200" class="w-24 h-auto"><path d="M580.13 826.13a27.536 27.536 0 0 0 9.14 6.047c3.422 1.406 7.079 2.156 10.782 2.156 3.656 0 7.312-.75 10.78-2.156a28.52 28.52 0 0 0 9.141-6.047l225-225c10.97-10.969 10.97-28.781 0-39.75s-28.78-10.969-39.75 0l-177 177-.094-569.63c0-15.516-12.609-28.125-28.125-28.125s-28.125 12.609-28.125 28.125v569.63l-177-177c-10.969-10.969-28.78-10.969-39.75 0s-10.969 28.781 0 39.75z"></path><path d="M1087.5 665.63c-15.516 0-28.125 12.609-28.125 28.125v225c0 46.5-37.875 84.375-84.375 84.375H225c-46.5 0-84.375-37.875-84.375-84.375v-225c0-15.516-12.609-28.125-28.125-28.125s-28.125 12.609-28.125 28.125v225c0 77.531 63.094 140.63 140.63 140.63h750c77.531 0 140.63-63.094 140.63-140.63v-225c0-15.516-12.609-28.125-28.125-28.125z"></path></svg>',
      titulo: "Descargar",
      descripcion: "Descarga e imprime tu nuevo código QR",
    },
  ];

  return (
    <section className="bg-white">
      <div className="custom-width !max-w-screen-lg space-y-10 md:space-y-16 px-4 md:px-6 py-20 ">
        <div className="space-y-5">
          <h2 className="text-2xl font-black md:text-4xl text-center">
            Tu código QR en 3 pasos
          </h2>
          <p className="text-base md:text-xl text-center font-light">
            Crear tus códigos QR es extremadamente sencillo.
          </p>
        </div>
        <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caracteristicas.map((caracteristica, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center space-y-2 md:space-y-5"
            >
              <div
                dangerouslySetInnerHTML={{ __html: caracteristica.icono }}
                className="mb-7 flex justify-center "
              />
              <h3 className="font-black text-center text-base md:text-xl">
                {caracteristica.titulo}
              </h3>
              <p className="text-base md:text-xl text-center font-light">
                {caracteristica.descripcion}
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

export default Caracteristicas;
