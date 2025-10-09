import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('../AppData.json')
      .then(res => {

        setTimeout(() => {
          setApps(res.data);
          setLoading(false);
        }, 800);
      })
      .catch(err => {
        setTimeout(() => {
          setError(err);
          setLoading(false);
        }, 800);
      });
  }, []);

  return { apps, loading, error };
};

export default useApps;
