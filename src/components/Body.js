import { RESTAURANT_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(RESTAURANT_API_URL);
      const json = await data.json();
      const resData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
  const searchRestaurant = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredRestaurants = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredRestaurants);
      setErrorMessage("");
      if (filteredRestaurants?.length === 0) {
        setFilteredRestaurants([]);
        setErrorMessage(
          "Sorry, we couldn't find any results for " + searchText
        );
      }
    } else {
      setFilteredRestaurants(restaurants);
      setErrorMessage("");
    }
  };
  if (!restaurants) return null;
  return restaurants.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchText(newValue);
            searchRestaurant(newValue, restaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            searchRestaurant(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
