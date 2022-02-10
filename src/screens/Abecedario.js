import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./abecedario.css";
import musicBackground from "../assets/starwars.mp3";

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

const Abecedario = () => {
  const [claseAnimation, setClaseAnimation] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);
  const audio = useRef();

  const { state } = useLocation();

  const play = () => {
    audio.current.play();
    setIsShowButton(false);
    setInterval(() => {
      setIsPlaying(true);
      setClaseAnimation("animacion_abecedario");
    }, 3000);
  };

  useEffect(() => {
    if (state === "activate") {
      setIsShowButton(false);
      setIsPlaying(true);
      // limpiamos el state 'activate' de la ruta para que pueda volver a salir la animacion con la musica
      window.history.replaceState({}, document.title);
    }
    return () => {
      setIsPlaying(false);
      setIsShowButton(true);
    };
  }, [state]);

  return (
    <div className="w-screen p-6 h-screen overflow-hidden">
      <audio ref={audio} src={musicBackground} id="sonido"></audio>
      {!isPlaying && isShowButton ? (
        <div className="h-full flex items-center">
          <button
            className="mx-auto border-2 p-4 text-2xl rounded-md border-[#ff6] text-[#ff6] hover:shadow-lg shadow-current"
            onClick={play}
          >
            Empezar
          </button>
        </div>
      ) : null}

      <div className="abecedario-container h-full pb-10 max-w-7xl mx-auto relative">
        {isPlaying && (
          <div
            className={`abecedario flex flex-wrap justify-center overflow-hidden ${claseAnimation}`}
          >
            {ABECEDARIO.map((letra, i) => (
              <Link
                className="font-bold p-6 text-4xl md:text-8xl text-[#ff6] z-10 hover:scale-110 transition"
                to={`/razas/${letra}`}
                key={i}
              >
                {letra}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Abecedario;
