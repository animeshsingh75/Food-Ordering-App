import { useEffect, useState } from "react";
import {
  MENU_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  function processRestaurantData(json) {
    const restaurantDetails = json?.data.cards
      .map((card) => card.card)
      .find((card) => card && card.card["@type"] === RESTAURANT_TYPE_KEY)
      ?.card?.info;

    return restaurantDetails;
  }

  function processMenuItems(json) {
    const items =
      json?.data.cards
        .find((card) => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (card) => card?.card?.card
        )
        .filter((card) => card["@type"] === MENU_ITEM_TYPE_KEY)
        ?.map((card) => card.itemCards)
        .flat()
        .map((item) => item.card?.info) || [];
    const categories = {};
    items.forEach((item) => {
      const category = item.category || "Others";
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(item);
    });
    return categories;
  }
  async function fetchMenu() {
    try {
      const menu = await fetch(MENU_API_URL + resId);
      const json = await menu.json();

      const restaurantData = processRestaurantData(json);
      setResInfo(restaurantData);
      const categorizedItems = processMenuItems(json);
      setMenuItems(categorizedItems);
    } catch (error) {
      setResInfo(null);
      setMenuItems({});
      console.log(error);
    }
  }
  return [resInfo, menuItems];
};

export default useRestaurantMenu;
