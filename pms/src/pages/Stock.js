import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useCallback } from "react";
import Amount from "../Components/Amount";

function Stock() {
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
  const [show, setShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dataInPage = 5;
  const lastIndex = currentPage * dataInPage;
  const firstIndex = lastIndex - dataInPage;
  const data = map.slice(firstIndex, lastIndex);
  const randomQ = useCallback(() => Math.ceil(Math.random() * 100), []);
  return (
    <div className="page">
      <div className="bg-white rounded-md p-8 w-full">
        <div className=" w-full show:w-1/2 block mb-3  ">
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              class="flex items-center justify-center  bg-secondry text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 duration-.3s"
            >
              <i className="fas fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{
                boxShadow: "none",
                border: "2px solid #0d6efc",
              }}
            />
          </InputGroup>
        </div>
        <div className="">
          <Table striped bordered hover size="sm">
            <thead>
              <tr className="text-center ">
                <th className="p-4">#</th>
                <th className="p-4">Medicin</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">minimum quantity</th>
                <th className="p-4">Processed By</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, brand, price }, i) => {
                return (
                  <tr key={id}>
                    <td className="p-4 text-center">{id}</td>
                    <td className="p-4">
                      <div>{name}</div>
                      <div className="text-font2">{brand}</div>
                    </td>
                    <td className="p-4 text-center">{price}</td>
                    <td className="p-4 text-center">{randomQ()}</td>
                   <Amount show={show} id={id} setShow={setShow}></Amount>
                    <td className="p-4 text-center">{`Mohammad laqees`}</td>
                    <td className="p-4 ">
                      <div className="flex gap-3 items-center justify-center">
                        <Link className="text-red-500 hover:text-red-600 text-xl transition-all">
                          <i class="fa-solid fa-trash"></i>
                        </Link>
                        <button
                          onClick={() => {
                            setShow(id);
                          }}
                          className="text-gray-500 hover:text-gray-600 text-xl transition-all"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
  );
}

export default Stock;
