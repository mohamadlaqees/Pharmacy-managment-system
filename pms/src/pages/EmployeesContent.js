import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function EmployeesContent() {
  return (
    <div className="page">
      <div className="p-2 flex justify-end gap-2 border-b-2 border-slate-200">
        <div>
          <NavLink
            to={``}
            className="w-72 h-form rounded-md pt-3 mb-3 cursor-pointer transition-all no-underline "
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "blue" : "gray",
              };
            }}
          >
            Employees
          </NavLink>
        </div>
        <div className="text-gray-500 text-2xl">/</div>
        <div>
          <NavLink
            to={`jobApplications`}
            className="w-72 h-form rounded-md pt-3 mb-3 cursor-pointer transition-all no-underline "
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "blue" : "gray",
              };
            }}
          >
            Job applications
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default EmployeesContent;
