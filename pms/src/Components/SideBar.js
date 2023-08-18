import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkContext } from "../layout/Dashboard";
import { resetA } from "../states/authSlice";
import { logout, resetL } from "../states/loginSlice";

function SideBar() {
  const check = useContext(checkContext);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    dispatch(resetA());
    dispatch(resetL());
    localStorage.removeItem("email");
  };

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
              <NavLink className="route" to={"employeesContent"}>
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
              <NavLink className="route" to={"supplierContent"}>
                <i class="fa-solid fa-truck"></i>
                {check ? "" : "Supplier"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"orders/all-orders"}>
                <i className="fa-solid fa-list"></i> {check ? "" : "Orders"}
              </NavLink>
            </li>
            <span className="  text-gray-500   cursor-pointer absolute bottom-0  pt-4 pb-3 rounded-md">
              <NavLink
                className=" route  hover:text-red-500 "
                to={"/"}
                replace={true}
                onClick={() => logoutHandler()}
              >
                <i className="fa-solid fa-right-from-bracket mr-5"></i>
                {check ? "" : "Logout"}
              </NavLink>
            </span>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
