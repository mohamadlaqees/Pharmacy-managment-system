import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Components/loading";
import { acceptApplicant, resetJ, showAppliaction } from "../states/jobSlice";
import { useNavigate } from "react-router-dom";

function ApplicationDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { application, errorJ, successJ, loading } = useSelector(
    (state) => state.jobSlice
  );
  const navigate = useNavigate();

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  React.useEffect(() => {
    if (successJ !== null) {
      msg("success", successJ);
      dispatch(resetJ());
      navigate("/dashboard/employeesContent/jobApplications");
    }
    if (errorJ !== null) {
      msg("error", errorJ);
    }
  }, [errorJ, successJ, navigate, dispatch]);

  const msg = (type, msg) => {
    switch (type) {
      case "success":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch(showAppliaction(id));
  }, [dispatch, id]);

  const acceptHanlder = () => {
    setShow2(false);
    dispatch(resetJ());
    dispatch(acceptApplicant(id));
  };

  const rejectHanlder = () => {
    setShow1(false);
    dispatch(resetJ());
    dispatch(acceptApplicant(id));
  };

  return (
    <div className="page">
      <div className="bg-white rounded-md p-4 ">
        <div className="flex gap-4">
          <div className="rounded-md bg-slate-200 shadow-md  w-72 h-form    ">
            <div className="p-3">
              <img src="/images/user.jpg" alt="" className="rounded-full" />
            </div>
            <span className="p-2 block text-center text-font2">Jop title:</span>
            <span className="p-2 block text-center text-secondry text-lg">
              {application.vacancy}
            </span>
          </div>
          <div
            className=" flex gap-4 rounded-md bg-slate-200 shadow-md p-4 w-full h-form "
            style={{ width: "1000px" }}
          >
            <div className="h-full w-1/2">
              <div className="flex justify-between mb-4 border-b-2 border-slate-100 p-3 text-black">
                <span className="block">Full name</span>
                <span className="text-font2  w-72 flex flex-wrap">
                  {application.applicantFirstName}{" "}
                  {application.applicantFirstName}
                </span>
              </div>
              <div className="flex justify-between mb-4 border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Email</span>
                <span className="text-font2  w-72 flex flex-wrap">
                  {application.email}
                </span>
              </div>
              <div className="flex justify-between mb-4  border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Phone</span>
                <span className="text-font2  w-72 flex flex-wrap">
                  {application.mobile}
                </span>
              </div>
              <div className="flex justify-between mb-4  border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Address</span>
                <span className="text-font2  w-72 flex flex-wrap">
                  {application.address}
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="text-font1 w-job text-center ">
                <img
                  src={"/images/resume.jpg"}
                  alt=""
                  className="mr-auto ml-auto rounded-md w-64 h-64"
                />
                <div className=" mt-10 ">
                  <a
                    href={application.resume}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                    className=" pt-2 pb-2 pr-10 pl-10 w-64  border-blue-500 border-2  rounded-md  hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-.3s  text-center cursor-pointer no-underline"
                  >
                    Download cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-2 ">
          <div className="d-grid  ">
            <Loading
              loading={loading}
              error={errorJ}
              clss={
                "  pt-2 pl-5 pr-5 pb-2 border-green-500 border-2 text-green-500  rounded-md  hover:text-white hover:bg-green-500  duration-.3s  text-center"
              }
            >
              <button
                type="submit"
                className={` ${
                  show1 === true ? "block" : "hidden"
                }  pt-2 pl-5 pr-5 pb-2 border-green-500 border-2 text-green-500  rounded-md  hover:text-white hover:bg-green-500  duration-.3s  text-center`}
                onClick={() => acceptHanlder()}
              >
                Acceptance{" "}
              </button>
            </Loading>
          </div>

          <div className="d-grid">
            <Loading
              loading={loading}
              error={errorJ}
              clss={
                "  pt-2 pl-5 pr-5 pb-2 border-red-500 border-2 text-red-500 rounded-md  hover:text-white hover:bg-red-500  duration-.3s  text-center"
              }
            >
              <button
                type="submit"
                className={`${
                  show2 === true ? "block" : "hidden"
                } pt-2 pl-5 pr-5 pb-2 border-red-500 border-2 text-red-500 rounded-md  hover:text-white hover:bg-red-500  duration-.3s  text-center`}
                onClick={() => rejectHanlder()}
              >
                Rejection{" "}
              </button>
            </Loading>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetails;
