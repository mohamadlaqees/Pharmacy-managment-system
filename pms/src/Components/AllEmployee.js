import React from "react";
import { Link } from "react-router-dom";

function AllEmployee({ data }) {
//   return data.data((e, inx) => {
//     // return (
//     //   <div
//     //     className={`p-2 ${
//     //       inx === data.length - 1 ? "border-b-0 mb-1" : "border-b-2"
//     //     } border-gray-200 ${
//     //       inx === 0 ? "mt-2" : ""
//     //     } flex justify-between cursor-pointer hover:bg-slate-200 transition-all`}
//     //     key={inx}
//     //   >
//     //     <div className="flex gap-3">
//     //       <div>
//     //         <img
//     //           src="/images/user.jpg"
//     //           alt=""
//     //           className="rounded-full w-20 h-20"
//     //         />
//     //       </div>
//     //       <div className="flex justify-center items-center">
//     //         <span className="text-font2">{e.name}</span>
//     //       </div>
//     //     </div>
//     //     <div className="flex gap-3 items-center">
//     //       <Link className="text-red-500 hover:text-red-600 text-xl transition-all">
//     //         <i class="fa-solid fa-trash"></i>
//     //       </Link>
//     //       <Link
//     //         to={`details/${inx}`}
//     //         className="text-gray-500 hover:text-gray-600 text-xl transition-all"
//     //       >
//     //         <i class="fas fa-edit"></i>
//     //       </Link>
//     //     </div>
//     //   </div>
//     // );
//   });
}

export default AllEmployee;
