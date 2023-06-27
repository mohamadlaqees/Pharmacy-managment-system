import React from "react";
import { ChangeEvent, useState } from "react";

function JobApplications() {
  const [file, setFile] = useState();
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
  return (
    <div className="page">
      <div className="bg-white rounded-md p-4 ">
        <div className="flex gap-4">
          <div className="rounded-md bg-slate-200 shadow-md  w-64 h-form    ">
            <div className="p-3">
              <img src="/images/user.jpg" alt="" className="rounded-full" />
            </div>
            <span className="p-2 block text-center text-font2">Jop title:</span>
            <span className="p-2 block text-center text-secondry text-lg">
              Pharmacy Employee
            </span>
          </div>
          <div className=" flex gap-4 rounded-md bg-slate-200 shadow-md p-4 w-full h-form ">
            <div className="h-full w-1/2">
              <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-black">
                <span className="block">Full name</span>
                <span className="text-font2  w-72 flex flex-wrap">lore</span>
              </div>
              <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Email</span>
                <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
              </div>
              <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Phone</span>
                <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
              </div>
              <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-black">
                <span className="block"> Address</span>
                <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
              </div>
              <div className="flex justify-between  border-b-2 border-slate-100  p-3 text-black">
                <span className="block">Birth date</span>
                <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
              </div>
              <div className="flex justify-between   p-3 text-black">
                <span className="block">WorkDays</span>
                <span className="text-font2  w-72  ">
                  Saturday Sunday Monday Tuesday Wednesday Thursday Friday
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-black">
                <span className="block">Experiences</span>
                <span className="text-font2  w-72 flex flex-wrap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, dolores! Eius fugiat repellat labore dicta odio? Ab
                  consequatur at dignissimos neque, eligendi ut, magnam
                  obcaecati iure aut sunt adipisci. Et.
                </span>
              </div>
              <div>
                <div className="d-grid  ">
                  <button
                    type="submit"
                    className=" mt-3 p-1 m-2 border-blue-500 border-2 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-.3s  text-center"
                    onClick={downloadFile()}
                  >
                    Download CV{" "}
                  </button>
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

export default JobApplications;
