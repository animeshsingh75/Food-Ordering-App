import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    currentRestaurantId: null,
  },
  reducers: {
    addItem: (state, action) => {
      const { item, restaurantId } = action.payload;
      if (state.currentRestaurantId === null) {
        state.currentRestaurantId = restaurantId;
      }
      state.items.push(item);
    },
    editItem: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...changes };
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.items.length === 0) state.currentRestaurantId = null;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.currentRestaurantId = null;
    },
  },
});
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
