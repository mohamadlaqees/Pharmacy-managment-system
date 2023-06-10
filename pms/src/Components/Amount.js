import { useState } from "react";
import { InputNumber } from "antd";

const Amount = ({ show, id, setShow }) => {
  const [minimum, setMinimum] = useState(0);
  const saveHandler = () => {
    setShow(null);
  };
  return (
    <td className="p-4 text-center">
      {
        <div>
          <div className={`${show === id ? "block" : "hidden visible"}`}>
            <InputNumber
              min={1}
              value={minimum}
              onChange={(e) => {
                setMinimum(e);
              }}
            />{" "}
            <div className=" gap-2 mb-8">
              <button
                onClick={() => saveHandler()}
                className=" w-24 mt-3 p-1 border-secondry border-2 text-secondry rounded-md hover:text-white hover:bg-secondry hover:border-secondry duration-.3s  text-center"
              >
                Save
              </button>
            </div>
          </div>
          <span className={`${show !== id ? "block" : "hidden invisible"}`}>
            {minimum}
          </span>
        </div>
      }
    </td>
  );
};
export default Amount;
