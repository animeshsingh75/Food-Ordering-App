import { fireEvent, render, screen } from "@testing-library/react";
import mockData from "../__mocks__/resListMock.json";
import Body from "../components/Body";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

it("Should Search Res Card for pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);
  expect(searchBtn).toBeInTheDocument();

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(4);
});
