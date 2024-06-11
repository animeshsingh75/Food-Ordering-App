import { useState } from "react";
import burgerImage from "../assets/burgerImage.png";
import { Link, Outlet } from "react-router-dom";
const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="text-center mt-[120px] md:mt-[90px] sm:mt-[80px] xs:mt-[70px] mb-0 mx-auto">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="bg-orange text-white cursor-pointer text-[large] font-[bold] px-[15px] py-2.5 rounded-[5px] border-[none] hover:bg-dark-green"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="bg-orange text-white cursor-pointer text-[large] font-[bold] px-[15px] py-2.5 rounded-[5px] border-[none] hover:bg-dark-green"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap justify-evenly items-center mt-[50px] mb-2.5 mx-[25px]">
        <div className="flex flex-wrap flex-col overflow-y-hidden">
          <h1 className="2xs:text-[22px] xs:text-[25px] sm:text-[35px] xl:text-[45px] 2xl:text-[50px] text-[70px] text-light-text-color">
            {" "}
            Welcome to <br /> The world of <br />{" "}
            <span className="bg-orange text-light-white-text px-2.5 py-0 rounded-[15px] ">
              Tasty & Fresh Food
            </span>
          </h1>
          <h4 className="2xs:text-[8px] xs:text-[10px] sm:text-[12px] xl:text-[18px] 2xl:text-[20px] text-[25px] italic text-light-text-color pt-2.5">
            "Better you will feel if you eat a Food
            <span className="text-dark-orange">Fire</span> healthy meal"
          </h4>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center overflow-y-hidden">
          <img
            src={burgerImage}
            alt="Food Image"
            className="2xs:w-[170px] xs:w-[220px] sm:w-[250px] md:w-[300px] lg:mt-[10px] xl:w-[330px] 2xl:w-[380px] w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
