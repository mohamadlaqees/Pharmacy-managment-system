import React, { useState } from "react";

function Header({ set, check }) {
  const [show, setShow] = useState(false);
  //comment
  return (
    <div class=" p-1 flex justify-between   bg-white rounded-md shadow-sm ">
      <div>
        <i
          class="fa fa-light fa-align-left  text-gray-500 cursor-pointer hover:text-blue-600 text-xl transition-all mt-2 ml-2"
          onClick={() => set(!check)}
        ></i>
      </div>
      <div class="flex gap-3">
        <div class=" border-r-2 border-gray-200 ">
          <i
            class={`fa-solid fa-bell w-fit -rotate-12 text-xl ${
              show ? "text-blue-600" : "text-gray-500"
            } cursor-pointer transition-all hover:text-blue-600 mt-2 mr-2 `}
            onClick={() => setShow(!show)}
          ></i>
          <div
            class={`w-80 h-80 rounded-md bg-slate-100 absolute right-44 top-12 shadow-md transition duration-.3s overflow-auto ${
              show ? "opacity-100" : "opacity-0"
            } `}
          >
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-user text-blue-600   transition-all mt-2"></i>
        </div>
        <div class="">
          <span class="block text-sm">Mohammad Laqees</span>
          <span class="text-gray-500 block text-sm">Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
