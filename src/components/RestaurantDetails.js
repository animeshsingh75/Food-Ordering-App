import { MENU_IMG_CDN_URL } from "../utils/constants";

const RestaurantDetails = ({ resInfo }) => {
  return (
    <div className="lg:pl-[20px] flex sm:h-[230px] h-[200px] justify-center items-center bg-light-black text-light-white-text overflow-y-hidden">
      <img
        className="w-[220px] h-[170px] ml-[10px] rounded-[5px]"
        src={MENU_IMG_CDN_URL + resInfo?.cloudinaryImageId}
        alt={resInfo?.name}
      />
      <div className="flex flex-col basis-[520px] m-[20px]">
        <h2 className="text-[40px] max-w-[540px] font-light">
          {resInfo?.name}
        </h2>
        <p className="whitespace-nowrap text-inherit opacity-70 text-[15px] max-w-[540px]">
          {resInfo?.cuisines.join(", ")}
        </p>
        <div className="flex justify-between items-center text-xs text-inherit font-semibold  max-w-[340px] mt-[18px] pb-2.5 sm:flex-wrap sm:justify-start">
          <div
            className={`flex items-center mt-[5px] p-[5px] rounded-[5px] text-[white] ${
              resInfo?.avgRating < 4
                ? "bg-light-red"
                : resInfo?.avgRating === "--"
                ? "bg-white text-black"
                : "bg-dark-green"
            }`}
          >
            <i className="fa-solid fa-star"></i>
            <span>{resInfo?.avgRating}</span>
          </div>
          <div className=" sm:px-5 sm:py-0">|</div>
          <div>{resInfo?.sla?.slaString}</div>
          <div className="sm:px-5 sm:py-0">|</div>
          <div>{resInfo?.costForTwoMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
