/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { InputNumber, Rate, Spin } from "antd";

import { getProdcutDetails, getRate } from "../states/storeSlice";
import { message } from "antd";
import {
  addProductToOrder,
  deleteProductFromCurrentOrder,
  inCurrentOrder,
} from "../utils/AddToCurrentOrder";
import {
  UpdateQuantity,
  addItemToCurrentOrder,
  deleteItemFromOrder,
} from "../states/orderSlice";

function Product() {
  const { id } = useParams();
  const currentOrderId = localStorage.getItem("currentOrderId");
  const storely = localStorage.getItem("Storely");
  let available;

  const dispatch = useDispatch();
  const { details, success, error, numOfRate } = useSelector(
    (state) => state.storeSlice
  );
  const { orderLoading } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    console.log("order loading", orderLoading);
  }, [orderLoading]);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

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

  React.useEffect(() => {
    if (success !== null) {
      msg("success", `${success}`);
    }
    if (error !== null) {
      msg("error", `${error}`);
    }
  }, [error, success]);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    dispatch(getProdcutDetails(+id));
    if (localStorage.getItem("email")) {
      dispatch(getRate(+id));
    }
  }, [dispatch, id]);
  if (details.availability) {
    available = details.availability;
  }
  
  return (
    <div className="page2">
      <div className="flex flex-wrap gap-5 justify-center items-center max-h-mCont">
        <div className=" w-64 h-64 sm:w-form sm:h-form rounded-md p-4 ">
          <img src="/images/med.jpg" alt="" />
        </div>
        <div>
          <div className="p-4 w-details   sm:w-form sm:max-h-mInfo">
            <div className="flex justify-between">
              <div>
                <span className=" block text-sm text-font2">
                  {details.labeller}
                </span>
                <span className=" text-font2">
                  <span className="text-3xl">{details.name}</span>
                </span>
              </div>
              <Rate disabled value={numOfRate} />
            </div>
            <span className=" mb-1 block mt-4 text-blue-600 text-xl">
              {`${available ? `${details.price} $` : ""}`}
            </span>
            <div
              className={`h-fit max-h-80 cursor-pointer ${
                !show3 ? "line-clamp-5" : "overflow-scroll"
              } `}
              onClick={() => setShow3(!show3)}
            >
              {details?.drug?.description}
            </div>

            <div className="flex gap-3 mt-3">
              {available ? (
                <div className="flex gap-3">
                  {currentOrderId ? (
                    <>
                      <InputNumber
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={(value) => {
                          dispatch(
                            UpdateQuantity({
                              orderId: currentOrderId,
                              quantity: value,
                              productId: details.id,
                            })
                          ); 
                        }}
                        disabled={available ? false : true}
                      />

                      {inCurrentOrder(details.id) ? (
                        <Spin indicator={antIcon} spinning={orderLoading}>
                          <button
                            onClick={() => {
                              if (storely) {
                                console.log("storely");
                                dispatch(
                                  deleteItemFromOrder({
                                    orderId: currentOrderId,
                                    productId: details.id,
                                    method: "Storely",
                                  })
                                );
                              } else {
                                dispatch(
                                  deleteItemFromOrder({
                                    orderId: currentOrderId,
                                    productId: details.id,
                                    method: "",
                                  })
                                );
                              }
                            }}
                            className="border-2 border-danger px-3 p-1 hover:text-white hover:bg-danger  rounded-2 p-1"
                          >
                            Remove from order number {currentOrderId}
                          </button>
                        </Spin>
                      ) : (
                        <Spin indicator={antIcon} spinning={orderLoading}>
                          {console.log("order Loaddign", orderLoading)}
                          <button
                            className="border-main   border-2  px-3 p-1 rounded
                                  duration-.25s  mx-sm-1 hover:bg-main hover:text-white"
                            onClick={() => {
                              // console.log(localStorage.getItem("currentOrderId"))
                              dispatch(
                                addItemToCurrentOrder({
                                  orderId: currentOrderId,
                                  productId: details.id,
                                })
                              );
                            }}
                          >
                            Add to order number {currentOrderId}
                          </button>
                        </Spin>
                      )}
                    </>
                  ) : (
                    <span className="block text-center   w-64  p-1 bg-green-500 text-white rounded-md">
                      Available
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex gap-3">
                  <span className="block text-center   w-64  p-1 bg-red-500 text-white rounded-md">
                    Not available
                  </span>
                </div>
              )}
            </div>
            <div className="mt-5">
              <div className="menu" onClick={() => setShow1(!show1)}>
                <div className="flex justify-between">
                  Product Details
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className={` ${show1 ? "drop active" : "drop bg-all"}`}>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Categories : </span>{" "}
                  {details.categories ? details.categories[0] : ""}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">
                    {" "}
                    Dosage form :{" "}
                  </span>
                  {details.dosageForm}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Strength :</span>{" "}
                  {details.strength}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Route :</span>{" "}
                  {details.route}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Otc :</span>{" "}
                  {details.otc}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Synonyms :</span>{" "}
                  {` ${details.synonyms ? details.synonyms[1] : ""} , ${
                    details.synonyms ? details.synonyms[2] : ""
                  }`}
                </div>
              </div>
              <div className="menu" onClick={() => setShow2(!show2)}>
                <div className="flex justify-between">
                  Delivery Info
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div
                className={`${
                  show2 ? "drop active overflow-auto" : "drop bg-all"
                }`}
              >
                Delivery is{" "}
                <span className="font-bold">
                  {available ? "Available" : "Not available"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
