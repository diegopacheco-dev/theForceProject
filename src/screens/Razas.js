import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Razas = () => {
  const { letra } = useParams();

  const [razas, setRazas] = useState([]);

  const { data, loading } = useFetch("https://dog.ceo/api/breeds/list/all");

  useEffect(() => {
    if (!data) return;

    const razasFiltradas = Object.keys(data?.message).filter((raza) =>
      raza.toUpperCase().startsWith(letra.toUpperCase())
    );
    setRazas(razasFiltradas);
  }, [letra, data]);

  return (
    <div>
      <h1>Razas con la letra {letra}</h1>
      <div>
        {loading && <p>Cargando</p>}

        {razas.map((raza, i) => (
          <Link to={`/foto-raza/${raza}`} key={i}>
            {raza.replace(/./, (c) => c.toUpperCase())}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Razas;
