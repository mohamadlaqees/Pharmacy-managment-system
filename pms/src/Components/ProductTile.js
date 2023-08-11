/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

function ProductTile() {
  return (
    <ol className="list-group">
      <li className="list-group-item border-info d-flex justify-content-between  mb-1 ">
        <Container>
          <Row>
            <Col sm={12} md={7} className="d-flex justify-content-start">
              <img src="/images/med.jpg"  className=" w-20"/>
              <div className="ml-2">
                <div className="fw-bold">Brand Name</div>
                Dosage form
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-between align-items-sm-center"
            >
              <div style={{ marginLeft: "5%" }}> Price * Quantity</div>
              <ButtonGroup style={{ marginRight: "10px" }}>
                <Button variant="outline" style={{border:'1px solid #1390e3'}} >-</Button>
                <div id="btnGroupAddon">14</div>
                <Button variant ='outline' style={{border:'1px solid #1390e3'}} className="">+</Button>
              </ButtonGroup>
              <span>
                <i className="far fa-trash-alt link-danger fs-5"></i>
              </span>
            </Col>
          </Row>
        </Container>
      </li>
    </ol>
  );
}

export default ProductTile;
