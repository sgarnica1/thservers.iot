import { useEffect, useState } from "react";

function useFetch(endpoint, config, callback) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    function fetchData() {
      fetch(endpoint, config)
        .then((response) => {
          if (response.ok) return response.json();
          console.log(response);
          throw new Error(`Error: Cannot Fetch Due To ${response.statusText}`);
        })
        .then((data) => {
          if (callback) {
            callback(data, setData, setLoading);
            if (isLoading) setLoading(false);
          } else {
            if (isLoading) setLoading(false);
            setData(data);
          }
        })
        .catch((err) => setError(err));
    }
    fetchData();
  }, [callback, endpoint, isLoading]);

  return { isLoading, data, error };
}

export { useFetch };
