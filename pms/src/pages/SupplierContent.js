import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SupplierContent() {
  return (
    <div className="page">
      <div className="p-2 flex justify-end gap-2 border-b-2 border-slate-200">
        <div>
          <NavLink
            to={`supplier`}
            className="w-72 h-form rounded-md pt-3 mb-3 cursor-pointer transition-all no-underline "
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "blue" : "gray",
              };
            }}
          >
            Supplier
          </NavLink>
        </div>
        <div>
          <NavLink
            to={`reports`}
            className="w-72 h-form rounded-md pt-3 mb-3 cursor-pointer transition-all no-underline "
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "blue" : "gray",
              };
            }}
          >
            Reports
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SupplierContent;
