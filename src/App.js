import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useGenerateStars from "./hooks/useGenerateStars";
import Abecedario from "./screens/Abecedario";
import FotoRaza from "./screens/FotoRaza";
import Razas from "./screens/Razas";

const App = () => {
  console.log("Creado por Diego Pacheco");
  const { canvas } = useGenerateStars();

  return (
    <Router>
      <canvas
        className="bg-black absolute w-screen h-screen top-0 left-0 -z-10 overflow-hidden"
        ref={canvas}
      ></canvas>
      <Routes>
        <Route exact path="/" element={<Abecedario />} />
        <Route exact path="/razas/:letra" element={<Razas />} />
        <Route exact path="/foto-raza/:raza" element={<FotoRaza />} />
      </Routes>
    </Router>
  );
};

export default App;
