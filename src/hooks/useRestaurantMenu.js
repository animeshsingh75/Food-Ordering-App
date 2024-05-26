import { useEffect, useState } from "react";
import {
  MENU_API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
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
  return [resInfo, menuItems];
};

export default useRestaurantMenu;
