import { formatPrice } from "../utils/Helper";
import { MENU_IMG_CDN_URL } from "../utils/constants";

const RestaurantCategories = ({
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
              {categorizedMenuItems[category].map((item) => (
                <div
                  className="flex justify-between max-h-[250px] p-5 border-b-[rgba(40,44,63,0.45] border-b-[63,0.45)_0.5px_solid]"
                  key={item.id}
                >
                  <div className="flex flex-col self-start overflow-hidden h-auto;">
                    <h3 className="w-3/5 text-light-text-color">
                      {item?.name}
                    </h3>
                    <p className="text-base font-normal text-[#3e4152] w-[inherit] mt-1">
                      {item?.price
                        ? formatPrice(item?.price)
                        : formatPrice(item?.defaultPrice)}
                    </p>
                    <p className="leading-[1.3] text-[rgba(40,44,63,0.45)] w-[inherit] tracking-[-0.3px] text-base mt-3.5">
                      {item?.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-end w-[300px] overflow-hidden h-auto">
                    {item.imageId && (
                      <img
                        className="h-[100px] w-[100px] rounded-[5px]"
                        src={MENU_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button className="bg-orange text-text-color cursor-pointer border-dark-orange mt-2.5 px-[25px] py-2 rounded-[5px] outline: none">
                      ADD +
                    </button>
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
