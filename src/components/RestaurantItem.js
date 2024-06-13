import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/Helper";
import { MENU_IMG_CDN_URL } from "../utils/constants";
import { useContext, useState } from "react";
import {
  addItem,
  clearCart,
  editItem,
  removeItem,
} from "../store/slices/cartSlice";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import RestaurantContext from "../utils/RestaurantContext";
import DialogBox from "./DialogBox";

const RestaurantItems = ({ menuItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const restaurantId = useContext(RestaurantContext);
  const cart = useSelector((store) => store.cart);
  const [quantity, setQuantity] = useState(menuItem.quantity || 0);

  const updateItemQuantity = (increment) => {
    if (!isLoggedIn) {
      console.log("Login");
      navigate("/login", {
        state: {
          showMessage: true,
          message: "Please login before you can add items to the cart",
        },
      });
      return;
    }
    if (
      restaurantId.restaurauntId != cart.currentRestaurantId?.restaurauntId &&
      cart.items.length > 0
    ) {
      setDialogOpen(true);
      return;
    }
    const updatedQuantity = quantity + increment;
    setQuantity(updatedQuantity);

    const itemExists = cart.items.some((item) => item.id === menuItem.id);

    if (!itemExists && updatedQuantity > 0) {
      console.log("Add");
      const itemWithQuantity = {
        ...menuItem,
        quantity: updatedQuantity,
      };
      dispatch(addItem({ item: itemWithQuantity, restaurantId: restaurantId }));
    } else if (updatedQuantity > 0) {
      console.log("Edit");
      dispatch(
        editItem({
          id: menuItem.id,
          changes: { quantity: updatedQuantity },
        })
      );
    } else {
      console.log("Remove");
      dispatch(removeItem(menuItem.id));
    }
    console.log(cart.items.length);
  };

  const handleAddItem = () => updateItemQuantity(1);
  const handleRemoveItem = () => updateItemQuantity(-1);

  return (
    <>
      <div className=" flex sm:flex-wrap justify-between max-h-[250px] p-5 border-b-[rgba(40,44,63,0.45] border-b-[63,0.45)_0.5px_solid]">
        <div className="flex flex-col self-start overflow-hidden h-auto">
          <h3 className="w-3/5 text-light-text-color">{menuItem?.name}</h3>
          <p className="text-base font-normal text-[#3e4152] w-[inherit] mt-1">
            {menuItem?.price
              ? formatPrice(menuItem?.price)
              : formatPrice(menuItem?.defaultPrice)}
          </p>
          <p className="leading-[1.3] text-[rgba(40,44,63,0.45)] w-[inherit] tracking-[-0.3px] text-base mt-3.5">
            {menuItem?.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-end w-[300px] overflow-hidden h-auto sm:items-start sm:justify-center sm:pt-5">
          {menuItem.imageId && (
            <img
              className="h-[100px] w-[100px] rounded-[5px]"
              src={MENU_IMG_CDN_URL + menuItem?.imageId}
              alt={menuItem?.name}
            />
          )}
          {quantity > 0 ? (
            <div className="flex items-center mt-[5px]">
              <button
                className="bg-orange text-text-color cursor-pointer border-dark-orange rounded-full w-[35px] h-[35px]"
                onClick={handleRemoveItem}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="bg-orange text-text-color cursor-pointer border-dark-orange rounded-full w-[35px] h-[35px]"
                onClick={handleAddItem}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-orange text-text-color cursor-pointer border-dark-orange mt-2.5 px-[25px] py-2 rounded-[5px] outline: none"
              onClick={handleAddItem}
            >
              ADD +
            </button>
          )}
        </div>
      </div>
      <DialogBox
        isOpen={isDialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        onConfirm={() => {
          dispatch(clearCart());
          setDialogOpen(false);
          const itemWithQuantity = {
            ...menuItem,
            quantity: 1,
          };
          dispatch(
            addItem({ item: itemWithQuantity, restaurantId: restaurantId })
          );
          setQuantity(1);
        }}
        title="Change Restaurant"
        message="Adding this item will remove all existing items from the cart from another restaurant. Proceed?"
      />
    </>
  );
};

export default RestaurantItems;
