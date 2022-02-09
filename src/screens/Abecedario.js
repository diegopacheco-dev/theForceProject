import React from "react";
import { Link } from "react-router-dom";

const ABECEDARIO = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// const Letra = ({ children }) => (
//   <p className="hover:bg-orange-400">{children}</p>
// );

const Abecedario = () => {
  return (
    <div>
      <h1>Abecedario</h1>
      <div className="flex justify-around max-w-7xl m-auto bg-amber-400">
        {ABECEDARIO.map((letra, i) => (
          <Link to={`/razas/${letra}`} key={i}>
            {letra}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Abecedario;
