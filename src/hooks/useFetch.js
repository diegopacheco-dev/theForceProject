import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response) {
          throw {
            err: true,
            statusText: "Ocurrio un error",
          };
        }
        const data = await response.json();
        setData(data);
        setError({ err: false });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getData(url);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
