import { message } from "antd";
import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Components/loading";
import { getPurchasesDetails } from "../states/supplySlice";

function ReportsDetails() {
  const { loadingP, successP, errorP, purchasesDetails } = useSelector(
    (state) => state.supplySlice
  );
  const { employeeName } = useSelector((state) => state.authSlice);
  const { id } = useParams();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getPurchasesDetails(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <Loading loading={loadingP}>
        {
          <div className="bg-white rounded-md p-8 w-full">
            <div className="mt-8">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr className="text-center ">
                    <th className="p-4">Product name</th>
                    <th className="p-4">Expiry Date</th>
                    <th className="p-4">Cost</th>
                    <th className="p-4">Employee name</th>
                    <th className="p-4">Shipping fees</th>
                    <th className="p-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasesDetails?.products?.map(
                    ({ name, expiryDate, cost }) => {
                      return (
                        <tr key={purchasesDetails.purchaseId}>
                          <td className="p-4 text-center">{name}</td>
                          <td className="p-4 text-center">
                            <div>{expiryDate}</div>
                          </td>
                          <td className="p-4 text-center">
                            {cost} <span className="text-main">$</span>
                          </td>
                          <td className="p-4 text-center">{employeeName}</td>
                          <td className="p-4 text-center">
                            {purchasesDetails.shippingFees}
                          </td>
                          <td className="p-4 text-center">
                            {purchasesDetails.time}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        }
      </Loading>
    </div>
  );
}

export default ReportsDetails;
