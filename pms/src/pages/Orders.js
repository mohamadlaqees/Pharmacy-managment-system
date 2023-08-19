/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import OrderCard from "../Components/OrderCard";
import { useState } from "react";
import { Button, DatePicker, Dropdown, Pagination, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrders } from "../states/orderSlice";
import { LoadingOutlined } from "@ant-design/icons";

function MyOrders() {
  const [PageNumber, setPageNumber] = useState(1);
  const { userData } = useSelector((state) => state.authSlice);
  const [status, setstatus] = useState("ALL");
  const [date, setdate] = useState("");
  // const { total, orders } = useSelector((state) => state.orderReducer);
  const userId = userData.id; // authenticated Employee's id
  const { orderLoading, orderError, total, orders } = useSelector(
    (state) => state.orderReducer
  );
  const dispatch = useDispatch();
  const items = ["Rejected", "Dispatched", "Review", "Progressing", "Paid"].map(
    (status1) => {
      return {
        key: status1,
        label: (
          <li
            key={status1}
            onClick={() => {
              setstatus(status1);
            }}
          >
            {status1.toUpperCase()}
          </li>
        ),
      };
    }
  );
  useEffect(() => {
    if (userId !== undefined) {
      dispatch(
        fetchAllOrders({ PageNumber: PageNumber, status: status, date: date })
      );
    } else {
      console.log("userId is  not defined");
    }
  }, [PageNumber, dispatch, userId, total, status,date]);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  if (orderLoading) {
    console.log("loading");
    return (
      <center className="d-flex justify-content-center   align-items-center">
        <Spin indicator={antIcon} spinning={orderLoading} />
      </center>
    );
  }

  return (
    <>
      <Row className="d-flex justify-content-around mt-2 px-4">
        <Col xs={1} className="p-20px">
          <DatePicker
            size="large"
            style={{ width: "100%" }}
            onChange={(date, dateString) => {
              setdate(dateString);
            }}
          />
        </Col>
        <Col xs={5}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button size="large" className=" hover:text-white ">
              Select Status
            </Button>
          </Dropdown>
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
        //  <OrderCard products={5}  />
        // map orders from slice
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
              method={data.method}
              imgs={data.prescriptions}
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
    </>
  );
}

export default MyOrders;
