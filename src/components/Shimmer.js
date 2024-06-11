import { SHIMMER_CARD_UNIT, SHIMMER_MENU_CARD_UNIT } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="basis-[250px] shadow-[0_4px_7px_0_rgb(218_220_230_/_60%)] mb-[30px] p-2.5 border-[#d3d5df]">
      <div className="h-36 w-[230px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></div>
      <div className="w-3/5 mt-2.5 h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></div>
      <div className="w-4/5 mt-1 h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px "></div>
      <div className="w-full mt-[18px] h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px "></div>
    </div>
  );
};
export const MenuShimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex justify-center items-center h-[200px] sm:h-[230px] w-full flex-row mt-20 sm:mt-[60px] xs:mt-[50] pl-2.5 bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px">
        <img className="h-36 w-[230px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px" />
        <div className="flex flex-col justify-around basis-[520px] ml-5">
          <h2 className="w-2/5 mt-2.5  h-[15px]bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></h2>
          <p className="w-1/5 mt-1 h-[15px]bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></p>
          <div className="w-3/5 mt-2.5 h-[15px]bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></div>
        </div>
      </div>

      <div>
        <div>
          <div className="mt-5 pt-2.5 px-5">
            {Array(SHIMMER_MENU_CARD_UNIT)
              .fill("")
              .map((element, index) => (
                <div
                  className="flex flex-wrap justify-between items-center w-full shadow-[7px_4px_7px_4px_rgb(218_220_230_/_60%)] mb-5 p-5 rounded-[10px] border-[#d3d5df]"
                  key={index}
                >
                  <div className="w-[438px] mds:w-[25em] sm:w-[18em] xs:w-[16em] 2xs:w-[15em]">
                    <h3 className="w-2/5 mt-2.5 h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></h3>
                    <p className="w-1/5 mt-1 h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px">
                      {" "}
                    </p>
                    <p className="w-3/5 mt-2.5 h-[15px] bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px"></p>
                  </div>
                  <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                    <img className="w-[118px] h-24 bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px" />
                    <div className="w-[94px] h-[34px] mt-2.5 bg-[#777] animate-shimmer bg-gradient-shimmer bg-1000px">
                      {" "}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-[25px] justify-center  mb-0 mx-auto mt-[180px] mds:mt-[160px] md:mt-[140px] xs:mt-[125px]">
      {new Array(SHIMMER_CARD_UNIT).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
