import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ArrowLeft, Loader } from "../assets/icons";
import useFetch from "../hooks/useFetch";

const Razas = () => {
  const { letra } = useParams();
  const [razas, setRazas] = useState([]);
  const { data, loading } = useFetch("https://dog.ceo/api/breeds/list/all");

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) return;

    const razasFiltradas = Object.keys(data?.message).filter((raza) =>
      raza.toUpperCase().startsWith(letra.toUpperCase())
    );
    setRazas(razasFiltradas);
    return () => {
      setRazas([]);
    };
  }, [letra, data]);

  return (
    <div className="p-6 text-white max-w-4xl mx-auto flex flex-col justify-center h-screen relative">
      <button
        onClick={() => navigate("/", { state: "activate" })}
        className="absolute top-7 hover:scale-110 transform transition text-[#ff6] bg-black border-2 border-current rounded-full w-10 h-10 flex justify-center items-center"
      >
        <ArrowLeft />
      </button>
      {razas.length > 0 && !loading ? (
        <h1 className="text-3xl font-bold text-center mb-8">
          {razas.length === 0 && "NO"} RAZAS DE PERROS QUE INICIAN CON LA LETRA{" "}
          <span className="text-4xl text-[#ff6]">"{letra}"</span>
        </h1>
      ) : null}

      {razas.length === 0 && !loading ? (
        <h1 className="text-2xl font-semibold text-center mb-8">
          NO HAY RAZAS DE PERROS QUE INICIAN CON LA LETRA{" "}
          <span className="text-4xl text-[#ff6]">"{letra}"</span>
        </h1>
      ) : null}

      <div className="gap-3 flex flex-col items-start justify-center ">
        {loading && (
          <span className="w-full text-[#ff6]">
            <Loader className="animate-spin mx-auto mt-4" />
          </span>
        )}

        {razas.map((raza, i) => (
          <Link
            to={`/foto-raza/${raza}`}
            className="text-2xl text-center w-full hover:scale-110 hover:translate-x-2 hover:font-semibold transition"
            key={i}
          >
            {raza.replace(/./, (c) => c.toUpperCase())}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Razas;
