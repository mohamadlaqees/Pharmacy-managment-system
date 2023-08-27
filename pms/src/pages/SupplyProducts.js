import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from "antd";
import { getProdcutDetails, getRate } from "../states/storeSlice";
import { message } from "antd";
import Amount from "../Components/Amount";
import Loading from "../Components/loading";
import med from '../images/med.jpg'

import {
  getPricedProductsDetails,
  purshaceProducts,
  resetL,
  setQuantity,
} from "../states/supplySlice";

function SupplyProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, numOfRate } = useSelector((state) => state.storeSlice);
  const { pricedProductsDetails, successP, errorP, loadingB, quantity } =
    useSelector((state) => state.supplySlice);
  const { userId } = useSelector((state) => state.authSlice);

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
    if (successP !== null) {
      msg("success", `${successP}`);
    }
    if (errorP !== null) {
      msg("error", `${errorP}`);
    }
  }, [errorP, successP]);

  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    dispatch(getPricedProductsDetails(+id));
    dispatch(getProdcutDetails(+id));
    if (localStorage.getItem("email")) {
      dispatch(getRate(+id));
    }
  }, [dispatch, id]);

  const purchaseHandler = () => {
    dispatch(
      purshaceProducts({
        pId: id,
        quantity,
        type: pricedProductsDetails.unit,
        eId: userId,
      })
    );
    dispatch(resetL());
  };

  return (
    <div className="page2">
      <div className="flex flex-wrap gap-5 justify-center items-center max-h-mCont">
        <div className=" w-64 h-64 sm:w-form sm:h-form rounded-md p-4 ">
          <img src={med} alt="" />
        </div>
        <div>
          <div className="p-4 w-details   sm:w-form sm:max-h-mInfo">
            <div className="flex justify-between">
              <div>
                <span className=" block text-sm text-font2">
                  {pricedProductsDetails?.labeller
                    ? pricedProductsDetails?.labeller
                    : details.labeller}
                </span>
                <span className=" text-font2">
                  <span className="text-3xl">
                    {pricedProductsDetails?.name
                      ? pricedProductsDetails?.name
                      : details.name}
                  </span>
                </span>
              </div>
              <Rate disabled value={numOfRate} />
            </div>
            {pricedProductsDetails?.price ? (
              <span className=" mb-1 block mt-4 text-blue-600 text-xl">
                {`${pricedProductsDetails?.price} $`}
              </span>
            ) : (
              ""
            )}
            <div
              className={`h-fit max-h-80 cursor-pointer ${
                !show3 ? "line-clamp-5" : "overflow-scroll"
              } `}
              onClick={() => setShow3(!show3)}
            >
              {details?.drug?.description}
            </div>
            <div className="flex gap-5">
              {pricedProductsDetails?.price ? (
                <>
                  <div className="flex gap-3  mt-4">
                    <span className="text-main "> Quantity: </span>{" "}
                    <Amount value={quantity} show={true} change={setQuantity} />
                  </div>
                  <div>
                    <div>
                      <Loading
                        loading={loadingB}
                        clss={
                          "pt-1 pb-1 pr-20 pl-20  mt-4 flex  border-main  border-2 text-main rounded-md  duration-.3s"
                        }
                      >
                        <button
                          type="submit"
                          className="pt-1 pb-1 pr-20 pl-20  mt-4 border-main border-2 text-main rounded-md hover:text-white hover:bg-Hmain hover:border-Hmain duration-.3s"
                          onClick={() => purchaseHandler()}
                        >
                          Purchase
                        </button>
                      </Loading>
                    </div>
                  </div>
                </>
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
                  {pricedProductsDetails?.dosage_form
                    ? pricedProductsDetails?.dosage_form
                    : details.dosageForm}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Strength :</span>{" "}
                  {pricedProductsDetails?.strength
                    ? pricedProductsDetails?.strength
                    : details.strength}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Route :</span>{" "}
                  {pricedProductsDetails?.route
                    ? pricedProductsDetails?.route
                    : details.route}{" "}
                </div>
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Otc :</span>{" "}
                  {pricedProductsDetails?.otc
                    ? pricedProductsDetails?.otc
                    : details.otc}{" "}
                </div>
                {pricedProductsDetails?.unit ? (
                  <div className="p-1">
                    <span className="text-blue-600 font-bold">Unit :</span>{" "}
                    {pricedProductsDetails?.unit}{" "}
                  </div>
                ) : (
                  ""
                )}
                <div className="p-1">
                  <span className="text-blue-600 font-bold">Synonyms :</span>{" "}
                  {` ${details.synonyms ? details.synonyms[1] : ""} , ${
                    details.synonyms ? details.synonyms[2] : ""
                  }`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplyProducts;
