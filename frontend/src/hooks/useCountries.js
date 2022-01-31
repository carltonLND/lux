import { useEffect, useState } from "react";
import Countries from "../util/countries.json";

const getCounties = () => {
  const countries = Countries.map((country) => {
    return country.name;
  });
  return countries;
};

const useCountries = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    const func = async () => {
      setCountries(await getCounties());
    };
    func();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [countries]);

  if (loading) {
    return { loading: true, countries: [] };
  }
  return { loading: false, countries: countries };
};

export default useCountries;
