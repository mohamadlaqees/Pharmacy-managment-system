import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Amount from "../Components/Amount";

const DropDown = ({ show1, id, name, brand, price, setShow1 }) => {
  const [showB, setShowB] = useState(null);
  const [showQ, setShowQ] = useState(null);
  return (
    <div
      className={`drop2 ${
        show1[0] === true && show1[1] === id ? "drop2 active" : "drop2"
      }`}
    >
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center ">
            <th className="p-4">#</th>
            <th className="p-4">Medicin</th>
            <th className="p-4">Price</th>
            <th className="p-4">Tax</th>
            <th className="p-4">Bonus</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Processed By</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td className="p-4 text-center">{id}</td>
            <td className="p-4">
              <div>{name}</div>
              <div className="text-font2">{brand}</div>
            </td>
            <td className="p-4 text-center">{price}</td>
            <td className="p-4 text-center">---</td>
            <td className=" ">
              <div className="flex justify-center">
                <Amount show={showB} id={id} setShow={setShowB}></Amount>
                <span className="mt-4">$</span>
              </div>
            </td>
            <Amount show={showQ} id={id} setShow={setShowQ}></Amount>
            <td className="p-4 text-center">{`Mohammad laqees`}</td>

            <td className="pt-4 ">
              <div className="flex gap-3 items-center justify-center">
                <button
                  onClick={() => {
                    setShowB(id);
                    setShowQ(id);
                  }}
                  className="text-gray-500 hover:text-gray-600 text-xl transition-all"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="  w-64 p-1 border-secondry border-2 text-secondry rounded-md hover:text-white hover:bg-secondry hover:border-secondry duration-.3s  text-center">
        <button>
          <i class="fa-solid fa-cart-shopping mr-3"></i> purchase
        </button>
      </div>
    </div>
  );
};

export default DropDown;
