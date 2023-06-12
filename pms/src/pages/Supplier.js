import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import DropDown from "../Components/DropDown";

function Supplier() {
  let map = [
    {
      id: "1",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "2",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "3",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "4",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "5",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "6",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "7",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "8",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "9",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "10",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "11",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "12",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "13",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "14",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "15",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "16",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "17",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "18",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "19",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },

    {
      id: "20",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "21",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "22",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "23",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "24",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      id: "25",
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
  ];
  const [show1, setShow1] = useState(new Map([[false, null]]));
  const [currentPage, setCurrentPage] = useState(1);
  const dataInPage = 5;
  const lastIndex = currentPage * dataInPage;
  const firstIndex = lastIndex - dataInPage;
  const data = map.slice(firstIndex, lastIndex);

  return (
    <div>
      <div className="bg-white rounded-md p-8 w-full">
        <div className=" w-full m-auto show:w-1/2 block mb-3  ">
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              class="flex items-center justify-center  bg-secondry text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 duration-.3s"
            >
              <i className="fas fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter name of medicine"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{
                boxShadow: "none",
                border: "2px solid #0d6efc",
              }}
            />
          </InputGroup>
        </div>
        <div>
          <div>
            {data.map(({ name, id }, i) => {
              return (
                <div
                  className={`p-2 ${
                    i === map.length - 1 ? "border-b-0 mb-1" : "border-b-2"
                  } border-gray-200 ${
                    i === 0 ? "mt-2" : ""
                  } flex justify-between cursor-pointer hover:bg-slate-200 transition-all relative`}
                  key={id}
                  onClick={() => setShow1([!show1[0], id])}
                >
                  <div className="flex gap-3">
                    <div>
                      <img
                        src="/images/med.jpg"
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-font2">{name}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-500 hover:text-blue-600 text-xl transition-all">
                      <i
                        className="fa-solid fa-arrow-down"
                        onClick={() => setShow1([!show1[0], id])}
                      ></i>
                    </div>
                  </div>
                  <DropDown show1={show1} id={id} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3 p-2   ">
          <ul className="flex justify-center gap-3 ">
            <Pagination
              defaultCurrent={1}
              total={map.length}
              pageSize={dataInPage}
              onChange={(pN, pS) => {
                setCurrentPage(pN);
              }}
              showSizeChanger={false}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Supplier;
