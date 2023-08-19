import React, { useEffect } from "react";
import AllEmployee from "../Components/AllEmployee";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/loading";
import { getEmployees } from "../states/employeesSlice";
function Employees() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees, loading } = useSelector((state) => state.employeesSlice);
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <div>
      <div className="bg-white pt-4 pb-4 shadow-md h-fit rounded-md w-full mt-1 relative">
        <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
          Employees
        </div>
        <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>
        <Loading loading={loading} >
          <AllEmployee data={employees}/>
        </Loading>
        <div className={`p-2 ${"border-b-2"} border-gray-200 ${"mt-2"}`}>
          <div className="h-20 w-full  max-h-20 text-4xl text-gray-300  flex justify-center items-center">
            Empty
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
