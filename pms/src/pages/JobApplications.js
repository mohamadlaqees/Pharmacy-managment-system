import React, { useEffect } from "react";
import AllApplications from "../Components/AllApplications";
import { useDispatch, useSelector } from "react-redux";
import { getJobAppliactions } from "../states/jobSlice";
import Loading from "../Components/loading";
function JobApplications() {
  const dispatch = useDispatch();
  const { loading, applications } = useSelector(
    (state) => state.jobSlice
  );
  useEffect(() => {
    dispatch(getJobAppliactions());
  }, [dispatch]);
  return (
    <div className="bg-white pt-4 pb-4 mt-1 shadow-md rounded-md w-full relative ">
      <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
        job applications
      </div>
      <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>
      {applications?.length > 0 ? (
        <Loading loading={loading}>
          <AllApplications data={applications} />
        </Loading>
      ) : (
        <div className={`p-2 ${"border-b-2"} border-gray-200 ${"mt-2"}`}>
          <div className="h-20  max-h-20 text-4xl text-gray-300  flex justify-center items-center">
            Empty
          </div>
        </div>
      )}
    </div>
  );
}

export default JobApplications;
