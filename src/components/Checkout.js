import { Link } from "react-router-dom";
import animationData from "../assets/payment_sucessful.json";
import Lottie from "lottie-react";

const Checkout = () => {
  return (
    <div className="mx-auto md:mt-[90px] xs:mt-[70px] sm:mt-[80px] mt-[110px] sm:mb-[0px] md:mb-[15px] mb-5 flex flex-col items-center">
      <h1 className="text-[46px] font-bold text-center">
        Payment Successful!! 🎉🎉
      </h1>
      <Lottie animationData={animationData} className="w-[200px] h-[200px]" />
      <h3 className="p-5">
        <Link
          to="/"
          className="no-underline bg-dark-orange text-white px-[15px] py-2.5 rounded-[5px] hover:bg-dark-green"
        >
          Back Home
        </Link>
      </h3>
    </div>
  );
};
export default Checkout;
