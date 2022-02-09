import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abecedario from "./screens/Abecedario";
import FotoRaza from "./screens/FotoRaza";
import Razas from "./screens/Razas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Abecedario />} />
        <Route exact path="/razas/:letra" element={<Razas />} />
        <Route exact path="/foto-raza/:raza" element={<FotoRaza />} />
      </Routes>
    </Router>
  );
};

export default App;
