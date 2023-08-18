import { InputNumber } from "antd";
import { useDispatch } from "react-redux";

const Amount = ({ value, change }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={`block `}>
        <InputNumber
          min={1}
          value={value}
          onChange={(e) => {
            dispatch(change(e));
          }}
        />{" "}
      </div>
    </div>
  );
};
export default Amount;
