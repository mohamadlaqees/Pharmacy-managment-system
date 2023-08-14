import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { getImage, getUserData } from "../states/authSlice";
export const checkContext = React.createContext();
const CheckProvider = checkContext.Provider;
function Dashboard() {
  const { userId } = useSelector((state) => state.authSlice);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
    dispatch(getImage(userId));
  }, [dispatch,userId]);
  return (
    <Fragment>
      <div className="flex ">
        <CheckProvider value={check}>
          <SideBar />
        </CheckProvider>
        <div className={` ${check ? "w-full" : "w-88%"}`}>
          <div className={`fixed ${check ? "w-custom" : "w-88%"} z-20`}>
            <Header set={setCheck} check={check} />
          </div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
