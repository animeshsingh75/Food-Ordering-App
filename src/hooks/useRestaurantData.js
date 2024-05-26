import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants";

const useRestaurantData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(RESTAURANT_API_URL);
      if (!data.ok) {
        const error = data.status;
        throw new Error(error);
      } else {
        const json = await data.json();
        const resData =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return [restaurants, filteredRestaurants];
};

export default useRestaurantData;
