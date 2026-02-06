import { useEffect, useState } from "react";
import { ApiContext } from "./contexts";
import axios from "axios";

export default function ApiProvider({ children }) {
  const apiBaseUrl = "http://localhost:6060/api/v1";
  const [generalData, setGeneralData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeneralData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiBaseUrl}/attendee/generalAnalytics`,
        );
        setGeneralData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGeneralData();
  }, []);

  return (
    <ApiContext.Provider value={{ generalData, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
}
