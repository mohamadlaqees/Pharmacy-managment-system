import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import BestSelling from "../Components/BestSelling";
// import StatCard from "../Components/StatCard";
// import StatTile from "../Components/StatTile";
// import { useState } from "react";
// import StatChart from "../Components/StatChart";
import StatCard from "../Components/StatCard";
import StatTile from "../Components/StatTile";
import { useState } from "react";
import StatChart from "../Components/StatChart";
import TopPrducts from "../Components/TopProducts";
import axios from "../Components/axios";

async function fetchBestSelling() {
  try {
    const resp = await axios.get("/dashboard/best-selling?days=1");
    return resp.data.data;
  } catch (error) {
    return error.message;
  }
}
async function fetchMostProfitable() {
  try {
    const resp = await axios.get("/dashboard/most-profitable?days=1");
    return resp.data.data;
  } catch (error) {
    return error.message;
  }
}
async function fetchOrderCount() {
  try {
    const resp = await axios.get("/dashboard/orders-count?days=1");
    return resp.data.data;
  } catch (error) {
    return error.message;
  }
}
async function fetchRevenue() {
  try {
    const resp = await axios.get("/dashboard/revenue?days=1");
    return resp.data.data;
  } catch (error) {
    return error.message;
  }
}
function Content() {
  const [BestSelling, setBestSelling] = useState([]);
  const [MostProfitable, setMostProfitable] = useState([]);
  const [OrderCount, setOrderCount] = useState(0);
  const [Revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Fetch best selling data and update stat
    fetchBestSelling()
      .then((data) => setBestSelling(data))
      .catch((error) =>
        console.error("Error fetching best selling data:", error)
      );

    // Fetch most profitable data and update state
    fetchMostProfitable()
      .then((data) => setMostProfitable(data))
      .catch((error) =>
        console.error("Error fetching most profitable data:", error)
      );

    // Fetch order count and update state
    fetchOrderCount()
      .then((count) => setOrderCount(count))
      .catch((error) => console.error("Error fetching order count:", error));

    // Fetch revenue data and update state
    fetchRevenue()
      .then((revenueData) => setRevenue(revenueData))
      .catch((error) => console.error("Error fetching revenue data:", error));
  }, []);

  return (
    <>
      {/* <div className="page pb-0">
        <Container fluid>
          <Row>
            <Col md={4} sm={6} className="mb-1">
              <StatCard icon="fa-solid fa-list" title="Orders" data="234" />
      <div className="page pb-0  ">
        <Container fluid className="">
          <Row className="">
            <Col md={4} sm={6} className="mb-1 h-25">
              <StatCard icon="fa-solid fa-list" title="Orders" data={OrderCount} />
            </Col>
            <Col md={4} xs={12} sm={6} className="mb-1 h-25">
              <StatCard
                icon="fas fa-hand-holding-usd"
                title="Revenue"
                data={`$ ${Revenue}`}
              />
            </Col>
            <Col
              md={4}
              sm={12}
              style={{ height: "25vh" }}
              className="text-center "
            >
              {
                 <TopPrducts title=" most profitable products" data={MostProfitable} />
              }{" "}
            </Col>
            {/*
          <StatTile icon="fa fa-line-chart" title="Revenue" data="$50000" />
          <StatTile
            icon="fa-solid fa-users"
            title="New Customers"
            data="152"
          />
          */}
      {/* </Row>
          <Row className="mt-3">
            <Col md={8} sm={12} style={{ height: "60vh" }}>
              <StatChart />
            </Col>
            <Col
              md={4}
              sm={12}
              style={{ height: "60vh" }}
              className="text-center "
            >
              <TopPrducts title="Bestselling" data={BestSelling} />
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default Content;
