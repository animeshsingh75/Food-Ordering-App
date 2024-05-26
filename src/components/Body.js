import { RESTAURANT_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import useRestaurantData from "../hooks/useRestaurantData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../hooks/useOnline";
import UserOffline from "./UserOffline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [restaurants, filteredRestaurants] = useRestaurantData();

  const [showFilteredRestaurants, setShowFilteredRestaurants] = useState(null);

  const isOnline = useOnline();

  if (!isOnline) {
    return <UserOffline />;
  }

  const searchRestaurant = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredRestaurants = filterData(searchText, restaurants);
      setShowFilteredRestaurants(filteredRestaurants);
      setErrorMessage("");
      if (filteredRestaurants?.length === 0) {
        setShowFilteredRestaurants([]);
        setErrorMessage(
          "Sorry, we couldn't find any results for " + searchText
        );
      }
    } else {
      setShowFilteredRestaurants(restaurants);
      setErrorMessage("");
    }
  };
  if (!restaurants) return null;

  return restaurants.length === 0 && filteredRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
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
      <div className="restaurant-list">
        {(showFilteredRestaurants === null
          ? filteredRestaurants
          : showFilteredRestaurants
        ).map((restaurant) => {
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
    </div>
  );
};

export default Body;
