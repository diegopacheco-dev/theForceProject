import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader } from "../assets/icons";
import useFetch from "../hooks/useFetch";

const FotoRaza = () => {
  const { raza } = useParams("");
  const navigate = useNavigate();

  const { data, loading } = useFetch(
    `https://dog.ceo/api/breed/${raza}/images`
  );

  return (
    <div className="max-w-4xl p-6 mx-auto h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="self-start absolute top-7 hover:scale-110 transform transition text-[#ff6] bg-black border-2 border-current rounded-full w-10 h-10 flex justify-center items-center"
      >
        <ArrowLeft />
      </button>
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Foto de la raza{" "}
        <span className="text-4xl text-[#ff6]">
          "{raza.replace(/./, (c) => c.toUpperCase())}"
        </span>
      </h1>
      <div className="w-full md:max-w-96 md:w-96 object-cover overflow-hidden">
        {loading ? (
          <span className="text-[#ff6]">
            <Loader className="animate-spin mx-auto mt-4" />
          </span>
        ) : (
          <img
            className="hover:scale-105 rounded-xl min-w-full min-h-full transition transform"
            alt="foto de la raza"
            src={data?.message[0]}
          />
        )}
      </div>
    </div>
  );
};

export default FotoRaza;
