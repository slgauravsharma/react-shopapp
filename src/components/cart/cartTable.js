import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const IncDesBox = ({ product, onIncrement, onDecrement }) => {
  return (
    <div className="d-flex text-center">
      <Button
        className="inc-desc-action text-dark"
        onClick={() => onDecrement(product)}
        disabled={!product.quantity}
      >
        -
      </Button>
      <Button className="inc-desc-text text-dark">{product.quantity}</Button>
      <Button
        className="inc-desc-action text-dark"
        onClick={() => onIncrement(product)}
      >
        +
      </Button>
    </div>
  );
};

const ProductItem = ({ product }) => {
  return (
    <div className="d-flex">
      <div className="mr-2">
        <img className="product-image" src={product.imageUrl} alt="product" />
      </div>
      <div className="text-start ml-4">
        <div className="text-dark font-weight-bold">{product.name}</div>
        <div className="mt-1">{`Size : ${product.size}`}</div>
        <div className="mt-1">{`Color : ${product.color}`}</div>
      </div>
    </div>
  );
};

const CartItem = ({ product, hideBorder, onIncrement, onDecrement }) => {
  return (
    <div>
      <Row className={hideBorder ? "" : "border-bottom"}>
        <Col className="text-center">
          <h6 className="py-2 pt-3">
            <ProductItem product={product} />
          </h6>
        </Col>
        <Col className="text-center text-dark font-weight-bold cart-col">
          <h6>{`$${product.price.toFixed(2)}`}</h6>
        </Col>
        <Col className="text-center cart-col d-flex justify-content-center">
          <IncDesBox
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            product={product}
          />
        </Col>
        <Col className="text-center text-dark font-weight-bold cart-col">
          <h6>{`$ ${product.price * product.quantity}`}</h6>
        </Col>
      </Row>
    </div>
  );
};

const CartTable = ({ list = [], onIncrement, onDecrement }) => {
  return (
    <Container>
      <div classmName="list-group">
        <li className="py-2 list-group-item list-group-item-secondary">
          <Row>
            <Col className="text-center">
              <h6 className="py-2 pt-3">Product</h6>
            </Col>
            <Col className="text-center">
              <h6 className="py-2 pt-3">Price</h6>
            </Col>
            <Col className="text-center">
              <h6 className="py-2 pt-3">Quality</h6>
            </Col>
            <Col className="text-center">
              <h6 className="py-2 pt-3">Total</h6>
            </Col>
          </Row>
        </li>
        <li className="list-group-item list-group-item-light cart-list-height">
          {list.map((item, index) => (
            <CartItem
              key={item.id}
              hideBorder={list.length - 1 === index}
              product={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </li>
      </div>
    </Container>
  );
};

export default CartTable;
