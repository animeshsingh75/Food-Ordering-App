import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import "@testing-library/jest-dom";
import menuMockData from "../__mocks__/menuCardMock.json";
import appStore from "../store/appStore";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../components/Login";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(menuMockData);
    },
  });
});

beforeAll(async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
  const nameInput = screen.getByTestId("name");
  const emailInput = screen.getByTestId("email");
  const passwordInput = screen.getByTestId("password");
  const submitButton = screen.getByRole("button", { name: "Login" });
  await act(async () => {
    fireEvent.change(nameInput, { target: { value: "testName" } });
    fireEvent.change(emailInput, { target: { value: "testName@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });
    fireEvent.click(submitButton);
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Veg Pizza (19)");
  fireEvent.click(accordianHeader);
  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  const cartQuantity = screen.getByTestId("cartQuantity");
  expect(cartQuantity.textContent).toBe("1");

  expect(screen.getAllByTestId("menuItems").length).toBe(20);

  const clearCart = screen.getByTestId("clearCart");
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("menuItems").length).toBe(19);
});
