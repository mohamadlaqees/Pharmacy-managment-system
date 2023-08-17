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
  // const { total, orders } = useSelector((state) => state.orderReducer);
  const userId = userData.id; // authenticated Employee's id
  const { orderLoading, orderError, total, orders } = useSelector(
    (state) => state.orderReducer
  );
  const dispatch = useDispatch();
  const items = ["Pending", "Review", "progressing", "Paid"].map(
    (statistic) => {
      return {
        key: statistic,
        label: (
          <li key={statistic} onClick={() => {}}>
            {statistic.toUpperCase()}
          </li>
        ),
      };
    }
  );
  useEffect(() => {
    if (userId !== undefined) {
      console.log("fetching all orders")
      dispatch(fetchAllOrders( PageNumber));
      console.log("fetched all orders")
    } else {
      console.log("userId is  not defined");
    }
  }, [PageNumber, dispatch, userId, total]);
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
            <DatePicker size="large" style={{ width: "100%" }} />
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
