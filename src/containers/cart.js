import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import CartTable from "../components/cart/cartTable";
import { fetchCartService } from "../services/cartService";
import {
  incrementCartQuantity,
  decrementCartQuantity,
} from "../store/slices/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!list.length) dispatch(fetchCartService());
  }, [dispatch]);

  const onIncrement = (product) => {
    dispatch(incrementCartQuantity(product));
  };

  const onDecrement = (product) => {
    dispatch(decrementCartQuantity(product));
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-10">
          <h1 className="mr-4">Your Bag </h1>
          <h6 className="py-4">{`${list.length} item`}</h6>
        </div>
        <a href="#/" className="text-muted cursor-pointer">
          Continue Shopping
        </a>
      </div>
      <CartTable
        list={list}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </Container>
  );
};

export default CartContainer;
