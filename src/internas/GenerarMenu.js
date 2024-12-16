import React, { useState } from "react";
import {
  FaUtensils,
  FaBorderStyle,
  FaPalette,
  FaVectorSquare,
  FaImage,
} from "react-icons/fa";
import { FiPlus, FiChevronRight, FiChevronLeft, FiTrash2} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const GenerarMenu = ({ onGenerateQRCode }) => {
  const [step, setStep] = useState(1);
  const [menuItems, setMenuItems] = useState([{ name: "", price: "" }]);
  const [qrDesign, setQrDesign] = useState({
    frameColor: "#000000",
    frameText: "",
    pattern: "Clásico",
    cornerColor: "#000000",
    dotColor: "#000000",
    logo: null,
  });
  const [qrCode, setQrCode] = useState(null);
  const [activeField, setActiveField] = useState(1);

  const handleAddMenuItem = () => {
    setMenuItems([...menuItems, { name: "", price: "" }]);
  };

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

  const handleMenuItemChange = (index, field, value) => {
    const updatedMenuItems = menuItems.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setMenuItems(updatedMenuItems);
  };

  const toggleField = (fieldNumber) => {
    setActiveField((prevField) =>
      prevField === fieldNumber ? null : fieldNumber
    );
  };

  const handleGenerateQRCode = async () => {
    if (menuItems.some((item) => !item.name || !item.price)) {
      alert("Por favor, complete todos los campos del menú.");
      return;
    }

    const payload = {
      type: "Menu",
      items: menuItems,
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

  const handleDownloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "menu-qr-code.png";
    link.click();
  };

  return (
    <section className="bg-gris">
      {/* Encabezado (barra de pasos) */}
      <div className="custom-width space-y-5 md:space-y-7 w-full relative p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {step === 1 && "1. Añade contenido a tu menú"}
            {step === 2 && "2. Personaliza el diseño"}
            {step === 3 && "3. Descarga tu código QR"}
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Paso 1: Añadir contenido */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div className="p-4 bg-white rounded-lg shadow border border-gris-oscuro">
                <div
                  className="font-bold flex items-center justify-between cursor-pointer"
                  onClick={() => toggleField(1)}
                >
                  <div className="flex items-center space-x-2 gap-1">
                    <div className="p-2 border border-gris-oscuro rounded-lg">
                      <FaUtensils size={28} />
                    </div>
                    <div>
                      <h4 className="font-medium">Detalles del menú</h4>
                      <p className="text-sm text-gray-500 font-light">
                        Agregue los elementos de su menú.
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
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 p-3 border border-gris-oscuro rounded-md"
                      >
                        <div className="flex items-center gap-4">
                          {/* Campo: Nombre */}
                          <input
                            type="text"
                            placeholder="Nombre del platillo"
                            value={item.name}
                            onChange={(e) =>
                              handleMenuItemChange(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            className="flex-1 appearance-none rounded-lg py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                          />

                          {/* Campo: Precio */}
                          <input
                            type="number"
                            placeholder="Precio ($)"
                            value={item.price}
                            onChange={(e) =>
                              handleMenuItemChange(
                                index,
                                "price",
                                e.target.value
                              )
                            }
                            className="w-28 appearance-none rounded-lg py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline border border-gris-oscuro"
                          />

                          {/* Botón para eliminar */}
                          <button
                            onClick={() =>
                              setMenuItems(
                                menuItems.filter((_, i) => i !== index)
                              )
                            }
                            className="p-2 btn-eliminar text-white rounded-lg"
                          >
                            <FiTrash2 />
                          </button>
                        </div>

                        {/* Campo: Imagen */}
                        <div>
                          <label className="block text-sm font-medium text-gray-600">
                            Imagen del platillo (opcional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                  handleMenuItemChange(
                                    index,
                                    "image",
                                    reader.result
                                  );
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                          />
                          {item.image && (
                            <div className="mt-2">
                              <img
                                src={item.image}
                                alt={`Platillo ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-md border"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Botón para agregar otro elemento */}
                    <button
                      onClick={handleAddMenuItem}
                      className="mt-2 px-4 py-2 bg-gray-200 text-black rounded-lg"
                    >
                      + Agregar otro elemento
                    </button>
                  </div>
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
                                  className={`w-5 h-5 text-gris transition-transform ${
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

export default GenerarMenu;
