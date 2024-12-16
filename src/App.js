import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./internas/Home";
//import QRCodeGenerator from './componentes/QrCodeGenerator';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import SelectorQR from "./componentes/home/SelectorQR";
import GenerarWebsite from "./internas/GenerarWebsite";
import GenerarPDF from "./internas/GenerarPDF";
import GenerarVCard from "./internas/GenerarVCard";
import GenerarMenu from "./internas/GenerarMenu";
import GenerarVideo from "./internas/GenerarVideo";
import GenerarMP3 from "./internas/GenerarMP3";
import GenerarWifi from "./internas/GenerarWifi";
import GenerarNegocio from "./internas/GenerarNegocio";
import GenerarCupon from "./internas/GenerarCupon";
import GenerarImagenes from "./internas/GenerarImagenes";
import GenerarApp from "./internas/GenerarApp";
import GenerarLista from "./internas/GenerarLista";

function App() {
  const [qrCode, setQrCode] = useState(null); // Estado global para el QR generado

  // Función para generar el QR
  const handleGenerateQRCode = async (data) => {
    console.log("Payload enviado al servidor:", JSON.stringify(data, null, 2)); // Log para depuración
    try {
      const response = await fetch("http://localhost:5000/generate-qrcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error del servidor:", errorText);
        alert(`Error del servidor: ${response.statusText}`);
        return;
      }

      const result = await response.json();
      console.log("Respuesta del servidor:", result);

      if (result.qrCodeImage) {
        setQrCode(result.qrCodeImage);
        return result.qrCodeImage;
      } else {
        console.error("El servidor no devolvió una imagen QR válida.");
        alert("El servidor no devolvió una imagen QR válida.");
        return null;
      }
    } catch (error) {
      console.error("Error al generar el QR:", error);
      alert("Hubo un error generando el código QR. Revisa la consola para más detalles.");
      return null;
    }
  };

  return (
    <Router>
      <Header />
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<SelectorQR />} />
          <Route
            path="/generar/website"
            element={<GenerarWebsite onGenerateQRCode={handleGenerateQRCode} />}
          />

<Route
            path="/generar/pdf"
            element={<GenerarPDF onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/vcard"
            element={<GenerarVCard onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/menu"
            element={<GenerarMenu onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/video"
            element={<GenerarVideo onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/mp3"
            element={<GenerarMP3 onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/wifi"
            element={<GenerarWifi onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/negocio"
            element={<GenerarNegocio onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/cupon"
            element={<GenerarCupon onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/imagenes"
            element={<GenerarImagenes onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/app"
            element={<GenerarApp onGenerateQRCode={handleGenerateQRCode} />}
          />
          <Route
            path="/generar/lista-links"
            element={<GenerarLista onGenerateQRCode={handleGenerateQRCode} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
