import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header({ set, check }) {
  const [showN, setShowN] = useState(false);
  const [showP, setShowP] = useState(false);
  const pop = useRef();
  const prof = useRef();
  useEffect(() => {
    let popHandler = (e) => {
      if (!pop.current.contains(e.target)) {
        setShowN(false);
      }
      if (!prof.current.contains(e.target)) {
        setShowP(false);
      }
    };
    document.addEventListener("mousedown", popHandler);
    return () => {
      document.removeEventListener("mousedown", popHandler);
    };
  });
  return (
    <div className=" p-1 flex justify-between   bg-white rounded-md shadow-sm ">
      <div>
        <i
          className="fa fa-light fa-align-left  text-gray-500 cursor-pointer hover:text-blue-600 text-xl transition-all mt-2 ml-2"
          onClick={() => set(!check)}
        ></i>
      </div>
      <div className="flex gap-3">
        <div className=" border-r-2 border-gray-200 " ref={pop}>
          <i
            className={`fa-solid fa-bell w-fit -rotate-12 text-xl ${
              showN ? "text-blue-600" : "text-gray-500"
            } cursor-pointer transition-all hover:text-blue-600 mt-2 mr-2 `}
            onClick={() => setShowN(!showN)}
          ></i>
          <div
            className={`w-80 h-80 rounded-md bg-slate-100 absolute right-40 top-12 shadow-md transition duration-.3s overflow-auto ${
              showN ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
          </div>
        </div>
        <div className=" transition-all  " ref={prof}>
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => setShowP(!showP)}
          >
            <div>
              <i
                className={`fa-solid fa-user text-xl ${"text-blue-600"} cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
              ></i>
            </div>
            <div className=" ">
              <span className="block text-sm">Mohammad Laqees</span>
              <span className="text-gray-500 block text-sm">Admin</span>
            </div>
          </div>
          <div
            className={`w-48 h-80 rounded-md bg-slate-100 absolute right-0 top-12 shadow-md transition duration-.3s overflow-auto ${
              showP ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-blue-600 transition-all">
              <div>
                <i className="fa-regular fa-user"></i>{" "}
              </div>
              <div>
                <Link
                  className="no-underline text-gray-500 hover:text-gray-500"
                  to={"profile"}
                >
                  My profile
                </Link>
              </div>
            </div>
            <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-blue-600 transition-all">
              <div>
                <i className="fa-regular fa-pen-to-square"></i>{" "}
              </div>
              <div>
                <Link
                  className="no-underline text-gray-500 hover:text-gray-500"
                  to={"editProfile"}
                >
                  Edit profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
