import { MENU_IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, menuItems] = useRestaurantMenu(resId);
  return resInfo === null && menuItems.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={MENU_IMG_CDN_URL + resInfo?.cloudinaryImageId}
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
                      src={MENU_IMG_CDN_URL + item?.imageId}
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
