import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

function Supplier() {
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
  ];
  const [show1, setShow1] = useState(false);
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
          <div className="menu2" onClick={() => setShow1(!show1)}>
            {data.map((e, inx) => {
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
                        src="/images/med.jpg"
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-font2">{e.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-500 hover:text-blue-600 text-xl transition-all">
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`drop ${show1 ? "drop active" : "drop"}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            dolore facere quos veritatis iusto! Cumque at ab veniam expedita
            sunt, laudantium totam odit voluptas incidunt fuga eligendi
            reprehenderit ullam dolor?
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
