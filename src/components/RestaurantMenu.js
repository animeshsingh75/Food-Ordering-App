import { MENU_IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useState } from "react";
import { formatPrice } from "../utils/Helper";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, categorizedMenuItems] = useRestaurantMenu(resId);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    const isExpanded = expandedCategory === category;
    setExpandedCategory(isExpanded ? null : category);
  };
  return resInfo === null && Object.keys(categorizedMenuItems).length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <RestaurantDetails resInfo={resInfo} />
      <RestaurantCategories
        categorizedMenuItems={categorizedMenuItems}
        expandedCategory={expandedCategory}
        toggleCategory={toggleCategory}
      />
    </div>
  );
};
export default RestaurantMenu;
