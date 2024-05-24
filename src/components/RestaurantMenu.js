import { useEffect, useState } from "react";
import {
  IMG_CDN_URL,
  MENU_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer, { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  async function fetchMenu() {
    try {
      const menu = await fetch(MENU_API_URL + resId);
      const json = await menu.json();
      const restaurantDetails = json?.data.cards
        .map((card) => card.card)
        .find((card) => card && card.card["@type"] === RESTAURANT_TYPE_KEY)
        ?.card?.info;
      setResInfo(restaurantDetails);
      const menuItems =
        json?.data.cards
          .find((card) => card.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (card) => card?.card?.card
          )
          .filter((card) => card["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((card) => card.itemCards)
          .flat()
          .map((item) => item.card?.info) || [];
      const uniqueMenuItems = [];
      menuItems.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setResInfo(null);
      setMenuItems([]);
      console.log(error);
    }
  }
  return !resInfo ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + resInfo?.cloudinaryImageId}
          alt={resInfo?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{resInfo?.name}</h2>
          <p className="restaurant-tags">{resInfo?.cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                resInfo?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : resInfo?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{resInfo?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{resInfo?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{resInfo?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item.imageId && (
                    <img
                      className="menu-item-img"
                      src={IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn">ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
