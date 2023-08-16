import React from "react";
import { Link } from "react-router-dom";

function AllReports({ data }) {
  return (
    <tbody>
      {data ? (
        data.map(({ purchase_id, quantity, total, date }) => {
          return (
            <tr key={purchase_id}>
              <td className="p-4 text-center">{purchase_id}</td>
              <td className="p-4 text-center">
                <div>{quantity}</div>
              </td>
              <td className="p-4 text-center">
                {total} <span className="text-main">$</span>
              </td>
              <td className="p-4 text-center">{date}</td>
              <td className="p-4 ">
                <div className="flex gap-3 items-center justify-center">
                  <Link
                    className="text-gray-400 hover:text-gray-500 text-xl transition-all"
                    to={`${purchase_id}`}
                  >
                    <i class="fas fa-folder-open"></i>{" "}
                  </Link>
                </div>
              </td>
            </tr>
          );
        })
      ) : (
        <tr className="h-20 w-full  max-h-20 text-4xl text-gray-300  flex justify-center items-center">
          Empty
        </tr>
      )}
    </tbody>
  );
}

export default AllReports;
