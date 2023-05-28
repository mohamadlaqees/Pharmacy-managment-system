import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
export const checkContext = React.createContext();
const CheckProvider = checkContext.Provider;
function Dashboard() {
  const [check, setCheck] = useState(false);
  return (
    <Fragment >
      <div class="flex ">
        <CheckProvider value={check}>
          <SideBar />
        </CheckProvider>
        <div class={` ${check ? "w-full" : "w-88%"}`}>
          <div class={`fixed ${check ? "w-custom" : "w-88%"} z-20`}>
            <Header set={setCheck} check={check} />
          </div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
