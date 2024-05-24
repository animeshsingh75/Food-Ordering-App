const CDN_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const API_BASE_URL = "https://foodfire.onrender.com/api/";
export const APP_LOGO =
  "https://foodfire-app.netlify.app/foodFireLogo.adc19524.png";
export const IMG_CDN_URL =
  CDN_BASE_URL + "/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RESTAURANT_API_URL =
  API_BASE_URL +
  "restaurants?lat=28.5961&lng=77.3683&page_type=DESKTOP_WEB_LISTING";

export const MENU_API_URL =
  API_BASE_URL +
  "menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.5961&lng=77.3683&submitAction=ENTER&restaurantId=";

export const SHIMMER_CARD_UNIT = 20;
export const SHIMMER_MENU_CARD_UNIT = 4;

export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
