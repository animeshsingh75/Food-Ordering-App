import { formatPrice } from "../utils/Helper";
import { MENU_IMG_CDN_URL } from "../utils/constants";

const RestaurantCategories = ({
  categorizedMenuItems,
  expandedCategory,
  toggleCategory,
}) => {
  return (
    <div className="restaurant-menu-content">
      {Object.keys(categorizedMenuItems).map((category) => (
        <div key={category} className="menu-items-container">
          <div
            className="menu-title-wrap"
            onClick={() => toggleCategory(category)}
          >
            <div className="menu-title-wrap-with-icon">
              <h3 className="menu-title">
                {category} ({categorizedMenuItems[category]?.length})
              </h3>
              <i
                className={`fa-solid ${
                  expandedCategory === category
                    ? "fa-angle-up"
                    : "fa-angle-down"
                }`}
              ></i>
            </div>
          </div>
          {expandedCategory === category && (
            <div className="menu-items-list">
              {categorizedMenuItems[category].map((item) => (
                <div className="menu-item" key={item.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price
                        ? formatPrice(item?.price)
                        : formatPrice(item?.defaultPrice)}
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
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategories;
