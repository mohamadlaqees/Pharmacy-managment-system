import { Button, DatePicker, Dropdown, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import OrderCard from "../Components/OrderCard";
import { Alert, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInStoreOrders } from "../states/orderSlice";
function InStoreOrders() {
  const [PageNumber, setPageNumber] = useState(1);
  const { userData } = useSelector((state) => state.authSlice);
  const { total, orders } = useSelector((state) => state.orderReducer);
  const userId = userData.id; // authenticated Employee's id
  const dispatch = useDispatch();
  const items = ["Pending", "Review", "progressing", "Paid"].map(
    (status) => {
      return {
        key: status,
        label: (
          <li key={status} onClick={() => {}}>
            {status.toUpperCase()}
          </li>
        ),
      };
    }
  );
  useEffect(() => {
    if (userId !== undefined) {
      dispatch(fetchInStoreOrders( PageNumber));
    } else {
      console.log("userId is  not defined");
    }
  }, [PageNumber, dispatch, userId, total]);

  return (
    <div>
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
            //   shipping_address={data.shipping_address}
              orderId={data.order_id}
            //   shipping_fees={data.shipping_fees}
              products={data.products}
            //   userId={data.cutormer_id}
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
