import React, { useState, useRef, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductTile from "./ProductTile";

function OrderCard() {
  const [expanded, setExpanded] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const cardBody = bodyRef.current;
    const height = cardBody.scrollHeight + "px";
    if (expanded) {
      cardBody.style.height = height;
    } else {
      cardBody.style.height = "150px";
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
            <Col md={5}>Datete</Col>
            <Col>cost</Col>
            <Col>status</Col>
            <Col md={1}>delet</Col>
          </Row>
        </Card.Header>
        <Card.Body
          ref={bodyRef}
          style={{
            height: "150px",
            transition: "height .5s cubic-bezier(0, 1.33, 0.09, 0.99) 0s ",
            overflow: "hidden",
          }}
        >
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </Card.Body>
        <Card.Footer onClick={handleExpand} className="text-center shadow-sm bg-light ">
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