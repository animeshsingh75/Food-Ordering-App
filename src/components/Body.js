import RestaurantCard, { withLabel } from "./RestaurantCard";
import { useState } from "react";
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

  const RestaurantCardWithLabel = withLabel(RestaurantCard);

  console.log(restaurants);
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
    <div className="min-h-[87vh]">
      <div className="mx-auto mt-[110px] mb-5 flex justify-center items-center w-full">
        <input
          type="text"
          className=" w-[30rem] box-border bg-white shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border text-color-text-color text-[large] font-medium pl-3 pr-[15px] py-2 rounded-tl-[5px] rounded-bl-[5px] border-r-0 border-solid border-[#aabcca] focus:border-dark-orange focus:ring-0 focus:outline-none outline:none placeholder-ellipsis"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchText(newValue);
            searchRestaurant(newValue, restaurants);
          }}
        ></input>
        <button
          className=" bg-dark-orange shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] text-white cursor-pointer -ml-1 px-[22px] py-3 rounded-tr-[5px] rounded-br-[5px] border-[none] hover:bg-dark-green outline: none"
          onClick={() => {
            searchRestaurant(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="text-center text-[large] mx-[10] my-5">
          {errorMessage}
        </div>
      )}
      <div className="w-auto flex flex-wrap items-center justify-center self-stretch;">
        {(showFilteredRestaurants === null
          ? filteredRestaurants
          : showFilteredRestaurants
        ).map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant?.info?.veg ? (
                <RestaurantCardWithLabel {...restaurant?.info} />
              ) : (
                <RestaurantCard {...restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
