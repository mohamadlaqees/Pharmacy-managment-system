import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Loading({ loading, children, clss }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#0270e9",
      }}
      spin
    />
  );
  const elementType = children?.props?.type;
  if (elementType === "submit") {
    const cloneButton = React.cloneElement(
      children,
      {
        className: `${
          clss !== ""
            ? clss
            : "p-1 border-main  border-2 text-main rounded-md  duration-.3s"
        }`,
      },
      "Loading",
      <span className="ml-2">
        <Spin indicator={antIcon} />
      </span>
    );
    return loading ? cloneButton : children;
  } else {
    return loading ? (
      <span
        className={
          "flex gap-2 items-center justify-center mt-2  text-gray-600  h-20 text-3xl "
        }
      >
        <span>Loading</span>{" "}
        <span className="ml-2">
          <Spin indicator={antIcon} />
        </span>
      </span>
    ) : (
      children
    );
  }
}

export default Loading;
