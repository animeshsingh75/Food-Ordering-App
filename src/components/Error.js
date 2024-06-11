import React from "react";
import errorImage from "../assets/errorImage.jpg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="bg-body-bg flex flex-col justify-center items-center h-screen w-auto">
      <img src={errorImage} alt="Error Image" className="h-auto w-[80%]" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="px-0 py-2.5">{err.data}</h3>
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

export default Error;
