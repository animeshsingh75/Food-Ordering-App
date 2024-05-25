//Menu Items and Restaurant Image CDN Base Url
const CDN_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

//Menu Items and Restaurant API Base Url
const API_BASE_URL = "https://foodfire.onrender.com/api/";

//Restaurant API Url
export const RESTAURANT_API_URL =
  API_BASE_URL +
  "restaurants?lat=28.5961&lng=77.3683&page_type=DESKTOP_WEB_LISTING";

//Menu Items API Url
export const MENU_API_URL =
  API_BASE_URL +
  "menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.5961&lng=77.3683&submitAction=ENTER&restaurantId=";

//Logo Image URL
export const APP_LOGO =
  "https://foodfire-app.netlify.app/foodFireLogo.adc19524.png";

//Restaurant Image CDN URL
export const RESTAURANT_IMG_CDN_URL =
  CDN_BASE_URL + "/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

//Menu Items Image CDN URL
export const MENU_IMG_CDN_URL =
  CDN_BASE_URL + "/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

//Shimmer Constants
export const SHIMMER_CARD_UNIT = 20;
export const SHIMMER_MENU_CARD_UNIT = 4;

//Github Details
export const GITHUB_USERNAME = "animeshsingh75";
export const GITHUB_REPO_NAME = "Food-Ordering-App";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const LINKEDIN_URL = "https://www.linkedin.com/in/animeshsingh75/";
export const X_URL = "https://x.com/animeshsingh75";
export const GITHUB_URL = "https://github.com/animeshsingh75";
export const EMAIL = "mailto:animeshsingh75@gmail.com";

//Menu Items Type Key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
