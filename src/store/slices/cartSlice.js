import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload.map((product) => ({
        ...product,
        quantity: 1, // TODO for now we assume product already selected and quantity = 1
      }));
    },
    incrementCartQuantity: (state, action) => {
      console.log({ action, list: state.list });
      const selectedCartIndex = state.list.findIndex(
        (product) => product.id === action.payload.id
      );
      const cloneList = [...state.list];
      cloneList[selectedCartIndex].quantity += 1;
      console.log({ cloneList });
      state.list = cloneList;
    },
    decrementCartQuantity: (state, action) => {
      const selectedCartIndex = state.list.findIndex(
        (product) => product.id === action.payload.id
      );
      const cloneList = [...state.list];
      cloneList[selectedCartIndex].quantity -= 1;
      state.list = cloneList;
    },
  },
});

export const { setList, incrementCartQuantity, decrementCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
