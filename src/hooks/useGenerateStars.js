import { useEffect, useRef } from "react";

const useGenerateStars = () => {
  const canvas = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
    let w = (canvas.current.width = window.innerWidth);
    let h = (canvas.current.height = window.innerHeight);
    let num = 150;
    let tamaño = 3;
    let elementos = [];

    const inicio = () => {
      for (var i = 0; i < num; i++) {
        elementos[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          tamaño: Math.random() * tamaño,
        };
      }
    };

    function nevada() {
      ctx.current.clearRect(0, 0, w, h);
      for (var i = 0; i < num; i++) {
        var e = elementos[i];
        ctx.current.beginPath();
        ctx.current.fillStyle = "#ff6";
        ctx.current.arc(e.x, e.y, e.tamaño, 0, 2 * Math.PI);
        ctx.current.fill();
      }
    }

    inicio();
    nevada();
  }, []);

  return { canvas };
};

export default useGenerateStars;
