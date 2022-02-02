import { useEffect, useState } from "react";

const apiCall = async (url, method, headers, data) => {
  const options = {
    method: method,
    headers: headers || null,
    body: data || null,
  };
  try {
    const result = await fetch(url, options);
    return await result.json();
  } catch {
    return "error making query";
  }
};

const useApiCall = (queryObject) => {
  const { url, method, data, headers } = queryObject;
  const [loading, setLoading] = useState(true);
  const [queryResults, setQueryResults] = useState({});

  useEffect(() => {
    setLoading(true);
    const makeCall = async () => {
      setQueryResults(await apiCall(url, method, headers, data));
    };
    makeCall();
    setLoading(false);
  }, []);

  if (!loading) {
    return { loading: false, data: queryResults };
  }
  return { loading: true,  data: null };
};

export default useApiCall;
