import React, { Fragment, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { checkContext } from "../layout/Dashboard";
function SideBar() {
  const check = useContext(checkContext);
  return (
    <Fragment>
      <div
        className={`shadow-xl ${
          check ? "w-14" : "w-12%"
        }  rounded-m transition-all h-page`}
      >
        <div className="text-blue-600 text-3xl  mt-2 border-b-2">
          <i className="fa-solid fa-hospital ml-3 mb-2"></i>
        </div>
        <div className="mt-2 ">
          <ul className="p-0">
            <li className={`link`}>
              <NavLink className="route" to={"/dashboard"} end>
                <i className="fa fa-home "></i>
                {check ? "" : "Dashboard"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"store"}>
                <i className="fas fa-shopping-cart "></i>
                {check ? "" : "Store"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"employees"}>
                <i className="fa-solid fa-users"></i>
                {check ? "" : "Employees"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"stock"}>
                <i className="fa-sharp fa-solid fa-layer-group"></i>
                {check ? "" : "Stock"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"orders"}>
                <i className="fa-solid fa-list"></i> {check ? "" : "Orders"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"backups"}>
                <i className="fa-solid fa-database"></i>
                {check ? "" : "Backups"}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-80  text-gray-500   cursor-pointer ">
          <NavLink
            className=" route  hover:text-red-500 "
            to={"/"}
            replace={true}
          >
            <i className="fa-solid fa-right-from-bracket mr-5"></i>
            {check ? "" : "Logout"}
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
