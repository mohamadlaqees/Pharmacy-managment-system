import { Button, DatePicker, Dropdown, Pagination, Spin } from "antd";
import React, { useEffect, useState } from "react";
import OrderCard from "../Components/OrderCard";
import { Alert, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewOrder, fetchInStoreOrders } from "../states/orderSlice";
import { LoadingOutlined } from "@ant-design/icons";
function InStoreOrders() {
  const [PageNumber, setPageNumber] = useState(1);
  const { userData } = useSelector((state) => state.authSlice);
  const { total, orders, orderLoading } = useSelector(
    (state) => state.orderReducer
  );

  const userId = userData.id; // authenticated Employee's id
  const dispatch = useDispatch();
  const items = ["Pending", "Review", "progressing", "Paid"].map((status) => {
    return {
      key: status,
      label: (
        <li key={status} onClick={() => {}}>
          {status.toUpperCase()}
        </li>
      ),
    };
  });
  useEffect(() => {
    if (userId !== undefined) {
      console.log("fetching orders");
      dispatch(fetchInStoreOrders(PageNumber));
      console.log("fetched");
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
  console.log("orders")
  if (orders.length===0) {
    return (
      <center className="d-flex justify-content-center   align-items-center">
        <h3>yow have no orders made yet </h3>
      </center>
    );
  }
  return (
    <div>
      <Row className="d-flex justify-content-around mt-2  px-4">
        <Col md={1}></Col>
        <Col className="">
          <DatePicker size="large" style={{ width: "100%" }} />
        </Col>
        <Col>
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
        <Col>
          <Alert
            className="d-flex justify-content-center align-items-center "
            style={{ maxHeight: "40px" }}
          >
            username
          </Alert>
        </Col>
        <Col>
          <button
            className="p-2 border-2 border-main bg-main text-white rounded-2"
            onClick={() => {
              dispatch(createNewOrder());
            }}
          >
            Add new order
          </button>
        </Col>
      </Row>
      {console.log(orders)}

      {
        // map orders from slice
        orders.map((data) => {
          return (
            <OrderCard
              total={data.total}
              status={data.status}
              date={data.date}
              time={data.time}
              method={data.method}
              orderId={data.order_id}
              products={data.products}
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

export default InStoreOrders;
