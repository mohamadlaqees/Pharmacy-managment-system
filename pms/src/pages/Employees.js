import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Employees() {
  let map = [
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },

    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
  ];
  return (
    <div className="page ">
      <div className="flex gap-4">
        <div className="bg-white pt-4 pb-4 shadow-md rounded-md w-1/2 relative">
          <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
            Employees
          </div>
          <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>
          {map.map((e, inx) => {
            return (
              <div
                className={`p-2 ${
                  inx === map.length - 1 ? "border-b-0 mb-1" : "border-b-2"
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
                  <div className="flex justify-center items-center">
                    <span className="text-font2">{e.name}</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Link className="text-red-500 hover:text-red-600 text-xl transition-all">
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                  <Link
                    to={`details/${inx}`}
                    className="text-gray-500 hover:text-gray-600 text-xl transition-all"
                  >
                    <i class="fas fa-edit"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white pt-4 pb-4 shadow-md rounded-md w-1/2 relative">
          <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
            job applications
          </div>
          <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>

          {map.map((e, inx) => {
            return (
              <div
                className={`p-2 ${
                  inx === map.length - 1 ? "border-b-0 mb-1" : "border-b-2"
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
                  <div className="flex justify-center items-center">
                    <span className="text-font2">{e.name}</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Link className="text-red-500 hover:text-red-600 text-xl transition-all">
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                  <Link
                    to={`application/${inx}`}
                    className="text-green-500 hover:text-green-600 text-xl transition-all"
                  >
                    <i class="fas fa-folder-open"></i>{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Employees;
