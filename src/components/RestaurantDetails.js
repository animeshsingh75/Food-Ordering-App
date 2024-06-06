import { MENU_IMG_CDN_URL } from "../utils/constants";

const RestaurantDetails = ({ resInfo }) => {
  return (
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
  );
};

export default RestaurantDetails;
