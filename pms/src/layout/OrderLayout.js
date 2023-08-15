import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function OrderLayout() {
  const [selectedpage, setselectedpage] = useState("");
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); // Split the path into segments
  const currentRoute = pathSegments[pathSegments.length - 1];
  console.log(currentRoute);
  return (
    <div className="page">
      <nav className="d-flex justify-content-center ">
        <NavLink to="all-orders" className="no-underline ">
          <button
            className={`border-primary   border-2  p-2 rounded
            duration-.25s  mx-sm-1 hover:bg-SReg hover:text-white
            ${
              currentRoute === "all-orders"
                ? "bg-main text-white hover:bg-main"
                : ""
            }
            `}
          >
            All orders{" "}
          </button>
        </NavLink>
        <NavLink to="in-store-orders" className="no-underline ">
          <button
            className={`border-primary   border-2  p-2 rounded
            duration-.25s  mx-sm-1 hover:bg-SReg hover:text-white
            ${
              currentRoute === "in-store-orders"
                ? "bg-main text-white hover:bg-main"
                : ""
            }
            `}
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
