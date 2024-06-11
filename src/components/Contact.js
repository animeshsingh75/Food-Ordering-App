import React, { useState } from "react";
import contactUs from "../assets/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex flex-col overflow-y-hidden mt-[60px] mb-5 mx-auto">
      <div className="flex flex-row flex-nowrap justify-evenly items-center mt-[60px] mb-5 mx-auto md:flex-col">
        <div className="flex justify-center items-center">
          <img
            src={contactUs}
            alt="Contact Us"
            className="w-[300px] sm:w-[200px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-[x-large]">
          <h1 className="text-light-text-title">Contact us</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="md:min-w-[60vw] focus:border-orange focus:ring-0 focus:outline-none 1px outset  box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-dark-orange min-w-[40vw] m-2.5 p-2.5 rounded-[5px] border-solid"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="md:min-w-[60vw] focus:border-orange focus:ring-0 focus:outline-none 1px outset box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-dark-orange min-w-[40vw] m-2.5 p-2.5 rounded-[5px] border-solid"
            />
            <textarea
              placeholder="Type your Message here..."
              required
              className="md:min-w-[60vw] focus:border-orange focus:ring-0 focus:outline-none 1px outset box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-dark-orange min-w-[40vw] m-2.5 p-2.5 rounded-[5px] border-solid"
            ></textarea>
            <button
              type="submit"
              className="bg-dark-orange shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] text-footer-bg text-[large] cursor-pointer m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-orange"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {message && (
        <div className="flex justify-center items-center w-full">
          <span className="text-text-color font-[bold] text-center text-[1.2em]">
            Thanks for contacting FoodFire, We will reply ASAP.
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
