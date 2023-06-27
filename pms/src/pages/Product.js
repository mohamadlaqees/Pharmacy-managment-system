import React, { useState } from "react";
import { InputNumber } from "antd";

function Product() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <div className="page2">
      <div className="flex flex-wrap gap-5 justify-center items-center max-h-mCont">
        <div className=" w-64 self-start h-64 sm:w-form sm:h-form rounded-md p-4 ">
          <img src="/images/med.jpg" alt="" />
        </div>
        <div>
          <div className="p-4 w-details   sm:w-form sm:max-h-mInfo">
            <span className=" block text-sm text-font2">Brand</span>
            <span className=" text-font2">
              <span className="text-3xl">Title</span>
            </span>
            <span className=" mb-1 block mt-4 text-secondry text-xl">
              price
            </span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores veniam quo similique repudiandae dolorum corporis
              suscipit sint voluptatem expedita ullam, pariatur adipisci laborum
              harum voluptatum itaque autem ab mollitia ex.
            </div>
            <div className="flex gap-5 mt-3">
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChange}
              />
              <button
                type="submit"
                className="  w-64 p-1 border-secondry border-2 text-secondry rounded-md hover:text-white hover:bg-secondry hover:border-secondry duration-.3s  text-center"
              >
                Add to cart
              </button>
            </div>
            <div className="mt-5">
              <div className="menu" onClick={() => setShow1(!show1)}>
                <div className="flex justify-between">
                  Product Details
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className={`drop ${show1 ? "drop active" : "drop"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aperiam necessitatibus laborum error iste, harum possimus
                tempora labore cum officiis quasi dignissimos libero molestias
                ipsum at corporis. Quaerat, perferendis animi?
              </div>
              <div className="menu" onClick={() => setShow2(!show2)}>
                <div className="flex justify-between">
                  Delivery Info
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className={`drop ${show2 ? "drop active" : "drop"}`}>
                Delivery is <span className="font-bold">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
