import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import {
  FaBorderStyle,
  FaPalette,
  FaVectorSquare,
  FaImage,
} from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const GenerarWebsite = () => {
  const [activeField, setActiveField] = useState(1);
  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [qrName, setQrName] = useState("");
  const [password, setPassword] = useState("");
  const [enablePassword, setEnablePassword] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const navigate = useNavigate();

  const handleGoToSelector = () => {
    navigate("/"); // Navega al home
    setTimeout(() => {
      const selectorElement = document.getElementById("selector-qr");
      if (selectorElement) {
        selectorElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const [qrDesign, setQrDesign] = useState({
    frameColor: "#000000",
    frameText: "",
    pattern: "Clásico",
    cornerColor: "#000000",
    dotColor: "#000000",
    logo: null,
  });

  const toggleField = (fieldNumber) => {
    setActiveField((prevField) =>
      prevField === fieldNumber ? null : fieldNumber
    );
  };

  const handleGenerateQRCode = async () => {
    if (!url) {
      alert("Por favor, ingrese una URL válida.");
      return;
    }
    if (enablePassword && password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const payload = {
      type: "Website",
      text: url, // URL ingresada por el usuario
      ...(qrName && { name: qrName }), // Incluye solo si hay un nombre
      ...(enablePassword && password && { password }), // Incluye solo si la contraseña está activada
      frameColor: qrDesign.frameColor, // Personalización opcional
      frameText: qrDesign.frameText, // Personalización opcional
      pattern: qrDesign.pattern,
      cornerColor: qrDesign.cornerColor,
      dotColor: qrDesign.dotColor,
      logo: qrDesign.logo,
    };

    try {
      const response = await fetch("http://localhost:5000/generate-qrcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error al generar QR: ${error.error}`);
        return;
      }

      const data = await response.json();
      setQrCode(data.qrCodeImage);
    } catch (error) {
      console.error("Error generando el código QR:", error);
      alert("Hubo un error generando el código QR. Revisa la consola.");
    }
  };

  const handleDownloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `${qrName || "qr-code"}.png`;
    link.click();
  };

  return (
    <section className="bg-gris">
      {/* Encabezado (barra de pasos) */}
      <div className="custom-width space-y-5 md:space-y-7 w-full relative p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {step === 1 && "1. Añade contenido a tu código QR"}
            {step === 2 && "2. Personaliza el diseño"}
            {step === 3 && "3. Descarga tu código QR"}
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Paso 2: Añade contenido */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              {/* Campo URL */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(1)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <TfiWorld size={28} />
                    </div>
                    <div>
                      <h4 className="font-medium">Información del sitio web</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Introduzca la URL a la que redirigirá este QR.
                      </p>
                    </div>
                  </div>

                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 1 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 1 && (
                  <div className="bg-gris border border-gris-oscuro p-3 rounded-md mt-4">
                    <label
                      htmlFor="url"
                      className="block text-gray-500 mb-2 text-left text-sm break-words font-semibold"
                    >
                      URL
                    </label>
                    <input
                      type="url"
                      id="url"
                      placeholder="https://website.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="appearance-none rounded-lg w-full py-3 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                    />
                  </div>
                )}
              </div>

              {/* Campo Nombre */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(2)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <MdOutlineDriveFileRenameOutline size={28} />
                    </div>
                    <div>
                      <h4 className="font-medium">Nombre del código QR</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Dale un nombre a tu código QR.
                      </p>
                    </div>
                  </div>

                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 2 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 2 && (
                  <div className="bg-gris border border-gris-oscuro p-3 rounded-md mt-4">
                    <label
                      htmlFor="nombre"
                      className="block text-gray-500 mb-2 text-left text-sm break-words font-semibold"
                    >
                      Nombre QR
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Por ejemplo, mi primer código QR"
                      value={qrName}
                      onChange={(e) => setQrName(e.target.value)}
                      className="appearance-none rounded-lg w-full py-3 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                    />
                  </div>
                )}
              </div>

              {/* Campo Contraseña */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(3)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <CiLock size={28} />
                    </div>
                    <div>
                      <h4 className="font-medium">Contraseña</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Introduzca una contraseña que los usuarios deberán
                        proporcionar al escanear el código QR.
                      </p>
                    </div>
                  </div>

                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 3 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 3 && (
                  <>
                    <div className="bg-gris border border-gris-oscuro p-2 py-3 mt-4 rounded-md">
                      <input
                        type="checkbox"
                        checked={enablePassword}
                        onChange={(e) => setEnablePassword(e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-xs font-semibold">
                        Activar contraseña para acceder al código QR
                      </span>
                    </div>
                    {enablePassword && (
                      <input
                        type="text"
                        placeholder="Ingrese la contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Paso 2: Personaliza el diseño */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Marco */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(1)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <FaBorderStyle size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Marco</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Los marcos hacen que su código QR sea más atractivo.
                        Puede personalizar el color y el texto del marco.
                      </p>
                    </div>
                  </div>
                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 1 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 1 && (
                  <div className="mt-4 space-y-3">
                    <label className="block text-gray-600 font-semibold text-sm">
                      Color del marco
                    </label>
                    <input
                      type="color"
                      className="w-16 h-8 border rounded-md"
                      value={qrDesign.frameColor}
                      onChange={(e) =>
                        setQrDesign({ ...qrDesign, frameColor: e.target.value })
                      }
                    />
                    <label className="block text-gray-600 font-semibold text-sm">
                      Texto del marco
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="Escribe el texto del marco"
                      value={qrDesign.frameText}
                      onChange={(e) =>
                        setQrDesign({ ...qrDesign, frameText: e.target.value })
                      }
                    />
                  </div>
                )}
              </div>

              {/* Patrón */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(2)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <FaPalette size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Patrón de código QR</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Elige un patrón para que tu código QR sea más único.
                      </p>
                    </div>
                  </div>
                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 2 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 2 && (
                  <div className="mt-4 space-y-3">
                    <label className="block text-gray-600 font-semibold text-sm">
                      Seleccione un patrón
                    </label>
                    <select
                      className="w-full border rounded-md p-2"
                      value={qrDesign.pattern}
                      onChange={(e) =>
                        setQrDesign({ ...qrDesign, pattern: e.target.value })
                      }
                    >
                      <option value="Clásico">Clásico</option>
                      <option value="Cuadrado">Cuadrado</option>
                      <option value="Redondo">Redondo</option>
                      <option value="Arte abstracto">Arte abstracto</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Esquinas */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(3)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <FaVectorSquare size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Esquinas de códigos QR</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Selecciona el color de las esquinas y los puntos de las
                        esquinas de tu código QR.
                      </p>
                    </div>
                  </div>
                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 3 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 3 && (
                  <div className="mt-4 space-y-3">
                    <label className="block text-gray-600 font-semibold text-sm">
                      Color de las esquinas
                    </label>
                    <input
                      type="color"
                      className="w-16 h-8 border rounded-md"
                      value={qrDesign.cornerColor}
                      onChange={(e) =>
                        setQrDesign({
                          ...qrDesign,
                          cornerColor: e.target.value,
                        })
                      }
                    />
                    <label className="block text-gray-600 font-semibold text-sm">
                      Color de los puntos
                    </label>
                    <input
                      type="color"
                      className="w-16 h-8 border rounded-md"
                      value={qrDesign.dotColor}
                      onChange={(e) =>
                        setQrDesign({ ...qrDesign, dotColor: e.target.value })
                      }
                    />
                  </div>
                )}
              </div>

              {/* Logotipo */}
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(4)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <FaImage size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Agregar logotipo</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Haz que tu código QR sea más reconocible añadiendo tu
                        logotipo.
                      </p>
                    </div>
                  </div>
                  <div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 4 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
                {activeField === 4 && (
                  <div className="mt-4 space-y-3">
                    <label className="block text-gray-600 font-semibold text-sm">
                      Subir logotipo
                    </label>
                    <input
                      type="file"
                      className="w-full border rounded-md p-2"
                      accept="image/*"
                      onChange={(e) =>
                        setQrDesign({ ...qrDesign, logo: e.target.files[0] })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Paso 3: Descarga */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold">Descarga tu QR</h2>
              {qrCode ? (
                <div className="text-center">
                  <img src={qrCode} alt="Código QR" className="mx-auto" />
                  <button
                    onClick={handleDownloadQRCode}
                    className="px-4 py-2 mt-4 bg-black text-white rounded-lg"
                  >
                    Descargar QR
                  </button>
                </div>
              ) : (
                <p>El QR aparecerá aquí después de generarlo.</p>
              )}
            </div>
          )}

          {/* Vista previa móvil */}
          <div className="flex justify-center items-center">
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
              <foreignObject
                x="25"
                y="40"
                width="300"
                height="620"
                clipPath="url(#rounded-screen)"
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: qrDesign.frameColor,
                  }}
                >
                  {qrCode ? (
                    <>
                      {/* Imagen del QR generada */}
                      <img
                        src={qrCode}
                        alt="QR Preview"
                        className="w-48 h-48"
                        style={{
                          borderColor: qrDesign.cornerColor,
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                      />
                      {/* Texto del marco */}
                      {qrDesign.frameText && (
                        <p
                          className="mt-4 text-white text-sm"
                          style={{ color: qrDesign.dotColor }}
                        >
                          {qrDesign.frameText}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Vista previa por defecto */}
                      <p className="text-gray-500">Vista previa</p>
                      <p className="text-gray-500 text-xs">
                        Configure el QR para ver los cambios aquí
                      </p>
                    </>
                  )}
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div className="flex justify-between mt-6 bg-white p-5">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg border-black border hover:bg-black hover:text-white flex justify-center items-center gap-2"
          >
            <FiChevronLeft /> Volver
          </button>
        ) : (
          <button
            onClick={handleGoToSelector}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg border-black border hover:bg-black hover:text-white flex justify-center items-center gap-2"
          >
            <FiChevronLeft /> Tipos de QR
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black border flex justify-center items-center gap-2"
          >
            Próximo <FiChevronRight />
          </button>
        ) : (
          <button
            onClick={handleGenerateQRCode}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg border-black border hover:bg-black hover:text-white flex justify-center items-center gap-2"
          >
            Generar QR <FiChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default GenerarWebsite;
