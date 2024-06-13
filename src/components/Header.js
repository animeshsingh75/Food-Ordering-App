import { APP_LOGO } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import useOnline from "../hooks/useOnline";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Title = () => (
  <Link to="/">
    <img
      className="p-[10px_0_10px_15px] w-[90px] md:w-[80px] sm:w-[70px] xs:w-[55px]"
      src={APP_LOGO}
      alt="Food Fire"
      title="Food Fire"
    />
  </Link>
);

const Header = () => {
  const navigate = useNavigate();

  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  const [isLoggedIn, setIsLoggedIn] = useAuth();

  useEffect(() => {
    if (getLocalStorage === null) {
      setIsLoggedIn(false);
    }
  }, [getLocalStorage]);

  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  function calculateQuantity() {
    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return totalQuantity;
  }
  return (
    <div className="flex justify-between items-center w-screen h-20 md:h-[70px] sm:h-[60px] xs:h-[50px] bg-header-bg rounded-md shadow-[0_7px_5px_-6px_rgba(0,0,0,0.61)] text-text-color font-bold fixed top-0 left-0 z-50 overflow-y-hidden">
      <Title />
      {isLoggedIn && (
        <div className="mds:hidden"> Hi {getLocalStorage?.userName}! </div>
      )}
      <div className="mr-[20px]">
        <ul className="flex list-none items-center justify-between">
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:text-[small]  2xs:text-[x-small] sm:p-1.5 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:text-[small] 2xs:text-[x-small] sm:p-1.5">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:text-[small] 2xs:text-[x-small] sm:p-1.5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:text-[small] 2xs:text-[x-small] sm:p-1.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:text-[small] 2xs:text-[x-small] sm:p-1.5 relative">
            <Link to="/cart">
              <i className="pt-[15%] fa-solid fa-cart-shopping"></i>
              {calculateQuantity() > 0 && (
                <span className="absolute top-[5px] right-[4px]  bg-red-500 text-white rounded-full text-xs sm:text-[x-small] flex items-center justify-center w-[15px] sm:w-[10px] h-[15px] sm:h-[10px] xs:w-[8px] xs:h-[8px]">
                  {calculateQuantity()}
                </span>
              )}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-orange hover:rounded-md hover:cursor-pointer hover:text-white sm:p-1.5">
            {isLoggedIn ? (
              <button
                className="bg-transparent text-light-text-color font-bold cursor-pointer rounded-md 2xs:text-[x-small] sm:text-[small]"
                onClick={() => {
                  clearLocalStorage();
                  setIsLoggedIn(false);
                }}
              >
                Logout
                <span
                  className={
                    isOnline
                      ? "sm:hidden text-light-green"
                      : "sm:hidden text-x-dark-orange"
                  }
                >
                  {" "}
                  ●
                </span>
              </button>
            ) : (
              <button
                className="bg-transparent text-light-text-color font-bold cursor-pointer rounded-md sm:text-[small] 2xs:text-[x-small]"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
                <span
                  className={
                    isOnline
                      ? "sm:hidden text-light-green"
                      : "sm:hidden text-x-dark-orange"
                  }
                >
                  {" "}
                  ●
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
