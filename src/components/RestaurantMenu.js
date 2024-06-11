import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useState } from "react";
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
    <div className="min-h-[80vh] w-auto sm:mt-[60px] xs:mt-[50px] mt-20">
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
