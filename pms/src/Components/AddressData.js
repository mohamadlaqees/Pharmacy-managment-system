import React from "react";
import { Row, Button, Col, Container } from "react-bootstrap";

function AddressData() {
  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <Button variant="outline-primary" className="p-1">
            Add New Address
          </Button>
        </Col>
        <Col>
          <select className="form-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
}

export default AddressData;
