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
  const [status, setstatus] = useState("ALL");
  const [date, setdate] = useState("");
  const items = ["progressing", "Paid"].map((status) => {
    return {
      key: status,
      label: (
        <li
          key={status}
          onClick={() => {
            setstatus(status);
          }}
        >
          {status.toUpperCase()}
        </li>
      ),
    };
  });
  useEffect(() => {
    if (userId !== undefined) {
      dispatch(fetchInStoreOrders({PageNumber,date,status}));
    } else {
      console.log("userId is  not defined");
    }
  }, [PageNumber, dispatch, userId, total,status,date]);
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
          <button
            className="p-2 border-2 border-main bg-main text-white rounded-2"
            onClick={() => {
              dispatch(createNewOrder());
            }}
          >
            Add new order +
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
    </div>
  );
}

export default InStoreOrders;
