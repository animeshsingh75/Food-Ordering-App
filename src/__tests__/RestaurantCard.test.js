import { render, screen } from "@testing-library/react";
import RestaurantCard, { withLabel } from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import mockData from "../__mocks__/resCardMock.json";

it("Should render RestaurantCard components with props Data", () => {
  render(<RestaurantCard {...mockData} />);
  expect(screen.getByText(mockData.name)).toBeInTheDocument();
});

it("Should RestaurantCardWithLabel with label and RestaurantCard  with props Data", () => {
  const RestaurantCardWithLabel = withLabel(RestaurantCard);

  render(<RestaurantCardWithLabel {...mockData} />);

  const label = screen.getByText("Vegetarian");
  expect(label).toBeInTheDocument();

  expect(screen.getByText(mockData.name)).toBeInTheDocument();
});
