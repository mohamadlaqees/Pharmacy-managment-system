import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppliaction, getJobAppliactions } from "../states/jobSlice";
import { message } from "antd";
function AllApplications({ data }) {
  const { successJ, errorJ } = useSelector((state) => state.jobSlice);
  const dispatch = useDispatch();

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
    if (successJ !== null) {
      msg("success", `The application was deleted`);
      dispatch(getJobAppliactions());
    }
    if (errorJ !== null) {
      msg("error", `There is somthing wrong`);
    }
  }, [errorJ, successJ, dispatch]);
  const deleteHandler = (id) => {
    dispatch(deleteAppliaction(id));
  };

  return data.map((e, inx) => {
    return (
      <div
        className={`p-2 ${
          inx === data.length - 1 ? "border-b-0 mb-1" : "border-b-2"
        } border-gray-200 ${
          inx === 0 ? "mt-2" : ""
        } flex justify-between cursor-pointer hover:bg-slate-200 transition-all`}
        key={inx}
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
              <span className="text-font2">{e.first_name}</span>
              <span className="text-font2">{e.last_name}</span>
            </div>
            <div className="mt-2 flex gap-1">
              <span className="text-main text-sm">Job title :</span>
              <span className="text-font2 text-sm">
                {e.vacancy_type === 1 ? "Pharmacy employee" : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="text-red-500 hover:text-red-600 text-xl transition-all"
            onClick={() => deleteHandler(e.id)}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <Link
            to={`application/${e.id}`}
            className="text-gray-500 hover:text-gray-600 text-xl transition-all"
          >
            <i class="fas fa-folder-open"></i>{" "}
          </Link>
        </div>
      </div>
    );
  });
}

export default AllApplications;
