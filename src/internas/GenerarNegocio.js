import React, { useState } from "react";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineBusiness,
  MdOutlineDescription,
} from "react-icons/md";
import {
  FaBorderStyle,
  FaPalette,
  FaVectorSquare,
  FaImage,
} from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const GenerarNegocio = ({ onGenerateQRCode }) => {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [qrDesign, setQrDesign] = useState({
    frameColor: "#000000",
    frameText: "",
    cornerColor: "#000000",
    dotColor: "#000000",
  });
  const [activeField, setActiveField] = useState(1);

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

  const toggleField = (fieldNumber) => {
    setActiveField((prevField) =>
      prevField === fieldNumber ? null : fieldNumber
    );
  };

  const handleGenerate = async () => {
    if (!businessName || !phone || !address) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    const payload = {
      type: "Negocio",
      text: `Negocio: ${businessName}\nTeléfono: ${phone}\nDirección: ${address}\nEmail: ${email}\nSitio web: ${website}\nDescripción: ${description}`,
      ...qrDesign,
    };

    try {
      const qrCodeData = await onGenerateQRCode(payload);
      setQrCode(qrCodeData);
      setStep(3);
    } catch (error) {
      console.error("Error al generar el QR:", error);
    }
  };

  const handleDownload = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "negocio-qr-code.png";
    link.click();
  };

  return (
    <section className="bg-gris">
      <div className="custom-width space-y-5 md:space-y-7 w-full relative p-4 md:p-6">
        {/* Encabezado con pasos */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {step === 1 && "1. Añade información de tu negocio"}
            {step === 2 && "2. Personaliza el diseño"}
            {step === 3 && "3. Descarga tu código QR"}
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formulario dinámico según el paso */}
          <div>
            {step === 1 && (
              <div className="flex flex-col gap-5">
                {/* Acordeón 1: Información del negocio */}
                <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                  <div
                    className="font-bold flex items-center justify-between cursor-pointer"
                    onClick={() => toggleField(1)}
                  >
                    <div className="flex items-center space-x-2 gap-1">
                      <div className="p-2 border border-gris-oscuro rounded-lg">
                        <MdOutlineBusiness size={28} />
                      </div>
                      <div>
                        <h4 className="font-medium">Información del negocio</h4>
                        <p className="text-sm text-gray-500 font-light">
                          Proporcione el nombre, teléfono y dirección de su
                          negocio.
                        </p>
                      </div>
                    </div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 1 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {activeField === 1 && (
                    <div className="mt-4 space-y-4">
                      <input
                        type="text"
                        placeholder="Nombre del Negocio"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                      />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                      />
                      <input
                        type="text"
                        placeholder="Dirección"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                      />
                    </div>
                  )}
                </div>

                {/* Acordeón 2: Contacto adicional */}
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
                        <h4 className="font-medium">Contacto adicional</h4>
                        <p className="text-sm text-gray-500 font-light">
                          Proporcione un email y un sitio web.
                        </p>
                      </div>
                    </div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 2 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {activeField === 2 && (
                    <div className="mt-4 space-y-4">
                      <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                      />
                      <input
                        type="url"
                        placeholder="Sitio Web"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                      />
                    </div>
                  )}
                </div>

                {/* Acordeón 3: Descripción del negocio */}
                <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                  <div
                    className="font-bold flex items-center justify-between cursor-pointer"
                    onClick={() => toggleField(3)}
                  >
                    <div className="flex items-center space-x-2 gap-1">
                      <div className="p-2 border border-gris-oscuro rounded-lg">
                        <MdOutlineDescription size={28} />
                      </div>
                      <div>
                        <h4 className="font-medium">Descripción</h4>
                        <p className="text-sm text-gray-500 font-light">
                          Añade una breve descripción de tu negocio.
                        </p>
                      </div>
                    </div>
                    <FiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeField === 3 ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {activeField === 3 && (
                    <div className="mt-4">
                      <textarea
                        placeholder="Descripción del negocio"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="appearance-none rounded-lg w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                        rows="4"
                      ></textarea>
                    </div>
                  )}
                </div>
              </div>
            )}

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
                          setQrDesign({
                            ...qrDesign,
                            frameColor: e.target.value,
                          })
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
                          setQrDesign({
                            ...qrDesign,
                            frameText: e.target.value,
                          })
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
                          Selecciona el color de las esquinas y los puntos de
                          las esquinas de tu código QR.
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

            {step === 3 && (
              <div className="space-y-3">
                <p>Su QR está listo para descargar.</p>
                {qrCode && (
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-48 h-48 mx-auto border border-gray-200 rounded-md"
                  />
                )}
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-black text-white rounded-lg mt-4"
                >
                  Descargar QR
                </button>
              </div>
            )}
          </div>

          {/* Teléfono dinámico */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 700"
              className="w-72 h-auto relative"
            >
              <rect
                x="10"
                y="10"
                width="330"
                height="680"
                rx="50"
                ry="50"
                fill="#1f1f1f"
              />
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
            Siguiente <FiChevronRight />
          </button>
        ) : (
          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg border-black border hover:bg-black hover:text-white flex justify-center items-center gap-2"
          >
            Generar QR <FiChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default GenerarNegocio;
