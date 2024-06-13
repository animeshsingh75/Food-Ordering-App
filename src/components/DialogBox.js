import React, { useEffect } from "react";

const DialogBox = ({ isOpen, title, message, onClose, onConfirm }) => {
  if (!isOpen) return null;

  // Handle click outside
  const handleBackdropClick = (event) => {
    if (event.target.id === "backdrop") {
      onClose();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      id="backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white p-5 rounded-md max-w-lg w-full shadow-md">
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <p className="text-center mt-[5px]">{message}</p>
        <div className="flex justify-between mt-5">
          <button className="mr-2 text-blue-500" onClick={onClose}>
            Cancel
          </button>
          <button
            className=" bg-blue-500 text-white font-bold py-3 px-3 rounded hover:bg-blue-600 transition-colors duration-300 "
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
