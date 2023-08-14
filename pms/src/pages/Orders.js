/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import OrderCard from "../Components/OrderCard";
import { useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrders } from "../states/orderSlice";

function MyOrders() {
  const [showDate, setShowDate] = useState(false);
  const [showstatuses, SetShowstatuses] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  const { userData } = useSelector((state) => state.authSlice);
  const { total, orders } = useSelector((state) => state.orderReducer);
  const userId = userData.id;// authenticated Employee's id
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== undefined) {
      dispatch(fetchAllOrders({ PageNumber: PageNumber, userID: userId }));
    }else{
      console.log("userId is  not defined")
    }
  }, [PageNumber, dispatch, userId, total]);

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
      {
        console.log(orders)
      }

      {
        //  <OrderCard products={5}  />
        //map orders from slice
        orders.map((data) => {
          return (
            <OrderCard
              total={data.total}
              status={data.status}
              date={data.date}
              time={data.time}
              shipping_address={data.shipping_address}
              orderId={data.order_id}
              shipping_fees={data.shipping_fees}
              products={data.products}
              userId={data.cutormer_id}
            />
          );
        })
      }

      <div className="d-flex justify-center mt-10">
        <Pagination
          current={PageNumber}
          pageSize={10}
          total={total}
          onChange={(PN, _) => {
            setPageNumber(PN);
          }}
        />
      </div>
    </div>
  );
}

export default MyOrders;
