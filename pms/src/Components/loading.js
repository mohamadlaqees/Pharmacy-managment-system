import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Loading({ loading, children }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#5fb9f7",
      }}
      spin
    />
  );
  const elementType = children.props.type;
  if (elementType === "submit") {
    const cloneButton = React.cloneElement(
      children,
      {
        className:
          "p-1 border-SReg  border-2 text-SReg rounded-md  duration-.3s",
      },
      "Loading ",
      <Spin indicator={antIcon} />
    );
    return loading ? cloneButton : children;
  } else {
    return loading ? (
      <span
        className={
          "flex items-center justify-center mt-2  text-gray-600  h-20 text-3xl "
        }
      >
        Loading <Spin indicator={antIcon} />
      </span>
    ) : (
      children
    );
  }
}

export default Loading;
