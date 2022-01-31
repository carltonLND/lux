import { useEffect, useState } from "react";

const apiCall = async (url, method, headers, data) => {
  const options = {
    method: method,
    headers: headers || null,
    body: data || null,
  };
  console.log(options);
  try {
    const result = await fetch(url, options);
    console.log(result);
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
    return queryResults;
  }
  return { status: "loadings" };
};

export default useApiCall;
