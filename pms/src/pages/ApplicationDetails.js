import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showAppliaction } from "../states/jobSlice";

function ApplicationDetails() {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const downloadFile = (fileName = "CV-PDF-file.pdf") => {
    // fetch("https://cors-anywhere.herokuapp.com/" + filePath, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //   },
    // })
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = fileName;
    //     document.body.appendChild(link);
    //     link.click();
    //     link.parentNode.removeChild(link);
    //   });
  };
  const { application } = useSelector((state) => state.jobSlice);
  useEffect(() => {
    dispatch(showAppliaction(id));
  }, [dispatch, id]);
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
              {application.vacancy_type === 1 ? "Pharmacy employee" : ""}
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
                  {application.first_name} {application.last_name}
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
                <div>
                  <button
                    type="submit"
                    className=" mt-3 w-64 p-1 m-2 border-blue-500 border-2 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-.3s  text-center"
                    onClick={downloadFile()}
                  >
                    Download CV{" "}
                  </button>
                </div>
                <div className="mt-1">
                  {file && `${file.name} - ${file.type}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-2 ">
          <div className="d-grid  ">
            <button
              type="submit"
              className="  pt-2 pl-5 pr-5 pb-2 border-green-500 border-2 text-white rounded-md bg-green-500  hover:text-white hover:bg-green-700 hover:border-green-700 duration-.3s  text-center"
            >
              Acceptance{" "}
            </button>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="  pt-2 pl-5 pr-5 pb-2 border-red-500 border-2 text-white rounded-md bg-red-500 hover:text-white hover:bg-red-700 hover:border-red-700 duration-.3s  text-center"
            >
              Rejection{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetails;
