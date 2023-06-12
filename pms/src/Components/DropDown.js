import React from "react";

const DropDown = ({ show1, id }) => {
  return (
    <div
      className={`drop2 ${
        show1[0] === true && show1[1] === id ? "drop2 active" : "drop2"
      }`}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolore
      facere quos veritatis iusto! Cumque at ab veniam expedita sunt, laudantium
      totam odit voluptas incidunt fuga eligendi reprehenderit ullam dolor?
    </div>
  );
};

export default DropDown;
