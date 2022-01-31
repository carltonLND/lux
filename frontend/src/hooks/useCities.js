import { useEffect, useState } from "react";
import Cities from "../util/cities.json";

const getCites = (country) => {
  let cities = Cities.filter((city) => {
    if (city.country_name == country) {
      return city;
    }
  });
  cities = cities.map((city) => city.name);
  return cities;
};

const useCities = (country) => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setLoading(true);
    const func = async () => {
      setCities(await getCites(country));
    };
    func();
  }, [country]);

  useEffect(() => {
    setLoading(false);
  }, [cities]);

  if (loading) {
    return { loading: true, cities: [] };
  }
  return { loading: false, cities: cities };
};

export default useCities;
