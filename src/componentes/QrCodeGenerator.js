import React, { useState } from "react";
import axios from "axios";

const QRCodeGenerator = () => {
  const [text, setText] = useState(""); // Para capturar el texto ingresado
  const [qrCodeImage, setQrCodeImage] = useState(""); // Para almacenar la imagen del QR generado
  const [error, setError] = useState(""); // Para manejar errores

  // Función para generar el código QR
  const generateQRCode = async () => {
    if (!text) {
      setError("Por favor, ingresa un texto o URL.");
      return;
    }
    setError(""); // Limpiar errores anteriores

    try {
      const response = await axios.post(
        "http://localhost:5000/generate-qrcode",
        { text }
      );
      setQrCodeImage(response.data.qrCodeImage); // Establecer la imagen recibida
    } catch (err) {
      setError("Hubo un error al generar el código QR.");
      console.error(err);
    }
  };
  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeImage; // `qrCodeImage` es la imagen generada
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Generador de Códigos QR</h1>
      <input
        type="text"
        placeholder="Escribe el texto o URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />
      <button
        onClick={generateQRCode}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Generar Código QR
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {qrCodeImage && (
        <div className="mt-4">
          <img src={qrCodeImage} alt="Código QR generado" className="mx-auto" />
        </div>
      )}
      <button
        onClick={downloadQRCode}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Descargar QR
      </button>
    </div>
  );
};

export default QRCodeGenerator;
