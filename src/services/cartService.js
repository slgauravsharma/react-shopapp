import mockProductsList from "../mock/products.json";
import { setList } from "../store/slices/cartSlice";

export const fetchCartService = () => (dispatch) => {
  // real: fetch data from api (currently mock response)
  dispatch(setList(mockProductsList));
};
