import React, { useState, useRef, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductTile from "./ProductTile";
import { Input } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import { deleteInStoreOrder, deleteOnlineOrder } from "../states/orderSlice";
import { useNavigate } from "react-router-dom";
import { Spin, message } from "antd";
import ImageUploader from "./ImageUploader";
import axios from "./axios";
import { isOrderInData } from "../utils/AddToCurrentOrder";
function OrderCard({
  products = [],
  status,
  date,
  time,
  imgs = [],
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
  const [prescriptionsremoved, setprescriptionsremoved] = useState(false);
  const [Reason, setReason] = useState("");
  const { itemLoading } = useSelector((state) => state.orderReducer);
  const handleDeleteOrder = () => {
    if (method === "Storely") dispatch(deleteInStoreOrder(orderId));
    else dispatch(deleteOnlineOrder(orderId));
  };
  const [checkoutButton, setcheckoutButton] = useState(
    orderId === parseInt(localStorage.getItem("currentOrderId"))
  );
  async function removePrescriptions() {
    await axios
      .delete(`/orders/in-store-orders/prescriptions/delete/${orderId}`)
      .then(() => {
        message.success("prescriptions remove succefully");
        setprescriptionsremoved(true);
      })
      .catch(() => {
        message.error("Unable to remove prescriptions ");
        setprescriptionsremoved(false);
      });
  }
  async function handleCheckOut() {
    try {
      await axios
        .post(`/orders/in-store-orders/checkout/${orderId}`)
        .then(() => {
          message.success("checkout successfull");
          localStorage.removeItem("currentOrderId");
        })
        .catch((errorr) => {
          console.log(errorr.message);
          message.info("the order contains prescription drugs or is empty ");
        });
    } catch (error) {
      message.info("the order contains prescription drugs");
    }
  }
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
  function handleReject(){
    // dispatch(rejectOrder(orderId))
  }

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
              {method === "Storely" ? (
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
              ) : null}
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
            {method !== "Storely" ? (
              <Input
                disabled={true}
                size="large"
                className="my-1"
                addonBefore="Shipping Address"
                defaultValue={shipping_address}
              />
            ) : null}
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
            <div
              className={`${
                prescriptionsremoved || imgs.length === 0
                  ? "d-none"
                  : "d-flex  relative justify-around border-2 border-SReg rounded mt-1"
              }`}
            >
              {imgs.map((image) => {
                return (
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                    src={image}
                    alt="prescription"
                  />
                );
              })}
              <button
                onClick={() => {
                  removePrescriptions();
                }}
                className={`${
                  status !== "Progressing"
                    ? "d-none"
                    : "absolute -top-4 right-0  text-danger text-lg"
                }`}
              >
                <i class="fas fa-minus-circle"></i>
              </button>
            </div>
            {status === "Progressing" ? (
              <ImageUploader orderId={orderId} />
            ) : null}
          </Card.Body>
          {console.log("imgs", imgs)}
        </Spin>
        <Card.Footer
          className={`d-flex
        shadow-sm bg-light  align-items-center 

             " justify-content-between "
           
        }`}
        >
          {method === "Online" ? (
            status === "Review" ? (
              <div>
                <button className="bg-main text-white p-2 me-5 rounded">
                  Accept
                </button>
                
                  <button className="bg-danger p-2 text-white rounded"
                  onClick={()=>{
                    handleReject()
                  }}
                  >
                    Reject
                  </button>
                  <input
                    type="text"
                    placeHolder="Reason to reject"
                    className="border-2 border-danger rounded h-10"
                    onChange={(e) => {
                      setReason(e.target.value);
                    }}
                  />
              </div>
            ) : (
              status !== "Rejected" && (
                <button className="bg-warning text-white p-2 rounded">
                  Dispatch
                </button>
              )
            )
          ) : null}
          <button
            onClick={() => {
              localStorage.setItem("currentOrderId", orderId);
              if (method === "Storely") {
                localStorage.setItem("Storely", true);
              } else {
                localStorage.removeItem("Storely");
                navigate("/dashboard/store");
              }
              if (checkoutButton && isOrderInData(orderId)) {
                handleCheckOut();
              } else {
                navigate("/dashboard/store");
              }
            }}
            className={`${
              status === "Progressing"
                ? "p-1 px-1 border-2 border-main bg-main text-white rounded-2 "
                : "d-none"
            }`}
          >
            {`${
              checkoutButton && isOrderInData(orderId)
                ? "Checkout"
                : "Add products to this order"
            }`}
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
