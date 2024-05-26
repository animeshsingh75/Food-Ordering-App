import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [getLocalStorage] = useLocalStorage("user");

  const [isLoggedIn, setIsLoggedIn] = useState(
    getLocalStorage?.token?.length === 100 ? true : false
  );

  return [isLoggedIn, setIsLoggedIn];
};

export default useAuth;
