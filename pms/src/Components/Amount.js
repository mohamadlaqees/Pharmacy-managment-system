import { useState } from "react";
import { InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../states/supplySlice";

const Amount = ({ show, id, setShow }) => {
  const { quantity } = useSelector((state) => state.supplySlice);
  const dispatch = useDispatch();
  return (
    <td className=" text-center">
      {
        <div>
          <div className={`${show === id ? "block" : "hidden visible"}`}>
            <InputNumber
              min={1}
              value={quantity}
              onChange={(e) => {
                dispatch(setQuantity(e));
              }}
            />{" "}
          </div>
          <span className={`${show !== id ? "block" : "hidden invisible"}`}>
            {quantity}
          </span>
        </div>
      }
    </td>
  );
};
export default Amount;
