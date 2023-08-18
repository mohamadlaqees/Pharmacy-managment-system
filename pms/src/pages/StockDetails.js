import { message } from "antd";
import Table from "react-bootstrap/Table";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../Components/loading";
import {
  getStockProducts,
  resetS,
  setMinimumStockLevel,
  setOrderLimit,
  setPrice,
  setStockProductsMinimumLevel,
  setStockProductsOrderLimit,
  setStockProductsPrice,
} from "../states/stockSlice";
import Amount from "../Components/Amount";

function StockDetails() {
  const {
    successS,
    errorS,
    loadingS,
    stockProducts,
    minimumStockLevel,
    orderLimit,
    price,
  } = useSelector((state) => state.stockSlice);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const P = useRef(price);
  const ML = useRef(minimumStockLevel);
  const OL = useRef(orderLimit);

  const msg = (type, msg) => {
    switch (type) {
      case "success":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      default:
        return "";
    }
  };

  const saveHandler = () => {
    if (price !== P.current) {
      dispatch(setStockProductsPrice({ id, price }));
    }

    if (orderLimit !== OL.current) {
      dispatch(setStockProductsOrderLimit({ id, OL: orderLimit }));
    }

    if (minimumStockLevel !== ML.current) {
      dispatch(setStockProductsMinimumLevel({ id, ML: minimumStockLevel }));
    }
  };

  React.useEffect(() => {
    if (successS !== null) {
      msg("success", `${successS}`);
    }
    if (errorS !== null) {
      msg("error", `${errorS}`);
    }
  }, [errorS, successS]);

  useEffect(() => {
    dispatch(resetS());
    dispatch(getStockProducts());
  }, [dispatch]);

  return (
    <div className="page ">
      {
        <div className="bg-white rounded-md  translate-y-1/4 w-full">
          <div className="absolute top-0 h-10 w-full  bg-blue-600 text-white font-bold text-center rounded-md">
            <div
              className="flex justify-start p-2  text-2xl text-white hover:text-Hmain cursor-pointer "
              onClick={() => navigate("/dashboard/stock")}
            >
              <i className="fa fa-arrow-left	"></i>
            </div>
          </div>

          <div className="p-20">
            <Loading loading={loadingS}>
              <div>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr className="text-center ">
                      <th className="p-4">Id</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Order limit</th>
                      <th className="p-4">Minimum stock level</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockProducts?.map((e) => {
                      return e.productId === +id ? (
                        <tr key={e.productId}>
                          <td className="p-4 text-center">{e.productId}</td>
                          <td className="p-4 text-center">{e.quantity}</td>
                          <td className="p-4 text-center ">
                            <Amount
                              value={price === 0 ? e.price : price}
                              change={setPrice}
                            />{" "}
                          </td>
                          <td className="p-4 text-center">
                            <Amount
                              value={
                                orderLimit === 0 ? e.orderLimit : orderLimit
                              }
                              change={setOrderLimit}
                            />
                          </td>
                          <td className="p-4 text-center">
                            <Amount
                              value={
                                minimumStockLevel === 0
                                  ? e.minimumStockLevel
                                  : minimumStockLevel
                              }
                              change={setMinimumStockLevel}
                            />
                          </td>
                          <td className="p-4">
                            <div className="flex gap-3 items-center justify-center  ">
                              <button
                                className=" border-2 pt-1 pb-1 pl-2 pr-2 border-main rounded-md cursor-pointer text-main hover:text-white hover:bg-main text-xl transition-all"
                                onClick={() => saveHandler()}
                              >
                                <i class="fas fa-check"></i>{" "}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        ""
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Loading>
          </div>
        </div>
      }
    </div>
  );
}

export default StockDetails;
