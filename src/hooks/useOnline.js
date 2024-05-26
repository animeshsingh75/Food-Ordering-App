import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const onlineFun = () => setIsOnline(true);
    const offlineFun = () => setIsOnline(false);

    window.addEventListener("online", onlineFun);
    window.addEventListener("offline", offlineFun);

    return () => {
      window.removeEventListener("online", onlineFun);
      window.removeEventListener("offline", offlineFun);
    };
  }, []);
  return isOnline;
};

export default useOnline;
