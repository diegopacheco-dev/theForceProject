import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FotoRaza = () => {
  const { raza } = useParams("");

  const { data, loading } = useFetch(
    `https://dog.ceo/api/breed/${raza}/images`
  );

  return (
    <div>
      Foto Raza
      {loading ? (
        <p>Cargando</p>
      ) : (
        <img alt="foto de la raza" src={data?.message[0]} />
      )}
    </div>
  );
};

export default FotoRaza;
