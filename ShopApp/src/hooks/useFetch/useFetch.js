import { useEffect, useState } from "react";
import axios from "axios";
import Add from "../../Pages/Add/Add";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: responseData } = await axios.get(url); //gelen response'dan datayı parçala ,productData adını ver
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { error, loading, data, setData };
}
