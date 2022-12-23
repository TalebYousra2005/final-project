import { useState, useEffect } from "react";
const baseUrl = "http://localhost:4000/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(baseUrl + url)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
        console.log(`this is from fetch ${data}`);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
