import React, { useState } from "react";
import { NavLink, Outlet  } from "react-router-dom";

export default function OrderLayout() {
  const [selectedpage, setselectedpage] = useState("");
  return (
    <div className="page">
    
      <nav className="d-flex justify-content-center ">
        <NavLink to="all-orders" className="no-underline ">
          <button
            className={`border-primary   border-2  p-2 rounded
            duration-.25s  mx-sm-1 hover:bg-SReg hover:text-white
            ${
              selectedpage === "all-orders"
                ? "bg-main text-white hover:bg-main"
                : ""
            }
            `}
            onClick={() => {
              setselectedpage("all-orders");
            }}
          >
            All orders{" "}
          </button>
        </NavLink>
        <NavLink to="in-store-orders" className="no-underline ">
          <button
            className={`border-primary   border-2  p-2 rounded
            duration-.25s  mx-sm-1 hover:bg-SReg hover:text-white
            ${
              selectedpage === "in-store-orders"
                ? "bg-main text-white hover:bg-main"
                : ""
            }
            `}
            onClick={() => {
              setselectedpage("in-store-orders");
            }}
          >
            in-store orders{" "}
          </button>
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
