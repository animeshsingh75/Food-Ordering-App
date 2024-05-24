import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img className="logo" src={APP_LOGO} alt="Food Logo" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="header">
      <Title />
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
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
