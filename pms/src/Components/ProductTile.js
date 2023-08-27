import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InputNumber } from "antd";
import med from '../images/med.jpg'
// import { removeItem, updateQuantity } from "../states/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UpdateQuantity, deleteItemFromOrder } from "../states/orderSlice";

function ProductTile({ ProductName, data, userId, status }) {
  const dispatch = useDispatch();
  const [subtotal, setsubtotal] = useState(data.subtotal);
  const price = data.price
    ? data.price
    : parseFloat(data.subtotal) / parseFloat(data.quantity);
  // function remove_item() {
  //   dispatch(removeItem({ userId: userId, productId: data.id?data.id:data.productId }));
  // }
  // const changeQuant = (value) => {
  //   setsubtotal(value * price);
  //   dispatch(
  //     updateQuantity({
  //       userId: userId,
  //       productId: data.id ? data.id : data.productId,
  //       quantity: value,
  //     })
  //   );
  // };
  return (
    <ol className="list-group ">
      <li className="list-group-item hover:shadow-md  border-info d-flex justify-content-between  mb-1 ">
        <Container>
          <Row>
            <Col sm={12} md={7} className="d-flex justify-content-start">
              <img src={med} className=" w-20" alt={ProductName} />
              <div className="ml-2">
                <div className="fw-bold">{ProductName}</div>
                {price}
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-between align-items-sm-center"
            >
              <div style={{ marginLeft: "5%" }}> {subtotal}</div>
              <InputNumber
                onChange={(value) => {
                  dispatch(
                    UpdateQuantity({
                      orderId: data.orderId,
                      quantity: value,
                      productId: data.id,
                      method: data.method,
                    })
                  );
                }}
                min={1}
                max={10}
                defaultValue={data.quantity}
                disabled={status === "Progressing" ? false : true}
              />
              {data.method === "Storely" ? (
                // <span>
                //   <i
                //     className={`far fa-trash-alt ${
                //       status === "Progressing" ? "link-danger" : "d-none"
                //     } text-2xl `}
                //     onClick={() => {
                //       if (status === "Progressing") {
                //         dispatch(
                //           deleteItemFromOrder({
                //             orderId: data.orderId,
                //             productId: data.id,
                //             method: data.method,
                //           })
                //         );
                //       }
                //     }}
                //   ></i>
                // </span>
                null
              ) : null}
            </Col>
          </Row>
        </Container>
      </li>
    </ol>
  );
}

export default ProductTile;
