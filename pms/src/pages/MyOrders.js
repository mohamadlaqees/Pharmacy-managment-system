/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import OrderCard from "../Components/OrderCard";
import { useState } from "react";

function MyOrders() {
  const [showDate, setShowDate] = useState(false);
  const [showstatuses, SetShowstatuses] = useState(false);
  return (
    <div className="page">
      <Row>
        <Col md={1}></Col>
        <Col xs={1} className="p-20px">
          <button
            className="bg-SReg text-light px-4 rounded py-2"
            onClick={() => {
              setShowDate(!showDate);
            }}
          >
            Date
          </button>
          <div
          className={`w-40 h-30 absolute rounded-md bg-slate-100 
          shadow-md transition duration-.2s overflow-auto ${
            showDate ? "opacity-100 visible z-10" : "opacity-0 invisible"
          } `}
          >
            <ol className="list-group m-0 p-0">
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                20/12/2022
              </li>
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                20/12/2022
              </li>
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                20/12/2022
              </li>
            </ol>
          </div>
        </Col>
        <Col xs={5}>
          <button
            className="bg-SReg text-light px-4 rounded py-2"
            onClick={() => {
              SetShowstatuses(!showstatuses);
            }}
          >
            Status
          </button>
          <div
          className={`w-40 h-auto absolute rounded-md bg-slate-100 
          shadow-md transition duration-.2s overflow-auto ${
            showstatuses ? "opacity-100 visible z-10" : "opacity-0 invisible"
          } `}
          >
            <ol className="list-group m-0 p-0">
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                being delivered
              </li>
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                being delivered
              </li>
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 ">
                being delivered
              </li>
            </ol>
          </div>
        </Col>
        <Col xs={4}>
          <Alert
            className="d-flex justify-content-center align-items-center "
            style={{ maxHeight: "40px" }}
          >
            username
          </Alert>
        </Col>
      </Row>

      <OrderCard />
      <OrderCard />
    </div>
  );
}

export default MyOrders;
