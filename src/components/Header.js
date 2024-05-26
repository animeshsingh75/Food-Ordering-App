import { APP_LOGO } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import useOnline from "../hooks/useOnline";
import { useEffect } from "react";
const Title = () => (
  <Link to="/">
    <img className="logo" src={APP_LOGO} alt="Food Fire" title="Food Fire" />
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
  return (
    <div className="header">
      <Title />
      {isLoggedIn && (
        <div className="user-name"> Hi {getLocalStorage?.userName}! </div>
      )}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage();
                  setIsLoggedIn(false);
                }}
              >
                Logout
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
                >
                  {" "}
                  ●
                </span>
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
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
