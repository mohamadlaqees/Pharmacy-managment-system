import React, { useState, useRef, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductTile from "./ProductTile";
import { Input } from "antd/lib";

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
            <Col md={4}>{`${date}@${time}`}</Col>
            <Col>Total: {total}</Col>
            <Col>{status}</Col>
            <Col>Fees: {shipping_fees}</Col>
            <Col>mehtod: {method}</Col>
            <Col md={1}>
              {console.log(products)}
              <span>
                <i
                  className={`far fa-trash-alt ${
                    status === "Review" || status === "Progressing"
                      ? "link-danger"
                      : "disabled"
                  } text-2xl `}
                  onClick={() => {
                    //TODO: remove order
                  }}
                ></i>
              </span>
            </Col>
          </Row>
        </Card.Header>
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
        <Card.Footer
          onClick={handleExpand}
          className="text-center shadow-sm bg-light "
        >
          {expanded ? (
            <i className="fa fa-chevron-circle-up link-primary" />
          ) : (
            <i className="fa fa-chevron-circle-down link-primary" />
          )}
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default OrderCard;
