import React, { useEffect } from "react";
import AllEmployee from "../Components/AllEmployee";
import { useDispatch, useSelector } from "react-redux";
import { getJobAppliactions } from "../states/jobSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/loading";
function Employees() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, errorJ, successJ, applications } = useSelector(
    (state) => state.jobSlice
  );
  useEffect(() => {
    dispatch(getJobAppliactions());
  }, [dispatch]);
  return (
    <div>
      <div className="bg-white pt-4 pb-4 shadow-md h-fit rounded-md w-full mt-4 relative">
        <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
          Employees
        </div>
        <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>
        {/* {employees.length > 0 ? (
            <Loading loading={loading}>
              <AllEmployee />
            </Loading>
          ) : ( */}
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
