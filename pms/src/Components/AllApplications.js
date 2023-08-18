import React from "react";
import { Link } from "react-router-dom";

function AllApplications({ data }) {
  return data?.map((e, inx) => {
    return (
      <div
        className={`p-2 ${
          e.status === "Accepted"
            ? "pointer-events-none bg-gray-200 opacity-60 	"
            : ""
        }${
          inx === data.length - 1 ? "border-b-0 mb-1" : "border-b-2"
        } border-gray-200 ${
          inx === 0 ? "mt-2" : ""
        } flex justify-between cursor-pointer hover:bg-slate-200 transition-all`}
        key={e.id}
      >
        <div className="flex gap-3">
          <div>
            <img
              src="/images/user.jpg"
              alt=""
              className="rounded-full w-20 h-20"
            />
          </div>
          <div>
            <div className="flex mt-2 justify-start gap-1 items-start ">
              <span className="text-font2">{e.applicantFirstName}</span>
              <span className="text-font2">{e.applicantLastName}</span>
            </div>
            <div className="mt-2 flex gap-1">
              <span className="text-main text-sm">Job title :</span>
              <span className="text-font2 text-sm">{e.vacancy}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          {e.status === "Accepted" ? (
            <span className="p-2 bg-green-500 text-white rounded-md no-underline">
              Accepted
            </span>
          ) : e.status === "Rejected" ? (
            <span className="p-2 bg-red-500-500 text-white rounded-md no-underline">
              Rejected
            </span>
          ) : (
            <Link
              to={`${e.id}`}
              className="text-gray-500 hover:text-gray-600 text-xl transition-all"
            >
              <i class="fas fa-folder-open"></i>
            </Link>
          )}
        </div>
      </div>
    );
  });
}

export default AllApplications;
