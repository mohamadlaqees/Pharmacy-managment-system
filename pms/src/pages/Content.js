import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BestSelling from "../Components/BestSelling";
import StatCard from "../Components/StatCard";
import StatTile from "../Components/StatTile";
import { useState } from "react";
import StatChart from "../Components/StatChart";

function Content() {


  return (
    <>
      <div className="page pb-0">
        <Container fluid>
          <Row>
            <Col md={4} sm={6} className="mb-1">
              <StatCard icon="fa-solid fa-list" title="Orders" data="234" />
            </Col>
            <Col md={4} xs={12} sm={6} className="mb-1">
              <StatCard
                icon="fas fa-hand-holding-usd"
                title="Income"
                data="$50000"
              />
            </Col>
            <Col
              md={4}
              sm={12}
              className="mb-1 d-flex flex-column justify-content-around"
            >
              <StatTile icon="fa fa-line-chart" title="Revenue" data="$50000" />
              <StatTile
                icon="fa-solid fa-users"
                title="New Customers"
                data="152"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={8} sm={12} style={{ height: "60vh" }} className="">
            <StatChart />
            </Col>
            <Col
              md={4}
              sm={12}
              style={{ height: "60vh" }}
              className="text-center "
            >
              <BestSelling />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Content;
