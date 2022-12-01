import { useEffect, useState } from "react";
import { client } from "../client/client";

export const useNodeHealth = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<boolean | null>();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await client
        .health()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};
