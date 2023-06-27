import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BestSelling from "../Components/BestSelling";
import StatCard from "../Components/StatCard";
import StatTile from "../Components/StatTile";
import { useState } from "react";
import StatChart from "../Components/StatChart";

function Content() {
  const [stat, setstat] = useState(false);

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
              <Container className="text-bold text-secondary bg-SSReg shadow-md shadow-SReg rounded px-3 pb-10 h-100">
                <Row>
                  <Col
                    md={10}
                    sm={10}
                    className="h-10 bg-slate-300 rounded d-flex justify-content-around"
                  >
                    <button className="hover:bg-SReg  w-25 rounded duration-.3s hover:text-white mx-sm-1">
                      Day
                    </button>
                    <button className="hover:bg-SReg w-25 rounded duration-.3s hover:text-white mx-sm-1">
                      Week
                    </button>
                    <button className="hover:bg-SReg w-25 rounded duration-.3s hover:text-white mx-sm-1">
                      Month
                    </button>
                    <button className="hover:bg-SReg w-25 rounded duration-.3s hover:text-white mx-sm-1">
                      Year
                    </button>
                  </Col>
                  <Col sm={2}>
                    <button
                      className="hover:bg-SReg w-100 h-100 border-secondry border-2 rounded duration-.3s hover:text-white mx-sm-1"
                      onClick={() => {
                        setstat(!stat);
                      }}
                    >
                      statistic
                    </button>
                    <div
                      className={`w-40 h-30 absolute rounded-md 
                  shadow transition duration-.2s overflow-auto ${
                    stat ? "opacity-100 visible z-10" : "opacity-0 invisible"
                  } `}
                    >
                      <ol className="list-group m-0 p-0">
                        <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg  ">
                          Revenue
                        </li>
                        <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg  ">
                          Income
                        </li>
                        <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg  ">
                          Orders
                        </li>
                      </ol>
                    </div>
                  </Col>
                </Row>
                <StatChart />
              </Container>
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
