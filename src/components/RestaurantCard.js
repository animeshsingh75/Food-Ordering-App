import { RESTAURANT_IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="w-60 shadow-[-1px_5px_10px_5px_rgba(112,112,112,0.2)] cursor-pointer m-5 p-2.5 rounded-[5px] hover:scale-[0.98]">
      <img
        className="w-full rounded-[10px]"
        src={RESTAURANT_IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-light-text-title whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h3>
      <h5 className="font-[lighter] whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-[lighter] whitespace-nowrap overflow-hidden text-ellipsis">
        {areaName}
      </h5>
      <span className="flex justify-between text-center mt-2">
        <h4
          className={`flex items-center mt-[5px] p-[5px] rounded-[5px] text-[white] ${
            avgRatingString < 4
              ? "bg-light-red"
              : avgRatingString === "--"
              ? "bg-white text-black"
              : "bg-light-green"
          }`}
        >
          <i className="text-[10px] pl-0 pr-[5px] pt-0.5 pb-[3px] fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4 className="font-[bolder] text-sm text--light-text-title mt-2.5 px-0.5 py-0">
          •
        </h4>
        <h4 className="font-[bolder] text-sm text--light-text-title mt-2.5 px-0.5 py-0">
          {sla?.lastMileTravelString ?? "5.0 km"}
        </h4>
        <h4 className="font-[bolder] text-sm text--light-text-title mt-2.5 px-0.5 py-0">
          •
        </h4>
        <h4 className="font-[bolder] text-sm text--light-text-title mt-2.5 px-0.5 py-0">
          {costForTwo ?? "₹100 for two"}
        </h4>
      </span>
    </div>
  );
};

export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-[rgba(0,0,0,0.8)] text-[white] text-[0.75em] z-[2] px-2.5 py-[5px] rounded-[5px] left-[13px] top-[23px]">
          Vegetarian
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
