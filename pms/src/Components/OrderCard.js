import React, { useState, useRef, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductTile from "./ProductTile";
import { Input } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import { deleteInStoreOrder, deleteOnlineOrder } from "../states/orderSlice";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
function OrderCard({
  products = [],
  status,
  date,
  time,
  orderId,
  total,
  method = "online",
  shipping_fees = null,
  shipping_address = null,
  userId = null, //
}) {
  const [expanded, setExpanded] = useState(false);
  const bodyRef = useRef(null);
  const dispatch = useDispatch();
  const { itemLoading } = useSelector((state) => state.orderReducer);
  const handleDeleteOrder = () => {
    if (method === "Storely") dispatch(deleteInStoreOrder(orderId));
    else dispatch(deleteOnlineOrder(orderId));
  };
  const navigate = useNavigate();
  useEffect(() => {}, [itemLoading]);

  useEffect(() => {
    const cardBody = bodyRef.current;
    const height = cardBody.scrollHeight + "px";
    if (expanded) {
      cardBody.style.height = height;
    } else {
      cardBody.style.height = "100px";
    }
  }, [expanded]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className="rounded p-2 ">
      <Card className="border-primary bg-light">
        <Card.Header className="text-center bg-light border-info">
          <Row>
            <Col md={1}>{orderId}</Col>
            <Col md={3}>{`${date}@${time}`}</Col>
            <Col>Total: {total}</Col>
            <Col>{status}</Col>
            <Col>Fees: {shipping_fees}</Col>
            <Col>mehtod: {method}</Col>
            <Col md={1}>
            
              <span>
                <i
                  className={`far fa-trash-alt ${
                    status === "Review" || status === "Progressing"
                      ? "link-danger"
                      : "disabled"
                  } text-2xl `}
                  onClick={() => {
                    if (status === "Review" || status === "Progressing") {
                      handleDeleteOrder();
                    }
                  }}
                ></i>
              </span>
            </Col>
          </Row>
        </Card.Header>
        <Spin spinning={itemLoading}>
          <Card.Body
            ref={bodyRef}
            style={{
              transition: "height .5s cubic-bezier(0, 1.33, 0.09, 0.99) 0s ",
              overflow: "hidden",
            }}
          >
            {method !== "Storely" &&
              (status === "Review" || status === "Progressing") && (
                <Input
                  // onChange={} edit address
                  disabled={status === "Review" ? false : true}
                  size="large"
                  className="my-1"
                  addonBefore="Shipping Address"
                  defaultValue={shipping_address}
                />
              )}

            {products.map((product) => {
              const data = {
                subtotal: product.subtotal,
                method: method,
                orderId: orderId,
                price:
                  parseFloat(product.subtotal) / parseFloat(product.quantity),
                quantity: product.quantity,
                id: product.productId,
              };
              return (
                <ProductTile
                  ProductName={product.name}
                  data={data}
                  userId={userId}
                  status={status}
                />
              );
            })}
          </Card.Body>
        </Spin>
        <Card.Footer
          className={`d-flex
        shadow-sm bg-light  align-items-center ${
          status === "Review" || status === "Progressing"
            ? " justify-content-between "
            : "justify-content-end"
        }`}
        >
          <button
            onClick={() => {
              localStorage.setItem("currentOrderId", orderId);
              if (method === "Storely") {
                localStorage.setItem("Storely", true);
              } else {
                localStorage.removeItem("Storely");
              }
              navigate("/dashboard/store");
            }}
            className={`${
              status === "Review" || status === "Progressing"
                ? "p-2 border-2 border-main bg-main text-white rounded-2 "
                : "d-none"
            }`}
          >
            Add products to this order
          </button>
          {expanded ? (
            <i
              className="fa fa-chevron-circle-up link-primary text-lg"
              onClick={handleExpand}
            />
          ) : (
            <i
              className="fa fa-chevron-circle-down link-primary text-lg"
              onClick={handleExpand}
            />
          )}
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default OrderCard;
