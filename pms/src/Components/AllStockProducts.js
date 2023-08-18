import React, { useState } from "react";
import { Link } from "react-router-dom";

function AllStockProducts({ data }) {
  const [show, setShow] = useState(false);

  const editHandler = () => {
    setShow(!show);
  };

  return (
    <tbody>
      {data.map(
        ({ productId, quantity, price, orderLimit, minimumStockLevel }) => {
          return (
            <tr key={productId}>
              <td className="p-4 text-center">{productId}</td>
              <td className="p-4 text-center">{quantity}</td>
              <td className="p-4 text-center">
                {price} <span className="text-main">$</span>
              </td>
              <td className=" p-4 text-center  ">{orderLimit}</td>
              <td className=" p-4 text-center  ">{minimumStockLevel}</td>
              <td className="p-4 center">
                <div className="flex gap-3 items-center justify-center">
                  <Link
                    to={`${productId}`}
                    className="text-gray-400 hover:text-gray-500 text-xl transition-all"
                    onClick={() => editHandler()}
                  >
                    <i class="fas fa-edit"></i>{" "}
                  </Link>
                </div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}

export default AllStockProducts;
