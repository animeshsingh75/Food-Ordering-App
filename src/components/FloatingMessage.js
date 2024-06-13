import React, { useState, useEffect } from "react";

const FloatingMessage = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // The message will disappear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-5 py-2.5 rounded-lg shadow-md text-base z-50">
      {message}
    </div>
  );
};

export default FloatingMessage;
