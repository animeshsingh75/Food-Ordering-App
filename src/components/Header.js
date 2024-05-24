import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
const Title = () => (
  <a href="/">
    <img className="logo" src={APP_LOGO} alt="Food Logo" />
  </a>
);
const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button
              className={loginBtnName === "Login" ? "login-btn" : "logout-btn"}
              onClick={() => {
                loginBtnName === "Login"
                  ? setLoginBtnName("Logout")
                  : setLoginBtnName("Login");
              }}
            >
              {loginBtnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
