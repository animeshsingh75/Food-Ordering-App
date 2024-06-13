import RestaurantItems from "./RestaurantItem";

const RestaurantMenuCategories = ({
  categorizedMenuItems,
  expandedCategory,
  toggleCategory,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      {Object.keys(categorizedMenuItems).map((category) => (
        <div
          key={category}
          className="w-full max-w-[850px] shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-white mb-5 rounded-[5px]"
        >
          <div
            className="cursor-pointer p-5"
            onClick={() => toggleCategory(category)}
          >
            <div className="flex justify-between">
              <h3 className="text-light-text-color">
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
            <div className="flex flex-col justify-center">
              {categorizedMenuItems[category].map((item, index) => {
                return <RestaurantItems key={index} menuItem={item} />;
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCategories;
