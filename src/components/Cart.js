import { useDispatch, useSelector } from "react-redux";
import RestaurantItems from "./RestaurantItem";
import { BsCartX } from "react-icons/bs";
import { clearCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  function calculateTotal() {
    const totalAmount = cartItems.reduce(
      (total, item) =>
        total +
        (item?.price ? item.price / 100 : item.defaultPrice / 100) *
          item.quantity,
      0
    );

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(totalAmount);
  }
  function calculateQuantity() {
    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return totalQuantity;
  }
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg mx-[20px] mt-[90px] md:mt-[90px] xs:mt-[70px] sm:mt-[80px] md:mb-[15px] mb-5 flex flex-col items-start md:items-center justify-center p-5">
      {calculateQuantity() > 0 ? (
        <>
          <div className="w-full">
            <div className="mb-5 flex flex-wrap justify-between">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <p className="text-md mt-2">
                  Items in Cart: {calculateQuantity()}
                </p>
              </div>
              <button
                data-testid="clearCart"
                className="bg-blue-500 text-white font-bold px-[10px] flex items-center justify-center rounded hover:bg-blue-600 transition-colors duration-300 h-12"
                onClick={() => dispatch(clearCart())}
              >
                <BsCartX />
                <span className="ml-[5px]">Clear Cart</span>
              </button>
            </div>
            <div className="shadow-lg rounded-lg bg-white p-5 ">
              {cartItems.map((item, index) => (
                <div key={index}>
                  <RestaurantItems key={index} menuItem={item} />
                  {index < cartItems.length - 1 && (
                    <hr className=" mx-auto my-4 bg-gray-50 h-[1px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="shadow-lg rounded-lg w-full mt-10 p-5 bg-white flex flex-col items-center">
            <h2 className="text-xl font-semibold">Payment Details</h2>
            <div className="mt-5 w-full">
              <h3 className="text-lg">
                Total Amount:{" "}
                <span className="font-semibold">{calculateTotal()}</span>
              </h3>
              <button
                className="mt-5 w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors duration-300"
                onClick={() => {
                  dispatch(clearCart());
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-center w-full">
          Cart is Empty. Add items to the cart.
        </h1>
      )}
    </div>
  );
};

export default Cart;
