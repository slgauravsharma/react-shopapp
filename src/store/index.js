import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import myJugTourSlice from "./slices/myJugTourSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    myJugTour: myJugTourSlice,
  },
});
